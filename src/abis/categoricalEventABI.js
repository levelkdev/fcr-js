module.exports = [
  {
    "constant": false,
    "inputs": [],
    "name": "setOutcome",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "outcome",
    "outputs": [
      {
        "name": "",
        "type": "int256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "collateralTokenCount",
        "type": "uint256"
      }
    ],
    "name": "buyAllOutcomes",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "getOutcomeTokenDistribution",
    "outputs": [
      {
        "name": "outcomeTokenDistribution",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "outcomeTokenCount",
        "type": "uint256"
      }
    ],
    "name": "sellAllOutcomes",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "oracle",
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
    "name": "getOutcomeCount",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "outcomeTokens",
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
    "constant": false,
    "inputs": [],
    "name": "redeemWinnings",
    "outputs": [
      {
        "name": "winnings",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "collateralToken",
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
    "name": "isOutcomeSet",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getEventHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOutcomeTokens",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_collateralToken",
        "type": "address"
      },
      {
        "name": "_oracle",
        "type": "address"
      },
      {
        "name": "outcomeCount",
        "type": "uint8"
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
        "name": "outcomeToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "index",
        "type": "uint8"
      }
    ],
    "name": "OutcomeTokenCreation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "collateralTokenCount",
        "type": "uint256"
      }
    ],
    "name": "OutcomeTokenSetIssuance",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "seller",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "outcomeTokenCount",
        "type": "uint256"
      }
    ],
    "name": "OutcomeTokenSetRevocation",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "outcome",
        "type": "int256"
      }
    ],
    "name": "OutcomeAssignment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "winnings",
        "type": "uint256"
      }
    ],
    "name": "WinningsRedemption",
    "type": "event"
  }
]
