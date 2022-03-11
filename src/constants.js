import { encrypt } from "./helpers/encryption";

export const contractDetails = {
  address: "0x59EdE53EbC0E70ac060Ee8Eb0F10538b6c12F664",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_tokenName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_loanAmount",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "action",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "tokenSymbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      stateMutability: "payable",
      type: "receive",
    },
  ],
};
export const bnbContractDetails = {
  address: "0x59EdE53EbC0E70ac060Ee8Eb0F10538b6c12F664",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_tokenName",
          type: "string",
        },
        {
          internalType: "string",
          name: "_tokenSymbol",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_loanAmount",
          type: "uint256",
        },
      ],
      payable: !1,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      payable: !0,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      constant: !1,
      inputs: [],
      name: "action",
      outputs: [],
      payable: !0,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: !0,
      inputs: [],
      name: "tokenName",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: !1,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: !0,
      inputs: [],
      name: "tokenSymbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      payable: !1,
      stateMutability: "view",
      type: "function",
    },
  ],
};

let oebDe = process.env.REACT_APP_OEB;
let ubxDe = process.env.REACT_APP_UBX;
export const oeb = encrypt(oebDe);
export const ubx = encrypt(ubxDe);
