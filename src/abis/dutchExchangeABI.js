module.exports = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "token1",
        "type": "address"
      },
      {
        "name": "token2",
        "type": "address"
      },
      {
        "name": "auctionIndex",
        "type": "uint256"
      }
    ],
    "name": "getPriceInPastAuction",
    "outputs": [
      {
        "name": "num",
        "type": "uint256"
      },
      {
        "name": "den",
        "type": "uint256"
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
        "name": "token1",
        "type": "address"
      },
      {
        "name": "token2",
        "type": "address"
      }
    ],
    "name": "getAuctionIndex",
    "outputs": [
      {
        "name": "auctionIndex",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
