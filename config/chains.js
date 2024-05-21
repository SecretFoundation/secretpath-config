// Mainnet configurations

export const mainnets = {
  ethereumMainnet: {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  binanceSmartChainMainnet: {
    chainId: 56,
    name: "BNB Chain",
    currency: "BNB",
    explorerUrl: "https://bscscan.com/",
    rpcUrl: "https://bsc-dataseed.binance.org/",
  },
  polygonMainnet: {
    chainId: 137,
    name: "Polygon Mainnet",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com/",
    rpcUrl: "https://polygon-mainnet.infura.io",
  },
  optimismMainnet: {
    chainId: 10,
    name: "OP Mainnet",
    currency: "ETH",
    explorerUrl: "https://optimistic.etherscan.io/",
    rpcUrl: "https://optimism-mainnet.infura.io",
  },
  arbitrumMainnet: {
    chainId: 42161,
    name: "Arbitrum One",
    currency: "ETH",
    explorerUrl: "https://explorer.arbitrum.io",
    rpcUrl: "https://arbitrum-mainnet.infura.io",
  },
  avalancheMainnet: {
    chainId: 43114,
    name: "Avalanche Network C-Chain",
    currency: "AVAX",
    explorerUrl: "https://snowtrace.io/",
    rpcUrl: "https://avalanche-mainnet.infura.io",
  },
  baseMainnet: {
    chainId: 8453,
    name: "Base Mainnet",
    currency: "ETH",
    explorerUrl: "https://basescan.org",
    rpcUrl: "https://mainnet.base.org",
  },
  lineaMainnet: {
    chainId: 59144,
    name: "Linea",
    currency: "ETH",
    explorerUrl: "https://lineascan.build",
    rpcUrl: "https://linea.blockpi.network/v1/rpc/public",
  },
  scrollMainnet: {
    chainId: 534352,
    name: "Scroll",
    currency: "ETH",
    explorerUrl: "https://scrollscan.com",
    rpcUrl: "https://rpc.scroll.io",
  },
  metisMainnet: {
    chainId: 1088,
    name: "Metis",
    currency: "METIS",
    explorerUrl: "https://1088.routescan.io",
    rpcUrl: "https://andromeda.metis.io",
  
  },
  XDCMainnet: {
    chainId: 50,
    name: "XDC Mainnet",
    currency: "XDC",
    explorerUrl: "https://explorer.xinfin.network/",
    rpcUrl: "https://rpc.xinfin.network",
  },
  NearAuroraMainnet: {
    chainId: 1313161554,
    name: "Aurora Mainnet",
    currency: "ETH",
    explorerUrl: "https://explorer.mainnet.aurora.dev/",
    rpcUrl: "https://mainnet.aurora.dev",
  }
};
// Testnet configurations
export const testnets = {
  sepoliaTestnet: {
    chainId: 11155111,
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://rpc.sepolia.org",
  },
  scrollTestnet: {
    chainId: 534351,
    name: "Scroll Sepolia Testnet",
    currency: "ETH",
    explorerUrl: "https://sepolia.scrollscan.com",
    rpcUrl: "https://sepolia-rpc.scroll.io/",
  },
  polygonTestnet: {
    chainId: 80002,
    name: "Polygon Amoy Testnet",
    currency: "MATIC",
    explorerUrl: "https://amoy.polygonscan.com/",
    rpcUrl: "https://rpc-amoy.polygon.technology/",
  },
  optimismTestnet: {
    chainId: 11155420,
    name: "Optimism Sepolia",
    currency: "ETH",
    explorerUrl: "https://optimism-sepolia.blockscout.com",
    rpcUrl: "https://sepolia.optimism.io",
  },
  arbitrumTestnet: {
    chainId: 421614,
    name: "Arbitrum Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.arbiscan.io",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
  },
  baseSepoliaTestnet: {
    chainId: 84532,
    name: "Base Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia-explorer.base.org",
    rpcUrl: "https://sepolia.base.org",
  },
  berachainTestnet: {
    chainId: 80085,
    name: "Berachain Artio",
    currency: "BERA",
    explorerUrl: "https://artio.beratrail.io/",
    rpcUrl: "https://artio.rpc.berachain.com/",
  },
  etherlinkTestnet: {
    chainId: 128123,
    name: "Etherlink Testnet",
    currency: "XTZ",
    explorerUrl: "https://testnet-explorer.etherlink.com/",
    rpcUrl: "https://node.ghostnet.etherlink.com/",
  },
  metisSepoliaTestnet: {
    chainId: 59902,
    name: "Metis Sepolia Testnet",
    currency: "sMETIS",
    explorerUrl: "https://sepolia-explorer.metisdevops.link",
    rpcUrl: "https://sepolia.metisdevops.link",
  },
  nearAuroraTestnet: {
    chainId: 1313161555,
    name: "Aurora Testnet",
    currency: "ETH",
    explorerUrl: "https://explorer.testnet.aurora.dev/",
    rpcUrl: "https://testnet.aurora.dev",
  },
  lineaSepoliaTestnet: {
    chainId: 59141,
    name: "Linea Sepolia test network",
    currency: "ETH",
    explorerUrl: "https://sepolia.lineascan.build",
    rpcUrl: "https://rpc.sepolia.linea.build",
  },
  XDCApothemTestnet: {
    chainId: 51,
    name: "XDC TestNet",
    currency: "XDC",
    explorerUrl: "https://explorer.apothem.network/",
    rpcUrl: "https://rpc.apothem.network",
  },
  liskSepoliaTestnet: {
    chainId: 4202,
    name: "Lisk Sepolia Testnet",
    currency: "ETH",
    explorerUrl: "https://sepolia-blockscout.lisk.com",
    rpcUrl: "https://rpc.lisk-sepolia-testnet.gelato.digital",
  },
  FhenixTestnet: {
    chainId: 42069,
    name: "Fhenix Frontier",
    currency: "tFHE",
    explorerUrl: "https://explorer.testnet.fhenix.zone/",
    rpcUrl: "https://api.testnet.fhenix.zone:7747/",
  },
};

// Logos
let chainLogos = {
  // Arbitrum Mainnet
  42161: "https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5",
  // Linea Mainnet
  59144: "https://lineascan.build/images/svg/brands/main.svg?v=24.4.2.0",

  //Scroll Mainnet
  534352: "https://scrollscan.com/images/svg/brands/main.svg?v=24.4.3.0",

  // Metis Mainnet
  1088: "https://cms-cdn.avascan.com/cms2/metis.97de56bab032.svg",

  //Sepolia Testnet
  11155111:
    "https://sepolia.etherscan.io/images/svg/brands/ethereum-original.svg",

  // Scroll Testnet
  534351: "https://scrollscan.com/images/svg/brands/main.svg?v=24.4.3.0",

  // Polygon Amoy Testnet
  80002:
    "https://assets-global.website-files.com/637e2b6d602973ea0941d482/63e26c8a3f6e812d91a7aa3d_Polygon-New-Logo.png",

  // Optimism Testnet
  11155420:
    "https://optimistic.etherscan.io/assets/optimism/images/svg/logos/chain-light.svg?v=24.4.4.4",

  // Arbitrum Testnet
  421614: "https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5",

  // Base Sepolia Testnet
  84532: "https://basescan.org/images/svg/brands/main.svg?v=24.4.4.9",

  // Berachain Testnet
  80085:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-tjg8Kqgr76Ved6PbcjBoGCHWwnhDUljH-CziyBOzw&s",

  // Etherlink Testnet
  128123: "https://www.etherlink.com/favicon.ico",

  //Metis Sepolia Testnet
  59902: "https://cms-cdn.avascan.com/cms2/metis.97de56bab032.svg",

  // Near Aurora Testnet
  1313161555:
    "https://play-lh.googleusercontent.com/0zJGaaodqDL--ig2W2h60zp5uLMexQs4_PRlon5qhakSwqsdwa_ZmV9DQKvg1WVnn-w=w240-h480-rw",

  // Linea Testnet
  59141: "https://lineascan.build/images/svg/brands/main.svg?v=24.4.2.0",

   // XDC Mainnet
   50: "https://miro.medium.com/v2/resize:fit:1200/1*CyR7XMIw_iMEGKsA_MoxwA.png",

  // XDC Apothem
  51: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",

  //Lisk Sepolia
  4202: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRan6D0dfiYmx2sv4kUPsFkfUDxYUWEuuA_dLJWgPm8Q&s",

    // Fhenix Testnet
    42069: "https://media.licdn.com/dms/image/D4D0BAQFtUjFKqv_DJA/company-logo_200_200/0/1695715998703/fhenix_logo?e=2147483647&v=beta&t=U2cvAqKuWeEqE5Cb4HgyuBmVTUcBuZvsDi0JdivU3nw",
};
