// Mainnet configurations

const mainnets = {
  ethereumMainnet: {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
    logo: "https://ethereum.org/favicon.ico",
  },
  binanceSmartChainMainnet: {
    chainId: 56,
    name: "BNB Chain",
    currency: "BNB",
    explorerUrl: "https://bscscan.com/",
    rpcUrl: "https://bsc-dataseed.binance.org/",
    logo: "https://bscscan.com/images/favicon.ico",
  },
  polygonMainnet: {
    chainId: 137,
    name: "Polygon Mainnet",
    currency: "MATIC",
    explorerUrl: "https://polygonscan.com/",
    rpcUrl: "https://polygon-mainnet.infura.io",
    logo: "https://polygonscan.com/images/favicon.ico",
  },
  optimismMainnet: {
    chainId: 10,
    name: "OP Mainnet",
    currency: "ETH",
    explorerUrl: "https://optimistic.etherscan.io/",
    rpcUrl: "https://optimism-mainnet.infura.io",
    logo: "https://optimistic.etherscan.io/images/favicon.ico",
  },
  arbitrumMainnet: {
    chainId: 42161,
    name: "Arbitrum One",
    currency: "ETH",
    explorerUrl: "https://explorer.arbitrum.io",
    rpcUrl: "https://arbitrum-mainnet.infura.io",
    logo: "https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5",
  },
  avalancheMainnet: {
    chainId: 43114,
    name: "Avalanche Network C-Chain",
    currency: "AVAX",
    explorerUrl: "https://snowtrace.io/",
    rpcUrl: "https://avalanche-mainnet.infura.io",
    logo: "https://cdn.prod.website-files.com/632993e1d1acbfa5635afd0b/63515267b3214c6dda03ea97_Favicon.png",
  },
  baseMainnet: {
    chainId: 8453,
    name: "Base Mainnet",
    currency: "ETH",
    explorerUrl: "https://basescan.org",
    rpcUrl: "https://mainnet.base.org",
    logo: "https://basescan.org/images/favicon.ico",
  },
  lineaMainnet: {
    chainId: 59144,
    name: "Linea",
    currency: "ETH",
    explorerUrl: "https://lineascan.build",
    rpcUrl: "https://linea.blockpi.network/v1/rpc/public",
    logo: "https://lineascan.build/images/svg/brands/main.svg?v=24.4.2.0",
  },
  scrollMainnet: {
    chainId: 534352,
    name: "Scroll",
    currency: "ETH",
    explorerUrl: "https://scrollscan.com",
    rpcUrl: "https://rpc.scroll.io",
    logo: "https://scrollecosystem.io/images/banner_logo.png",
  },
  metisMainnet: {
    chainId: 1088,
    name: "Metis",
    currency: "METIS",
    explorerUrl: "https://1088.routescan.io",
    rpcUrl: "https://andromeda.metis.io",
    logo: "https://cms-cdn.avascan.com/cms2/metis.97de56bab032.svg",
  },
  XDCMainnet: {
    chainId: 50,
    name: "XDC Mainnet",
    currency: "XDC",
    explorerUrl: "https://explorer.xinfin.network/",
    rpcUrl: "https://rpc.xinfin.network",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",
  },
  NearAuroraMainnet: {
    chainId: 1313161554,
    name: "Aurora Mainnet",
    currency: "ETH",
    explorerUrl: "https://explorer.mainnet.aurora.dev/",
    rpcUrl: "https://mainnet.aurora.dev",
    logo: "https://pbs.twimg.com/profile_images/1610936866227818502/kIqkTKdR_400x400.jpg",
  },
  LiskMainnet: {
    chainId: 1135,
    name: "Lisk",
    currency: "ETH",
    explorerUrl: "https://blockscout.lisk.com",
    rpcUrl: "https://rpc.api.lisk.com",
    logo: "https://pbs.twimg.com/profile_images/1610268745682849796/pjuC1Y85_400x400.jpg",
  },
  MainnetzMainnet: {
    chainId: 2016,
    name: "MainnetZ Mainnet",
    currency: "NetZ",
    explorerUrl: "https://explorer.mainnetz.io",
    rpcUrl: "https://mainnet-rpc.mainnetz.io",
    logo: "https://assets.coingecko.com/coins/images/33947/large/zcM8MEO5_400x400.png?1703537595",
  },
  MoonriverMainnet: {
    chainId: 1285,
    name: "Moonriver",
    currency: "MOVR",
    explorerUrl: "https://moonriver.moonscan.io/",
    rpcUrl: "https://rpc.api.moonriver.moonbeam.network",
    logo: "https://moonbeam.network/wp-content/uploads/2021/05/moonriver-icon.png",
  },
  MoonbeamMainnet: {
    chainId: 1284,
    name: "Moonbeam",
    currency: "GLMR",
    explorerUrl: "https://moonbeam.moonscan.io",
    rpcUrl: "https://rpc.api.moonbeam.network",
    logo: "https://moonbeam.network/wp-content/uploads/2020/11/moonbeam-logo.png",
  },
  CoreMainnet: {
    chainId: 1116,
    name: "Core Blockchain Mainnet",
    currency: "CORE",
    explorerUrl: "https://scan.coredao.org",
    rpcUrl: "https://rpc.coredao.org/",
    logo: "https://scan.coredao.org/images/logo.svg",
  },
  MantleMainnet: {
    chainId: 5000,
    name: "Mantle Mainnet",
    currency: "MNT",
    explorerUrl: "https://explorer.mantle.xyz",
    rpcUrl: "https://rpc.mantle.xyz",
    logo: "https://explorer.mantle.xyz/images/logo.svg",
  },
};

