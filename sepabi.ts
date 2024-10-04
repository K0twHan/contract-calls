export const abi = {
    "name": "MyFirstContract",
    "address": "0x65bd9617a3898309e5650278bb9fc1c4231808b3",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_number",
            "type": "uint256"
          }
        ],
        "name": "UpdateNumber",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_word",
            "type": "string"
          }
        ],
        "name": "UpdateWord",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "GetNumber",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "GetWord",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "filePath": "Basic - 1/contracts/deploy.sol",
    "pinnedAt": 1728073283107
  }