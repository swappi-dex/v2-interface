import React from "react";
import { fetchChain } from "@cfx-kit/dapp-utils/dist/fetch";
import { PPITokenContract } from "@contracts/index";

// example
(function () {
  fetchChain<bigint>({
    url: import.meta.env.VITE_ESpaceRpcUrl,
    params: [
      {
        data: PPITokenContract.encodeFunctionData("balanceOf", [
          "0x102e0fb8a5ED6E0f0899C3ed9896cb8973aA29bB",
        ]),
        to: PPITokenContract.address,
      },
    ],
    responseHandler: (res: string) =>
      PPITokenContract.decodeFunctionResult("totalSupply", res)?.[0],
  })
    .then((res) => {
      console.log(res);
    })
})();

const Swap: React.FC = () => {
  return <div>Swap</div>;
};

export default Swap;
