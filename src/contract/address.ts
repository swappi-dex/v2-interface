export type TokenInfo = Record<"name" | "address" | "symbol", string>;

const MainnetTokenInfos: TokenInfo[] = [
  {
    name: "Wrapped CFX",
    address: "0x14b2D3bC65e74DAE1030EAFd8ac30c533c976A9b",
    symbol: "CFX",
  },
  {
    name: "Wrapped BTC",
    address: "0x1F545487c62e5ACfEa45dcAdd9c627361d1616D8",
    symbol: "WBTC",
  },
  {
    name: "Ether",
    address: "0xa47f43DE2f9623aCb395CA4905746496D2014d57",
    symbol: "ETH",
  },
  {
    name: "Tether USD",
    address: "0xfe97E85d13ABD9c1c33384E796F10B73905637cE",
    symbol: "USDT",
  },
  {
    name: "Swappi Token",
    address: "0x22F41aBf77905f50dF398f21213290597e7414Dd",
    symbol: "PPI",
  },
  {
    name: "USD Coin",
    address: "0x6963EfED0aB40F6C3d7BdA44A05dcf1437C44372",
    symbol: "USDC",
  },
  {
    name: "BNB",
    address: "0x94bd7A37d2cE24cC597E158fACaa8d601083ffeC",
    symbol: "BNB",
  },
  {
    name: "MULTI",
    address: "0x9Fb9a33956351cf4fa040f65A13b835A3C8764E3",
    symbol: "MULTI",
  },
  {
    name: "TriAngle DAO",
    address: "0x6138c1073e3cD4a4CF71BcbC8DbF0AAF0CD8E0CA",
    symbol: "TAD",
  },
  {
    name: "AS",
    address: "0x0641422bd6d14912d2EB7977e96AB355DEAD8108",
    symbol: "AS",
  },
  {
    name: "Goledo",
    address: "0xa4B59aA3De2af57959C23E2c9c89a2fCB408Ce6A",
    symbol: "GOL",
  },
  {
    name: "FLOKI",
    address: "0x9B36f165baB9ebe611d491180418d8De4b8f3a1f",
    symbol: "FLOKI",
  },
  {
    name: "HydroxylToken",
    address: "0x72952D09C19044059Ce48007B289570b3320C8b6",
    symbol: "HYT",
  },
  {
    name: "MIToken",
    address: "0xD3cF900B0EC2194B418760E1494653449327692c",
    symbol: "MIT",
  },
  {
    name: "HydraSF",
    address: "0x0737daceA5f4E212525E7FbA2E7ECAa069DEDd28",
    symbol: "HSF",
  },
  {
    name: "X nucleon CFX",
    address: "0x889138644274a7Dc602f25A7e7D53fF40E6d0091",
    symbol: "XCFX",
  },
  {
    name: "Nucleon Governance Token",
    address: "0xFE197E7968807B311D476915DB585831B43A7E3b",
    symbol: "NUT",
  },
  {
    name: "ABC PoS Pool",
    address: "0x905f2202003453006EAF975699545F2e909079B8",
    symbol: "ABC",
  },
  {
    name: "Maneki-Neko",
    address: "0xBEcD75Bde87020A4f0D3084bCCE9cde794547660",
    symbol: "NEKO",
  },
];

const TestnetTokenInfos: TokenInfo[] = [
  {
    name: "Wrapped CFX",
    address: "0x2ED3dddae5B2F321AF0806181FBFA6D049Be47d8",
    symbol: "CFX",
  },
  {
    name: "Wrapped BTC",
    address: "0x54593e02c39aEFf52B166bd036797D2b1478de8D",
    symbol: "WBTC",
  },
  {
    name: "Ether",
    address: "0xcD71270F82f319E0498FF98AF8269C3f0D547c65",
    symbol: "ETH",
  },
  {
    name: "Tether USD",
    address: "0x7d682e65EFC5C13Bf4E394B8f376C48e6baE0355",
    symbol: "USDT",
  },
  {
    name: "Swappi Token",
    address: "0x49916ba65d0048c4bBb0A786A527d98D10A1cd2D",
    symbol: "PPI",
  },
  {
    name: "USD Coin",
    address: "0x34e676cC66DB8Ea20C2a42a1939b5bcf303CED72",
    symbol: "USDC",
  },
  {
    name: "BNB",
    address: "0x34e676cC66DB8Ea20C2a42a1939b5bcf303CED72",
    symbol: "BNB",
  },
  {
    name: "MULTI",
    address: "0x34e676cC66DB8Ea20C2a42a1939b5bcf303CED72",
    symbol: "MULTI",
  },
  {
    name: "TriAngle DAO",
    address: "0x34e676cC66DB8Ea20C2a42a1939b5bcf303CED72",
    symbol: "TAD",
  },
  {
    name: "AS",
    address: "0x34e676cC66DB8Ea20C2a42a1939b5bcf303CED72",
    symbol: "AS",
  },
  {
    name: "Goledo",
    address: "0x273191f4d8878226023ceb1EB88B5dE44854b111",
    symbol: "GOL",
  },
  {
    name: "FLOKI",
    address: "0x9B36f165baB9ebe611d491180418d8De4b8f3a1f",
    symbol: "FLOKI",
  },
  {
    name: "HydroxylToken",
    address: "0x72952D09C19044059Ce48007B289570b3320C8b6",
    symbol: "HYT",
  },
  {
    name: "MIToken",
    address: "0xD3cF900B0EC2194B418760E1494653449327692c",
    symbol: "MIT",
  },
  {
    name: "HydraSF",
    address: "0x0737daceA5f4E212525E7FbA2E7ECAa069DEDd28",
    symbol: "HSF",
  },
  {
    name: "X nucleon CFX",
    address: "0x092690013ef7aF87eaf45030906baa86b8fAA411",
    symbol: "XCFX",
  },
  {
    name: "Nucleon Governance Token",
    address: "0x48EE76131e70762DB59a37e6008ccE082805aB00",
    symbol: "NUT",
  },
  {
    name: "ABC PoS Pool",
    address: "0x905f2202003453006EAF975699545F2e909079B8",
    symbol: "ABC",
  },
  {
    name: "Maneki-Neko",
    address: "0xBEcD75Bde87020A4f0D3084bCCE9cde794547660",
    symbol: "NEKO",
  },
];

export const TokenInfos =
  import.meta.env.MODE === "production" ? MainnetTokenInfos : TestnetTokenInfos;

// 地址 map 到 info
export const TokenAddressMap: Record<string, TokenInfo> = TokenInfos.reduce(
  (obj, token) => {
    obj[token.address] = token;
    return obj;
  },
  {} as Record<string, TokenInfo>
);

// symbol map 到 info
export const TokenSymbolMap: Record<string, TokenInfo> = TokenInfos.reduce(
  (obj, token) => {
    obj[token.symbol] = token;
    return obj;
  },
  {} as Record<string, TokenInfo>
);

export const baseTokenSymbols = ["CFX", "WBTC", "ETH", "USDT"];

export const baseTokensInfo = baseTokenSymbols.map(
  (symbol) => TokenSymbolMap[symbol]
);