// Testnet configurations
const testnets = {
  sepoliaTestnet: {
    chainId: 11155111,
    name: "Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.etherscan.io",
    rpcUrl: "https://rpc.sepolia.org",
    logo: "https://moralis.io/wp-content/uploads/web3wiki/159-goerli/637aee14aa9d9f521437ec16_hYC2y965v3QD7fEoVvutzGbJzVGLSOk6RZPwEQWcA_E.jpeg",
  },
  scrollTestnet: {
    chainId: 534351,
    name: "Scroll Sepolia Testnet",
    currency: "ETH",
    explorerUrl: "https://sepolia.scrollscan.com",
    rpcUrl: "https://sepolia-rpc.scroll.io/",
    logo: "https://scrollecosystem.io/images/banner_logo.png",
  },
  polygonTestnet: {
    chainId: 80002,
    name: "Polygon Amoy Testnet",
    currency: "MATIC",
    explorerUrl: "https://amoy.polygonscan.com/",
    rpcUrl: "https://rpc-amoy.polygon.technology/",
    logo: "https://assets-global.website-files.com/637e2b6d602973ea0941d482/63e26c8a3f6e812d91a7aa3d_Polygon-New-Logo.png",
  },
  optimismTestnet: {
    chainId: 11155420,
    name: "Optimism Sepolia",
    currency: "ETH",
    explorerUrl: "https://optimism-sepolia.blockscout.com",
    rpcUrl: "https://sepolia.optimism.io",
    logo: "https://optimistic.etherscan.io/assets/optimism/images/svg/logos/chain-light.svg?v=24.4.4.4",
  },
  arbitrumTestnet: {
    chainId: 421614,
    name: "Arbitrum Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.arbiscan.io",
    rpcUrl: "https://sepolia-rollup.arbitrum.io/rpc",
    logo: "https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.5",
  },
  baseSepoliaTestnet: {
    chainId: 84532,
    name: "Base Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia-explorer.base.org",
    rpcUrl: "https://sepolia.base.org",
    logo: "https://sepolia.basescan.org/images/svg/brands/main.svg?v=24.4.4.9",
  },
  berachainTestnet: {
    chainId: 80085,
    name: "Berachain Artio",
    currency: "BERA",
    explorerUrl: "https://artio.beratrail.io/",
    rpcUrl: "https://artio.rpc.berachain.com/",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-tjg8Kqgr76Ved6PbcjBoGCHWwnhDUljH-CziyBOzw&s",
  },
  etherlinkTestnet: {
    chainId: 128123,
    name: "Etherlink Testnet",
    currency: "XTZ",
    explorerUrl: "https://testnet-explorer.etherlink.com/",
    rpcUrl: "https://node.ghostnet.etherlink.com/",
    logo: "https://www.etherlink.com/favicon.ico",
  },
  metisSepoliaTestnet: {
    chainId: 59902,
    name: "Metis Sepolia Testnet",
    currency: "sMETIS",
    explorerUrl: "https://sepolia-explorer.metisdevops.link",
    rpcUrl: "https://sepolia.metisdevops.link",
    logo: "https://cms-cdn.avascan.com/cms2/metis.97de56bab032.svg",
  },
  nearAuroraTestnet: {
    chainId: 1313161555,
    name: "Aurora Testnet",
    currency: "ETH",
    explorerUrl: "https://explorer.testnet.aurora.dev/",
    rpcUrl: "https://testnet.aurora.dev",
    logo: "https://pbs.twimg.com/profile_images/1610936866227818502/kIqkTKdR_400x400.jpg",
  },
  lineaSepoliaTestnet: {
    chainId: 59141,
    name: "Linea Sepolia test network",
    currency: "ETH",
    explorerUrl: "https://sepolia.lineascan.build",
    rpcUrl: "https://rpc.sepolia.linea.build",
    logo: "https://lineascan.build/images/svg/brands/main.svg?v=24.4.2.0",
  },
  XDCApothemTestnet: {
    chainId: 51,
    name: "XDC TestNet",
    currency: "XDC",
    explorerUrl: "https://explorer.apothem.network/",
    rpcUrl: "https://rpc.apothem.network",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe2KDAtPElT99WYln7tyeQPlPCiBWaRfRA_guAL0HImJWBcRympM_r5VBSiOR29zFpKIU&usqp=CAU",
  },
  liskSepoliaTestnet: {
    chainId: 4202,
    name: "Lisk Sepolia Testnet",
    currency: "ETH",
    explorerUrl: "https://sepolia-blockscout.lisk.com",
    rpcUrl: "https://rpc.lisk-sepolia-testnet.gelato.digital",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRan6D0dfiYmx2sv4kUPsFkfUDxYUWEuuA_dLJWgPm8Q&s",
  },
  KakarotTestnet: {
    chainId: 1802203764,
    name: "Kakarot Sepolia",
    currency: "ETH",
    explorerUrl: "https://sepolia.kakarotscan.org",
    rpcUrl: "https://sepolia-rpc.kakarot.org",
    logo: "https://assets-global.website-files.com/6464a063474b57e2c4e03b61/64a20e2749d92613acf4fd1b_Logo%20dark.svg",
  },
  MainnetzTestnet: {
    chainId: 9768,
    name: "MainnetZ Testnet",
    currency: "NetZ",
    explorerUrl: "https://testnet.mainnetz.io/",
    rpcUrl: "https://testnet-rpc.mainnetz.io",
    logo: "https://assets.coingecko.com/coins/images/33947/large/zcM8MEO5_400x400.png?1703537595",
  },
  MoonbaseAlphaTestnet: {
    chainId: 1287,
    name: "moonbase-alphanet",
    currency: "DEV",
    explorerUrl: "https://moonbase.moonscan.io/",
    rpcUrl: "https://rpc.testnet.moonbeam.network",
    logo: "https://moonbase.moonscan.io/assets/moonbase/images/svg/logos/chain-light.svg?v=24.6.1.0",
  },
  FhenixTestnet: {
    chainId: 8008135,
    name: "Fhenix Helium",
    currency: "tETH",
    explorerUrl: "https://explorer.helium.fhenix.zone",
    rpcUrl: "https://api.helium.fhenix.zone/",
    logo: "https://media.licdn.com/dms/image/D4D0BAQFtUjFKqv_DJA/company-logo_200_200/0/1695715998703/fhenix_logo?e=2147483647&v=beta&t=U2cvAqKuWeEqE5Cb4HgyuBmVTUcBuZvsDi0JdivU3nw",
  },
  CoreTestnet: {
    chainId: 1115,
    name: "Core Blockchain Testnet",
    currency: "tCORE",
    explorerUrl: "https://scan.test.btcs.network",
    rpcUrl: "https://rpc.test.btcs.network",
    logo: "https://scan.test.btcs.network/images/logo.svg",
  },
  MantleTestnet: {
    chainId: 5003,
    name: "Mantle Sepolia",
    currency: "MNT",
    explorerUrl: "https://sepolia.mantlescan.xyz/",
    rpcUrl: "https://rpc.sepolia.mantle.xyz",
    logo: "https://explorer.mantle.xyz/images/logo.svg",
  },
};

// Function to generate chainLogos from testnets
function generateChainLogos(testnets) {
  let chainLogos = {};

  for (const key in testnets) {
    if (testnets.hasOwnProperty(key)) {
      const testnet = testnets[key];
      chainLogos[testnet.chainId] = testnet.logo;
    }
  }

  return chainLogos;
}

// Generate chainLogos
const chainLogos = generateChainLogos(testnets);

console.log(chainLogos)