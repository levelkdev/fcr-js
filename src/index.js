const token = require('./token')
const registry = require('./registry')
const futarchyChallengeFactoryABI = require('./abis/futarchyChallengeFactoryABI')
const decisions = require('./enums/decisions')
const outcomes = require('./enums/outcomes')
const outcomeTokens = require('./enums/outcomeTokens')
const allEventsPromises = require('./allEventsPromises')

module.exports = (web3, config) => {

  if (!config.tokenAddress) {
    throw new Error(`tokenAddress was not provided in config`)
  }
  if (!config.registryAddress) {
    throw new Error(`registryAddress was not provided in config`)
  }
  if (!config.futarchyChallengeFactoryAddress) {
    throw new Error(`futarchyChallengeFactoryAddress was not provided in config`)
  }

  const tokenInstance = token(web3, config.tokenAddress, config.defaultOptions)

  const futarchyChallengeFactory = new web3.eth.Contract(
    futarchyChallengeFactoryABI,
    config.futarchyChallengeFactoryAddress
  )

  const registryInstance = registry(
    tokenInstance,
    futarchyChallengeFactory,
    web3,
    config.registryAddress,
    config.defaultOptions
  )

  const events = async () => {
    const dutchExchange = await registryInstance.getDutchExchange()
    const lmsr = await registryInstance.getLMSR()
    return allEventsPromises({
      Token: tokenInstance.contract,
      Registry: registryInstance.contract,
      FutarchyChallengeFactory: futarchyChallengeFactory,
      DutchExchange: dutchExchange,
      LMSR: lmsr
    })
  }

  return {
    events,
    token: tokenInstance,
    registry: registryInstance,
    decisions,
    outcomes,
    outcomeTokens
  }
}
