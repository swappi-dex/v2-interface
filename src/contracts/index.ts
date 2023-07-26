import { createContract } from "@cfx-kit/dapp-utils/dist/contract";
import isProduction from "@utils/isProduction";
import SwappiFactoryABI from "./abis/swappi-core/SwappiFactory";
import SwappiPairABI from "./abis/swappi-core/SwappiPair";
import FarmControllerABI from "./abis/swappi-farm/FarmController";
import MultiRewardPoolABI from "./abis/swappi-farm/MultiRewardPool";
import PPIRateABI from "./abis/swappi-farm/PPIRate";
import PPITokenABI from "./abis/swappi-farm/PPIToken";
import VotingEscrowABI from "./abis/swappi-farm/VotingEscrow";
import SwappiLotteryABI from "./abis/swappi-lottery/SwappiLottery";
import SwappiNFTABI from "./abis/swappi-nft/SwappiNFT";
import SwappiIdoplatformABI from "./abis/swappi-idoplatform/SwappiIdoplatform";
export { createERC20Contract } from "@cfx-kit/dapp-utils/dist/contract";

export const PPITokenContract = createContract({
  address: isProduction
    ? "0x22f41abf77905f50df398f21213290597e7414dd"
    : "0x49916ba65d0048c4bbb0a786a527d98d10a1cd2d",
  ABI: PPITokenABI,
});

// example
(function () {
  const data = PPITokenContract.encodeFunctionData("balanceOf", [
    "0x102e0fb8a5ED6E0f0899C3ed9896cb8973aA29bB",
  ]);
  console.log(data);
  // fetchChain<bigint>({
  //   url: import.meta.env.VITE_ESpaceRpcUrl,
  //   params: [
  //     {
  //       data,
  //       to: PPITokenContract.address,
  //     },
  //   ]
  // })
  //   .then((res) => {
  //     return PPITokenContract.decodeFunctionResult("totalSupply", res)?.[0];
  //   });
})();

export const SwappiFactoryContract = createContract({
  address: isProduction
    ? "0xe2a6f7c0ce4d5d300f97aa7e125455f5cd3342f5"
    : "0x36b83e0d41d1dd9c73a006f0c1cbc1f096e69e34",
  ABI: SwappiFactoryABI,
});

export const SwappiRouterContractAddress = isProduction
  ? "0x62b0873055bf896dd869e172119871ac24aea305"
  : "0x873789aaf553fd0b4252d0d2b72c6331c47aff2e";

export const createSwappiPairContract = (pairAddress: string) =>
  createContract({
    address: pairAddress,
    ABI: SwappiPairABI,
  });

export const FarmControllerContract = createContract({
  address: isProduction
    ? "0xca49dbc049fca1916a1e51315b992a0d1eb308e7"
    : "0x13319d155e2d8f26f421214111b5592a86088878",
  ABI: FarmControllerABI,
});

export const MultiRewardPoolContract = createContract({
  address: isProduction
    ? "0x0e8aa3481aac931d80366494a207094f22c5f5d1"
    : "0x7950a0f02463bcd42bd0a2932940eaed86512f81",
  ABI: MultiRewardPoolABI,
});

export const PPIRateContract = createContract({
  address: isProduction
    ? "0x71f3136cf723825913bb2cf42b0f87f75223dfad"
    : "0xf256ea0bcb5a3a3a2cef0af4d927b1900f9fc18b",
  ABI: PPIRateABI,
});

export const VotingEscrowContract = createContract({
  address: isProduction
    ? "0xf270e44105c1270bc7a4ffedbcb699486ada7a6a"
    : "0xb2459c6445fe94cc2d2d2aff9ffc70157f77c649",
  ABI: VotingEscrowABI,
});

export const SwappiNFTontract = createContract({
  address: isProduction
    ? "0xbbdba5043a73e87533b9378e58dea577a872dc04"
    : "0x76d50e98bb22d8d7534293f0091ebe3642537165",
  ABI: SwappiNFTABI,
});

export const SwappiLotteryContract = createContract({
  address: isProduction
    ? "0xa592a383d6854f89cbe6b86cf46e73527fccb8ae"
    : "0x466241eb27177ae33ebad2868a07addff35681f1",
  ABI: SwappiLotteryABI,
});

export const SwappiIdoplatformContract = createContract({
  address: isProduction
    ? "0x76d0ea17b1a727f718832dc1ba52574b0c8269af"
    : "0x336c47d196abf4a3be1e615dbc7776d0de5eff6a",
  ABI: SwappiIdoplatformABI,
});
