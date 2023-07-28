const routerConfig = [
  {
    name: "exchange",
    path: "/swap",
  },
  {
    name: "liquidity",
    path: "/pool/v2",
  },
  {
    name: "farming",
    children: [
      {
        name: "farming",
        path: "/farming/farming",
      },
      {
        name: "dual farming",
        path: "/farming/dual-farming",
      },
    ],
  },
  {
    path: "/staking",
  },
  {
    path: "/lottery",
  },
  {
    path: "/launchpad",
  },
];

export default routerConfig;
