module.exports = [
  {
    "constant": true,
    "inputs": [],
    "name": "timeToPriceResolution",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "NUM_PRICE_POINTS",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "scalarPriceOracleFactory",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "stakeAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "dutchExchange",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "futarchyOracleFactory",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "lmsrMarketMaker",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "comparatorToken",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tradingPeriod",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_comparatorToken",
        "type": "address"
      },
      {
        "name": "_stakeAmount",
        "type": "uint256"
      },
      {
        "name": "_tradingPeriod",
        "type": "uint256"
      },
      {
        "name": "_timeToPriceResolution",
        "type": "uint256"
      },
      {
        "name": "_futarchyOracleFactory",
        "type": "address"
      },
      {
        "name": "_scalarPriceOracleFactory",
        "type": "address"
      },
      {
        "name": "_lmsrMarketMaker",
        "type": "address"
      },
      {
        "name": "_dutchExchange",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "upperBound",
        "type": "int256"
      },
      {
        "indexed": false,
        "name": "lowerBound",
        "type": "int256"
      }
    ],
    "name": "SetUpperAndLowerBound",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "didit",
        "type": "bool"
      }
    ],
    "name": "DebugCreateChallenge",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_registry",
        "type": "address"
      },
      {
        "name": "_challenger",
        "type": "address"
      },
      {
        "name": "_listingOwner",
        "type": "address"
      }
    ],
    "name": "createChallenge",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
