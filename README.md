# fcr-js

JavaScript library for interfacing with [fcr-contracts](https://github.com/levelkdev/fcr-contracts)

# Install

`npm install fcr-js`

fcr-js needs to use web3 1.0.0:

`npm add web3@^1.0.0-beta.26`

# Usage

### Configure an instance of `fcr`:

```js
  import Web3 from 'web3'
  import fcrjs from 'fcr-js'

  const web3Url = "http://localhost:8545"
  const web3 = new Web3(new Web3.providers.HttpProvider(web3Url))

  const fcrConfig = {
    "tokenAddress": "0x1342cda88deedb4960b1aed0dba32c40a65af031",
    "registryAddress": "0xf32357eb3a62d7d0decff0bf2fadcbe0b026832a",
    "futarchyChallengeFactoryAddress": "0x20fb87c57eff3326e856c6955aae72cf88b95a7c",
    "web3Url": web3Url,
    "socketWeb3Url": "ws://localhost:8545",
    "defaultOptions": {
      "gas": 6930000
    }
  }

  const fcr = fcrjs(web3, fcrConfig)

  // use fcr to interact with the registry
  fcr.registry.apply(...)

```

### Apply a listing

```js
  const applicantAddress = '0x6512df5964f1578a8164ce93a3238f2b11485d1c'
  const listingTitle = 'listing #1'
  const tokenStake = 123 * 10 ** 18

  fcr.registry.apply(
    applicantAddress,
    listingTitle,
    tokenStake
  ).then((tx) => console.log(tx))

```

### Challenge a listing

```js
  const challengerAddress = '0x687355ca7a320e5420a3db5ae59ef662e4146786'
  const listingTitle = 'listing #1'
  const dataString = 'abc'

  fcr.registry.createChallenge(
    challengerAddress,
    listingTitle,
    dataString
  ).then((tx) => console.log(tx))

```

### Get a challenge instance

```js
  const challengeIndex = 1
  fcr.registry.getChallenge(challengeIndex).then((challenge) => {
    // use `challenge`
  })

```

### Start the challenge

```js
  challenge.start(challengerAddress).then((tx) => console.log(tx))
```

### Fund the challenge

```js
  challenge.fund(challengerAddress).then((tx) => console.log(tx))
```

### Buy an outcome on an active challenge

```js
  const buyerAddress = '0x4e0100882b427b3be1191c5a7c7e79171b8a24dd'
  const outcomeTokenName = 'LONG_ACCEPTED' // || SHORT_ACCEPTED, LONG_DENIED, SHORT_DENIED
  const buyAmount = 1500 * 10 ** 18

  challenge.buyOutcome(
    buyerAddress,
    outcomeTokenName,
    buyAmount
  ).then((tx) => console.log(tx))

```

### Resolve challenge futarchy decision

Resolves the CategoricalEvent to `0` (accepted) or `1` (denied) based on average trading price provided by the StandardMarketWithPriceLogger contract. The registry uses this decision to add or remove the listing associated with this challenge.

```js
  const senderAddress = '0x4e0100882b427b3be1191c5a7c7e79171b8a24dd'

  challenge.resolveFutarchyDecision(senderAddress).then((tx) => console.log(tx))
  
```

### Resolve challenge futarchy markets

Resolves the ScalarEvent contracts using the price of FCRToken/EtherToken trading pair on DutchX.

```js
  const senderAddress = '0x4e0100882b427b3be1191c5a7c7e79171b8a24dd'

  challenge.resolveFutarchyMarkets(senderAddress).then((tx) => console.log(tx))

```
