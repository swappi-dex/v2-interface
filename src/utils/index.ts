import { getCreate2Address } from "@ethersproject/address";

import { keccak256, pack } from "@ethersproject/solidity";

const SwappiFactoryAddress =
  import.meta.env.MODE === "development"
    ? "0x36b83e0d41d1dd9c73a006f0c1cbc1f096e69e34"
    : "0xe2a6f7c0ce4d5d300f97aa7e125455f5cd3342f5";

const INIT_CODE_HASH =
  "0xe9013b07c22e5f47a6c477cffbbef5afdb24c90dedb1e8eacd17963f07186901";

// 运算 pair 地址
export function generatePairAddress(address0: string, address1: string) {
  if (address0.toLowerCase() > address1.toLowerCase()) {
    return generatePairAddress(address1, address0);
  }
  return getCreate2Address(
    SwappiFactoryAddress,
    keccak256(["bytes"], [pack(["address", "address"], [address0, address1])]),
    INIT_CODE_HASH
  );
}
