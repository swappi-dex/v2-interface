const SwappiIdoplatformABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swappiNFT",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
      {
        internalType: "address",
        name: "_swappiFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_votingEscrow",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
    ],
    name: "addIDOToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ratioForLP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceForLP",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "whitelistAddress",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "maxAmtPerEntryInWhitelist",
        type: "uint256[]",
      },
      {
        internalType: "uint256[7]",
        name: "privateData",
        type: "uint256[7]",
      },
      {
        internalType: "uint256[2]",
        name: "publicData",
        type: "uint256[2]",
      },
    ],
    name: "adminApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "IDOId",
        type: "uint256",
      },
    ],
    name: "claimAllTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "currentIDOId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "IDOId",
        type: "uint256",
      },
    ],
    name: "finalize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getAmtOfCFXCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer_addr",
        type: "address",
      },
    ],
    name: "getAmtOfCFXForBuyer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer_addr",
        type: "address",
      },
    ],
    name: "getAmtOfTokenForBuyer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
    ],
    name: "getCurrentIDOIdByTokenAddr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "isIDOActiveByID",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer_addr",
        type: "address",
      },
    ],
    name: "isInWhitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer_addr",
        type: "address",
      },
    ],
    name: "maxAmountInPrivateSaleByAddr",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt_to_buy",
        type: "uint256",
      },
    ],
    name: "privateSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amt_to_buy",
        type: "uint256",
      },
    ],
    name: "publicSale",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenInfo",
    outputs: [
      {
        internalType: "bool",
        name: "isApproved",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "valid",
        type: "bool",
      },
      {
        internalType: "address",
        name: "tokenOwner",
        type: "address",
      },
      {
        internalType: "string",
        name: "projectName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalAmt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtForLP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceForLP",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amtOfCFXCollected",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "veTokenThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "NFTThreshold",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxAmtPerBuyer",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountExcludingWhitelist",
            type: "uint256",
          },
        ],
        internalType: "struct idoplatform.privateSpecs",
        name: "priSaleInfo",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
        ],
        internalType: "struct idoplatform.publicSpecs",
        name: "pubSaleInfo",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "totalMaxAmountOfWhitelist",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export default SwappiIdoplatformABI;
