const _ = require('lodash')
const registryABI = require('./abis/registryABI')
const LMSRMarketMakerABI = require('./abis/LMSRMarketMakerABI')
const dutchExchangeABI = require('./abis/dutchExchangeABI')
const TransactionSender = require('./transactionSender')
const challenge = require('./challenge')

module.exports = (token, futarchyChallengeFactory, web3, address, defaultOptions) => {
  if (!defaultOptions) defaultOptions = {}

  const contract = new web3.eth.Contract(registryABI, address)

  const watchEvent = (eventName, filter, callback, errCallback) => {
    // TODO: get the `fromBlock` value from fcr-config
    let eventFilterConfig = {
      fromBlock: 0,
      toBlock: 'latest'
    }
    if (filter) {
      eventFilterConfig.filter = filter
    }

    contract.getPastEvents(eventName, eventFilterConfig, async (err, events) => {
      if (err) {
        errCallback(err)
      } else {
        // TODO: calling getPastEvents() before watching for events makes
        //       the `.on('data',...)` handler fire for all past events.
        //       should figure out why, and see if there's a cleaner way to
        //       get these.
        contract.events[eventName](eventFilterConfig)
          .on('data', callback)
          .on('error', errCallback)
      }
    })
  }

  const apply = async (applicant, listingHash, amount, data) => {
    const existingListing = await getListing(listingHash)
    if (existingListing.applicationExpiry !== '0') {
      throw new Error(`listing '${listingHash}' already exists`)
    }

    const transactionSender = new TransactionSender()
    await transactionSender.send(
      contract,
      'apply',
      [
        web3.utils.fromAscii(listingHash),
        amount,
        data
      ],
      _.extend({ from: applicant }, defaultOptions)
    )

    return transactionSender.response()
  }

  const updateStatus = async (sender, listingHash) => {
    const existingListing = await getListing(listingHash)

    if (existingListing.challengeID !== '0') {
      const challenge = await getChallenge(existingListing.challengeID)
      const challengeEnded = await challenge.ended()
      if (!challengeEnded) {
        throw new Error(`listing '${listingHash}' still has an active challenge`)
      }
    }

    const transactionSender = new TransactionSender()
    await transactionSender.send(
      contract,
      'updateStatus',
      [
        web3.utils.fromAscii(listingHash)
      ],
      _.extend({ from: sender }, defaultOptions)
    )

    return transactionSender.response()
  }

  const createChallenge = async (challenger, listingHash, data) => {
    const existingListing = await getListing(listingHash)
    if (existingListing.applicationExpiry === '0' || existingListing.isWhitelisted === false) {
      throw new Error(`listing '${listingHash}' does not exist`)
    }
    // TODO: check for ended() challenge
    if (existingListing.challengeID !== '0') {
      throw new Error(`listing '${listingHash}' already has an active challenge`)
    }
    
    // check that there are enough auctions for the token pair to calc upper/lower bounds
    const currentAuctionIndex = await getTokenPairAuctionIndex()
    const numPricePoints = await futarchyChallengeFactory.methods.NUM_PRICE_POINTS().call()

    if (currentAuctionIndex <= numPricePoints) {
      throw new Error(`Not enough auctions for token pair. There are currently ${currentAuctionIndex} auctions and ${numPricePoints} auctions are needed`)
    }

    const transactionSender = new TransactionSender()
    await transactionSender.send(
      contract,
      'createChallenge',
      [
        web3.utils.fromAscii(listingHash),
        data
      ],
      _.extend({ from: challenger }, defaultOptions)
    )

    return transactionSender.response()
  }

  const getListing = async (listingHash) => {
    const listingHashBytes32 = web3.utils.fromAscii(listingHash)
    const listing = await contract.methods.listings(listingHashBytes32).call()
    return listing
  }

  const getListingHash = async (listingTitle) => {
    const listingHashBytes32 = web3.utils.fromAscii(listingTitle)
    return listingHashBytes32
  }

  const getChallenge = async (challengeNonce) => {
    const challengeResp = await contract.methods.challenges(challengeNonce).call()
    const { challengeAddress } = challengeResp
    const LMSR = await getLMSR()
    return challenge({
      fcrToken: token,
      registryContract: contract,
      LMSR,
      web3,
      id: challengeNonce,
      address: challengeAddress,
      defaultOptions
    })
  }

  const getLMSR = async () => {
    const lmsrMarketMakerAddress = 
      await futarchyChallengeFactory.methods.lmsrMarketMaker().call()
    return new web3.eth.Contract(LMSRMarketMakerABI, lmsrMarketMakerAddress)
  }

  const getAllChallenges = async () => {
    let challenges = []

    async function nextChallenge(challengeNonce) {
      const challenge = await getChallenge(challengeNonce)
      if (challenge.address.indexOf('0x000000') == -1) {
        challenges.push(challenge)
        await nextChallenge(challengeNonce + 1)
      } else {
        return challenges
      }
    }

    await nextChallenge(1)

    return challenges
  }

  const name = async () => {
    const name = await contract.methods.name().call()
    return name
  }

  async function getTokenPairAuctionIndex () {
    const dutchExchange = await getDutchExchange()
    const tokenAddress = token.address
    const comparatorTokenAddress = await getComparatorTokenAddress()
    const auctionIndex = await dutchExchange.methods.getAuctionIndex(
      tokenAddress,
      comparatorTokenAddress
    ).call()
    return auctionIndex
  }

  async function getComparatorTokenAddress () {
    const comparatorTokenAddress = futarchyChallengeFactory.methods.comparatorToken().call()
    return comparatorTokenAddress
  }

  async function getDutchExchange () {
    const dutchExchangeAddress = await futarchyChallengeFactory.methods.dutchExchange().call()
    return new web3.eth.Contract(dutchExchangeABI, dutchExchangeAddress)
  }

  return {
    watchEvent,
    apply,
    updateStatus,
    createChallenge,
    getAllChallenges,
    getListing,
    getChallenge,
    getDutchExchange,
    getLMSR,
    name,
    contract,
    address,
    getListingHash
  }
}
