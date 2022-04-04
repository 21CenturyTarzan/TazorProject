import { StableBond, LPBond, NetworkID, CustomBond, BondType, LpToken } from "src/lib/Bond";
import { addresses } from "src/constants";

import { ReactComponent as DaiImg } from "src/assets/tokens/DAI.svg";
import { ReactComponent as TazorDaiImg } from "src/assets/tokens/TAZOR-DAI.svg";
import { ReactComponent as TazDaiImg } from "src/assets/tokens/TAZ-DAI.svg";
import { ReactComponent as OhmDaiImg } from "src/assets/tokens/OHM-DAI.svg";
import { ReactComponent as OhmFraxImg } from "src/assets/tokens/OHM-FRAX.svg";
import { ReactComponent as OhmLusdImg } from "src/assets/tokens/OHM-LUSD.svg";
import { ReactComponent as OhmEthImg } from "src/assets/tokens/OHM-WETH.svg";
import { ReactComponent as wETHImg } from "src/assets/tokens/wETH.svg";
import { ReactComponent as LusdImg } from "src/assets/tokens/LUSD.svg";
import { ReactComponent as CvxImg } from "src/assets/tokens/CVX.svg";
import { ReactComponent as MaiImg } from "src/assets/tokens/MAI.svg";
import { ReactComponent as UsdtImg } from "src/assets/tokens/USDT.svg";
import { ReactComponent as tazorETHImg } from "src/assets/tokens/TAZOR-ETH.svg";
import { ReactComponent as tazorAVAXImg } from "src/assets/tokens/TAZOR-AVAX.svg";
import { ReactComponent as tazorBNBImg } from "src/assets/tokens/TAZOR-BNB.svg";
import { ReactComponent as tazETHImg } from "src/assets/tokens/TAZ-ETH.svg";
import { ReactComponent as tazAVAXImg } from "src/assets/tokens/TAZ-AVAX.svg";
import { ReactComponent as tazBNBImg } from "src/assets/tokens/TAZ-BNB.svg";
import { ReactComponent as busdImg } from "src/assets/tokens/BUSD.svg";

import { abi as FraxOhmBondContract } from "src/abi/bonds/OhmFraxContract.json";
import { abi as BondOhmDaiContract } from "src/abi/bonds/OhmDaiContract.json";
import { abi as BondOhmLusdContract } from "src/abi/bonds/OhmLusdContract.json";
import { abi as BondOhmEthContract } from "src/abi/bonds/OhmEthContract.json";

import { abi as DaiBondContract } from "src/abi/bonds/DaiContract.json";
import { abi as BUSDBondContract } from "src/abi/BUSDBondContract.json";
import { abi as USDTBondContract } from "src/abi/USDTBondContract.json";
import { abi as TazorDaiLPBondContract } from "src/abi/TazorDaiLPBondContract.json";
import { abi as TazDaiLPBondContract } from "src/abi/TazDaiLPBondContract.json";
import { abi as ReserveOhmLusdContract } from "src/abi/reserves/OhmLusd.json";
import { abi as ReserveOhmDaiContract } from "src/abi/reserves/OhmDai.json";
import { abi as ReserveTazorDaiContract } from "src/abi/reserves/TazorDai.json";
import { abi as ReserveOhmFraxContract } from "src/abi/reserves/OhmFrax.json";
import { abi as ReserveOhmEthContract } from "src/abi/reserves/OhmEth.json";

import { abi as FraxBondContract } from "src/abi/bonds/FraxContract.json";
import { abi as LusdBondContract } from "src/abi/bonds/LusdContract.json";
import { abi as EthBondContract } from "src/abi/bonds/EthContract.json";
import { abi as CvxBondContract } from "src/abi/bonds/CvxContract.json";

import { abi as ierc20Abi } from "src/abi/IERC20.json";
import { getBondCalculator } from "src/helpers/BondCalculator";
import { BigNumberish } from "ethers";
import { getTokenPrice } from "src/helpers";

// TODO(zx): Further modularize by splitting up reserveAssets into vendor token definitions
//   and include that in the definition of a bond
export const mai = new StableBond({
  name: "mai",
  displayName: "MAI",
  bondToken: "MAI",
  payoutToken: "OHM",
  v2Bond: true,
  bondIconSvg: {
    [NetworkID.Mainnet]: MaiImg,
    [NetworkID.Testnet]: MaiImg,
    [NetworkID.BSCMainnet]: MaiImg,
    [NetworkID.BSCTestnet]: MaiImg,
    [NetworkID.Arbitrum]: MaiImg,
    [NetworkID.ArbitrumTestnet]: MaiImg,
    [NetworkID.Avalanche]: MaiImg,
    [NetworkID.AvalancheTestnet]: MaiImg,
    [NetworkID.Fantom]: MaiImg,
    [NetworkID.Polygon]: MaiImg,
    [NetworkID.Theta]: MaiImg,
    [NetworkID.Klaytn]: MaiImg,
    [NetworkID.Harmony]: MaiImg,
    [NetworkID.Telos]: MaiImg,
    [NetworkID.Metis]: MaiImg,
    [NetworkID.Celo]: MaiImg,
    [NetworkID.Moonriver]: MaiImg,
    [NetworkID.Wanchain]: MaiImg,
  },
  bondContractABI: DaiBondContract,
  tokenName: {
    [NetworkID.Mainnet]: "mai",
    [NetworkID.Testnet]: "mai",
    [NetworkID.BSCMainnet]: "mai",
    [NetworkID.BSCTestnet]: "mai",
    [NetworkID.Arbitrum]: "mai",
    [NetworkID.ArbitrumTestnet]: "mai",
    [NetworkID.Avalanche]: "mai",
    [NetworkID.AvalancheTestnet]: "mai",
    [NetworkID.Fantom]: "mai",
    [NetworkID.Polygon]: "mai",
    [NetworkID.Theta]: "mai",
    [NetworkID.Klaytn]: "mai",
    [NetworkID.Harmony]: "mai",
    [NetworkID.Telos]: "mai",
    [NetworkID.Metis]: "mai",
    [NetworkID.Celo]: "mai",
    [NetworkID.Moonriver]: "mai",
    [NetworkID.Wanchain]: "mai",
  },
  isBondable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "Sold Out",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0x454654689bB4d2224310d84b63180AdC3b8B3c65",
      reserveAddress: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
    },
    [NetworkID.Avalanche]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0xcF48B499475E0346ff34Ee55F1998316eC6C4929",
      reserveAddress: "0x2542250239e4800B89e47A813cD2B478822b2385",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const dai = new StableBond({
  name: "dai",
  displayName: "Token",
  bondToken: "DAI",
  payoutToken: "TAZOR",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: DaiImg,
    [NetworkID.Testnet]: DaiImg,
    [NetworkID.BSCMainnet]: DaiImg,
    [NetworkID.BSCTestnet]: DaiImg,
    [NetworkID.Arbitrum]: DaiImg,
    [NetworkID.ArbitrumTestnet]: DaiImg,
    [NetworkID.Avalanche]: DaiImg,
    [NetworkID.AvalancheTestnet]: DaiImg,
    [NetworkID.Fantom]: DaiImg,
    [NetworkID.Polygon]: DaiImg,
    [NetworkID.Theta]: DaiImg,
    [NetworkID.Klaytn]: DaiImg,
    [NetworkID.Harmony]: DaiImg,
    [NetworkID.Telos]: DaiImg,
    [NetworkID.Metis]: DaiImg,
    [NetworkID.Celo]: DaiImg,
    [NetworkID.Moonriver]: DaiImg,
    [NetworkID.Wanchain]: DaiImg,
  },
  bondContractABI: DaiBondContract,
  tokenName: {
    [NetworkID.Mainnet]: "DAI",
    [NetworkID.Testnet]: "DAI",
    [NetworkID.BSCMainnet]: "DAI",
    [NetworkID.BSCTestnet]: "DAI",
    [NetworkID.Arbitrum]: "DAI",
    [NetworkID.ArbitrumTestnet]: "DAI",
    [NetworkID.Avalanche]: "aCake",
    [NetworkID.AvalancheTestnet]: "aCake",
    [NetworkID.Fantom]: "aCake",
    [NetworkID.Polygon]: "aCake",
    [NetworkID.Theta]: "DAI",
    [NetworkID.Klaytn]: "DAI",
    [NetworkID.Harmony]: "DAI",
    [NetworkID.Telos]: "DAI",
    [NetworkID.Metis]: "DAI",
    [NetworkID.Celo]: "DAI",
    [NetworkID.Moonriver]: "DAI",
    [NetworkID.Wanchain]: "DAI",
  },
  isBondable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: true,
    [NetworkID.AvalancheTestnet]: true,
    [NetworkID.Fantom]: true,
    [NetworkID.Polygon]: true,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "Sold Out",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: true,
    [NetworkID.AvalancheTestnet]: true,
    [NetworkID.Fantom]: true,
    [NetworkID.Polygon]: true,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xDea5668E815dAF058e3ecB30F645b04ad26374Cf",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0x454654689bB4d2224310d84b63180AdC3b8B3c65",
      reserveAddress: "0x8a9424745056Eb399FD19a0EC26A14316684e274",
    },
    [NetworkID.Avalanche]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0xcF48B499475E0346ff34Ee55F1998316eC6C4929",
      reserveAddress: "0x2542250239e4800B89e47A813cD2B478822b2385",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const usdt = new StableBond({
  name: "usdt",
  displayName: "USDT",
  bondToken: "USDT",
  payoutToken: "TAZOR",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: UsdtImg,
    [NetworkID.Testnet]: UsdtImg,
    [NetworkID.BSCMainnet]: UsdtImg,
    [NetworkID.BSCTestnet]: UsdtImg,
    [NetworkID.Arbitrum]: UsdtImg,
    [NetworkID.ArbitrumTestnet]: UsdtImg,
    [NetworkID.Avalanche]: UsdtImg,
    [NetworkID.AvalancheTestnet]: UsdtImg,
    [NetworkID.Fantom]: UsdtImg,
    [NetworkID.Polygon]: UsdtImg,
    [NetworkID.Theta]: UsdtImg,
    [NetworkID.Klaytn]: UsdtImg,
    [NetworkID.Harmony]: UsdtImg,
    [NetworkID.Telos]: UsdtImg,
    [NetworkID.Metis]: UsdtImg,
    [NetworkID.Celo]: UsdtImg,
    [NetworkID.Moonriver]: UsdtImg,
    [NetworkID.Wanchain]: UsdtImg,
  },
  bondContractABI: USDTBondContract,
  tokenName: {
    [NetworkID.Mainnet]: "USDT",
    [NetworkID.Testnet]: "USDT",
    [NetworkID.BSCMainnet]: "USDT",
    [NetworkID.BSCTestnet]: "USDT",
    [NetworkID.Arbitrum]: "USDT",
    [NetworkID.ArbitrumTestnet]: "USDT",
    [NetworkID.Avalanche]: "USDT",
    [NetworkID.AvalancheTestnet]: "aUSDT",
    [NetworkID.Fantom]: "USDT",
    [NetworkID.Polygon]: "USDT",
    [NetworkID.Theta]: "USDT",
    [NetworkID.Klaytn]: "USDT",
    [NetworkID.Harmony]: "USDT",
    [NetworkID.Telos]: "USDT",
    [NetworkID.Metis]: "USDT",
    [NetworkID.Celo]: "USDT",
    [NetworkID.Moonriver]: "USDT",
    [NetworkID.Wanchain]: "USDT",
  },
  isBondable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: true,
    [NetworkID.AvalancheTestnet]: true,
    [NetworkID.Fantom]: true,
    [NetworkID.Polygon]: true,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "Gone Fishin'",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: true,
    [NetworkID.AvalancheTestnet]: true,
    [NetworkID.Fantom]: true,
    [NetworkID.Polygon]: true,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x8510c8c2B6891E04864fa196693D44E6B6ec2514",
      reserveAddress: "0x853d955acef822db058eb8505911ed77f175b99e",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xF651283543fB9D61A91f318b78385d187D300738",
      reserveAddress: "0x2F7249cb599139e560f0c81c269Ab9b04799E453",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0xb4bE3D7E8d0fb2932e77EaB561ae7737b484595b", // BondDepostory
      reserveAddress: "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684", // USDT contract address
    },
    [NetworkID.Avalanche]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0x5D5E53C23819D1504288bBCcA15c4520f085fba8", // BondDepostory
      reserveAddress: "0x5F1a9A617eF90815049D564954Fd634AB54d02E6", // USDT contract address
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const busd = new StableBond({
  name: "busd",
  displayName: "BUSD",
  bondToken: "BUSD",
  payoutToken: "TAZOR",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: busdImg,
    [NetworkID.Testnet]: busdImg,
    [NetworkID.BSCMainnet]: busdImg,
    [NetworkID.BSCTestnet]: busdImg,
    [NetworkID.Arbitrum]: busdImg,
    [NetworkID.ArbitrumTestnet]: busdImg,
    [NetworkID.Avalanche]: busdImg,
    [NetworkID.AvalancheTestnet]: busdImg,
    [NetworkID.Fantom]: busdImg,
    [NetworkID.Polygon]: busdImg,
    [NetworkID.Theta]: busdImg,
    [NetworkID.Klaytn]: busdImg,
    [NetworkID.Harmony]: busdImg,
    [NetworkID.Telos]: busdImg,
    [NetworkID.Metis]: busdImg,
    [NetworkID.Celo]: busdImg,
    [NetworkID.Moonriver]: busdImg,
    [NetworkID.Wanchain]: busdImg,
  },
  bondContractABI: BUSDBondContract,
  tokenName: {
    [NetworkID.Mainnet]: "BUSD",
    [NetworkID.Testnet]: "BUSD",
    [NetworkID.BSCMainnet]: "BUSD",
    [NetworkID.BSCTestnet]: "BUSD",
    [NetworkID.Arbitrum]: "BUSD",
    [NetworkID.ArbitrumTestnet]: "BUSD",
    [NetworkID.Avalanche]: "BUSD",
    [NetworkID.AvalancheTestnet]: "aDot",
    [NetworkID.Fantom]: "BUSD",
    [NetworkID.Polygon]: "BUSD",
    [NetworkID.Theta]: "BUSD",
    [NetworkID.Klaytn]: "BUSD",
    [NetworkID.Harmony]: "BUSD",
    [NetworkID.Telos]: "BUSD",
    [NetworkID.Metis]: "BUSD",
    [NetworkID.Celo]: "BUSD",
    [NetworkID.Moonriver]: "BUSD",
    [NetworkID.Wanchain]: "BUSD",
  },
  isBondable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: true,
    [NetworkID.Polygon]: true,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: true,
    [NetworkID.Klaytn]: true,
    [NetworkID.Harmony]: true,
    [NetworkID.Telos]: true,
    [NetworkID.Metis]: true,
    [NetworkID.Celo]: true,
    [NetworkID.Moonriver]: true,
    [NetworkID.Wanchain]: true,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      // bond addy that was improperly initialized 0xE04925C19A6c53f388d568c02A1833eFB6E10dC3
      bondAddress: "0xc60a6656e08b62DD2644DC703d7855301363Cc38",
      reserveAddress: "0x853d955acef822db058eb8505911ed77f175b99e",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x1CFcB53b965E1a614C660685af6fbe9f78b3f6F3",
      reserveAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0x575409F8d77c12B05feD8B455815f0e54797381c",
      reserveAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0x5885803Eb5633d5be0A831F5C54991DB7540026A", // BondDepostory
      reserveAddress: "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", // USDT contract address
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const lusd = new StableBond({
  name: "lusd",
  displayName: "LUSD",
  bondToken: "LUSD",
  payoutToken: "OHM",
  v2Bond: true,
  bondIconSvg: {
    [NetworkID.Mainnet]: LusdImg,
    [NetworkID.Testnet]: LusdImg,
    [NetworkID.BSCMainnet]: LusdImg,
    [NetworkID.BSCTestnet]: LusdImg,
    [NetworkID.Arbitrum]: LusdImg,
    [NetworkID.ArbitrumTestnet]: LusdImg,
    [NetworkID.Avalanche]: LusdImg,
    [NetworkID.AvalancheTestnet]: LusdImg,
    [NetworkID.Fantom]: LusdImg,
    [NetworkID.Polygon]: LusdImg,
    [NetworkID.Theta]: LusdImg,
    [NetworkID.Klaytn]: LusdImg,
    [NetworkID.Harmony]: LusdImg,
    [NetworkID.Telos]: LusdImg,
    [NetworkID.Metis]: LusdImg,
    [NetworkID.Celo]: LusdImg,
    [NetworkID.Moonriver]: LusdImg,
    [NetworkID.Wanchain]: LusdImg,
  },
  bondContractABI: LusdBondContract,
  tokenName: {
    [NetworkID.Mainnet]: "LUSD",
    [NetworkID.Testnet]: "LUSD",
    [NetworkID.BSCMainnet]: "LUSD",
    [NetworkID.BSCTestnet]: "LUSD",
    [NetworkID.Arbitrum]: "LUSD",
    [NetworkID.ArbitrumTestnet]: "LUSD",
    [NetworkID.Avalanche]: "LUSD",
    [NetworkID.AvalancheTestnet]: "LUSD",
    [NetworkID.Fantom]: "LUSD",
    [NetworkID.Polygon]: "LUSD",
    [NetworkID.Theta]: "LUSD",
    [NetworkID.Klaytn]: "LUSD",
    [NetworkID.Harmony]: "LUSD",
    [NetworkID.Telos]: "LUSD",
    [NetworkID.Metis]: "LUSD",
    [NetworkID.Celo]: "LUSD",
    [NetworkID.Moonriver]: "LUSD",
    [NetworkID.Wanchain]: "LUSD",
  },
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x10C0f93f64e3C8D0a1b0f4B87d6155fd9e89D08D",
      reserveAddress: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x3aD02C4E4D1234590E87A1f9a73B8E0fd8CF8CCa",
      reserveAddress: "0x45754dF05AA6305114004358eCf8D04FF3B84e26",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const eth = new CustomBond({
  name: "eth",
  displayName: "wETH",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "wETH",
  payoutToken: "OHM",
  v2Bond: true,
  bondIconSvg: {
    [NetworkID.Mainnet]: wETHImg,
    [NetworkID.Testnet]: wETHImg,
    [NetworkID.BSCMainnet]: wETHImg,
    [NetworkID.BSCTestnet]: wETHImg,
    [NetworkID.Arbitrum]: wETHImg,
    [NetworkID.ArbitrumTestnet]: wETHImg,
    [NetworkID.Avalanche]: wETHImg,
    [NetworkID.AvalancheTestnet]: wETHImg,
    [NetworkID.Fantom]: wETHImg,
    [NetworkID.Polygon]: wETHImg,
    [NetworkID.Theta]: wETHImg,
    [NetworkID.Klaytn]: wETHImg,
    [NetworkID.Harmony]: wETHImg,
    [NetworkID.Telos]: wETHImg,
    [NetworkID.Metis]: wETHImg,
    [NetworkID.Celo]: wETHImg,
    [NetworkID.Moonriver]: wETHImg,
    [NetworkID.Wanchain]: wETHImg,
  },
  bondContractABI: EthBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  tokenName: {
    [NetworkID.Mainnet]: "wETH",
    [NetworkID.Testnet]: "wETH",
    [NetworkID.BSCMainnet]: "wETH",
    [NetworkID.BSCTestnet]: "wETH",
    [NetworkID.Arbitrum]: "wETH",
    [NetworkID.ArbitrumTestnet]: "wETH",
    [NetworkID.Avalanche]: "wETH",
    [NetworkID.AvalancheTestnet]: "wETH",
    [NetworkID.Fantom]: "wETH",
    [NetworkID.Polygon]: "wETH",
    [NetworkID.Theta]: "wETH",
    [NetworkID.Klaytn]: "wETH",
    [NetworkID.Harmony]: "wETH",
    [NetworkID.Telos]: "wETH",
    [NetworkID.Metis]: "wETH",
    [NetworkID.Celo]: "wETH",
    [NetworkID.Moonriver]: "wETH",
    [NetworkID.Wanchain]: "wETH",
  },
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "Taking a Spa Day",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xE6295201CD1ff13CeD5f063a5421c39A1D236F1c",
      reserveAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
      reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0xE6295201CD1ff13CeD5f063a5421c39A1D236F1c",
      reserveAddress: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0xca7b90f8158A4FAA606952c023596EE6d322bcf0",
      reserveAddress: "0xc778417e063141139fce010982780140aa0cd5ab",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    const ethBondContract = this.getContractForBond(networkID, provider);
    let ethPrice: BigNumberish = await ethBondContract.assetPrice();
    ethPrice = Number(ethPrice.toString()) / Math.pow(10, 8);
    const token = this.getContractForReserve(networkID, provider);
    let ethAmount: BigNumberish = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    ethAmount = Number(ethAmount.toString()) / Math.pow(10, 18);
    return ethAmount * ethPrice;
  },
});

export const cvx = new CustomBond({
  name: "cvx",
  displayName: "CVX",
  lpUrl: "",
  bondType: BondType.StableAsset,
  bondToken: "CVX",
  payoutToken: "OHM",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: CvxImg,
    [NetworkID.Testnet]: CvxImg,
    [NetworkID.BSCMainnet]: CvxImg,
    [NetworkID.BSCTestnet]: CvxImg,
    [NetworkID.Arbitrum]: CvxImg,
    [NetworkID.ArbitrumTestnet]: CvxImg,
    [NetworkID.Avalanche]: CvxImg,
    [NetworkID.AvalancheTestnet]: CvxImg,
    [NetworkID.Fantom]: CvxImg,
    [NetworkID.Polygon]: CvxImg,
    [NetworkID.Theta]: CvxImg,
    [NetworkID.Klaytn]: CvxImg,
    [NetworkID.Harmony]: CvxImg,
    [NetworkID.Telos]: CvxImg,
    [NetworkID.Metis]: CvxImg,
    [NetworkID.Celo]: CvxImg,
    [NetworkID.Moonriver]: CvxImg,
    [NetworkID.Wanchain]: CvxImg,
  },
  bondContractABI: CvxBondContract,
  reserveContract: ierc20Abi, // The Standard ierc20Abi since they're normal tokens
  tokenName: {
    [NetworkID.Mainnet]: "CVX",
    [NetworkID.Testnet]: "CVX",
    [NetworkID.BSCMainnet]: "CVX",
    [NetworkID.BSCTestnet]: "CVX",
    [NetworkID.Arbitrum]: "CVX",
    [NetworkID.ArbitrumTestnet]: "CVX",
    [NetworkID.Avalanche]: "CVX",
    [NetworkID.AvalancheTestnet]: "CVX",
    [NetworkID.Fantom]: "CVX",
    [NetworkID.Polygon]: "CVX",
    [NetworkID.Theta]: "CVX",
    [NetworkID.Klaytn]: "CVX",
    [NetworkID.Harmony]: "CVX",
    [NetworkID.Telos]: "CVX",
    [NetworkID.Metis]: "CVX",
    [NetworkID.Celo]: "CVX",
    [NetworkID.Moonriver]: "CVX",
    [NetworkID.Wanchain]: "CVX",
  },
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x767e3459A35419122e5F6274fB1223d75881E0a9",
      reserveAddress: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xd43940687f6e76056789d00c43A40939b7a559b5",
      reserveAddress: "0xB2180448f8945C8Cc8AE9809E67D6bd27d8B2f2C", // using DAI per `principal` address
      // reserveAddress: "0x6761Cb314E39082e08e1e697eEa23B6D1A77A34b", // guessed
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    let cvxPrice: number = await getTokenPrice("convex-finance");
    const token = this.getContractForReserve(networkID, provider);
    let cvxAmount: BigNumberish = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
    cvxAmount = Number(cvxAmount.toString()) / Math.pow(10, 18);
    return cvxAmount * cvxPrice;
  },
});

export const tazor_dai = new LPBond({
  name: "tazor_dai_lp",
  displayName: "DAI / TAZOR",
  bondToken: "DAI",
  payoutToken: "TAZOR",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: TazorDaiImg,
    [NetworkID.Testnet]: TazorDaiImg,
    [NetworkID.BSCMainnet]: TazorDaiImg,
    [NetworkID.BSCTestnet]: TazorDaiImg,
    [NetworkID.Arbitrum]: TazorDaiImg,
    [NetworkID.ArbitrumTestnet]: TazorDaiImg,
    [NetworkID.Avalanche]: TazorDaiImg,
    [NetworkID.AvalancheTestnet]: TazorDaiImg,
    [NetworkID.Fantom]: TazorDaiImg,
    [NetworkID.Polygon]: TazorDaiImg,
    [NetworkID.Theta]: TazorDaiImg,
    [NetworkID.Klaytn]: TazorDaiImg,
    [NetworkID.Harmony]: TazorDaiImg,
    [NetworkID.Telos]: TazorDaiImg,
    [NetworkID.Metis]: TazorDaiImg,
    [NetworkID.Celo]: TazorDaiImg,
    [NetworkID.Moonriver]: TazorDaiImg,
    [NetworkID.Wanchain]: TazorDaiImg,
  },
  bondContractABI: TazorDaiLPBondContract,
  reserveContract: ReserveTazorDaiContract,
  tokenName: {
    [NetworkID.Mainnet]: "DAI / TAZOR",
    [NetworkID.Testnet]: "DAI / TAZOR",
    [NetworkID.BSCMainnet]: "DAI / TAZOR",
    [NetworkID.BSCTestnet]: "DAI / TAZOR",
    [NetworkID.Arbitrum]: "DAI / TAZOR",
    [NetworkID.ArbitrumTestnet]: "DAI / TAZOR",
    [NetworkID.Avalanche]: "DAI / TAZOR",
    [NetworkID.AvalancheTestnet]: "DAI / TAZOR",
    [NetworkID.Fantom]: "DAI / TAZOR",
    [NetworkID.Polygon]: "DAI / TAZOR",
    [NetworkID.Theta]: "DAI / TAZOR",
    [NetworkID.Klaytn]: "DAI / TAZOR",
    [NetworkID.Harmony]: "DAI / TAZOR",
    [NetworkID.Telos]: "DAI / TAZOR",
    [NetworkID.Metis]: "DAI / TAZOR",
    [NetworkID.Celo]: "DAI / TAZOR",
    [NetworkID.Moonriver]: "DAI / TAZOR",
    [NetworkID.Wanchain]: "DAI / TAZOR",
  },
  isBondable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      // TODO: add correct bond address when it's created
      bondAddress: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
      reserveAddress: "0x055475920a8c93CfFb64d039A8205F7AcC7722d3",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
    [NetworkID.BSCMainnet]: {
      // TODO: add correct bond address when it's created
      bondAddress: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
      reserveAddress: "0x055475920a8c93CfFb64d039A8205F7AcC7722d3",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0xdcB43ecB329459653B5372B6b16a8eE4343a085E",
      reserveAddress: "0xdcB43ecB329459653B5372B6b16a8eE4343a085E",
    },
    [NetworkID.Avalanche]: {
      // TODO: add correct bond address when it's created
      bondAddress: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
      reserveAddress: "0x055475920a8c93CfFb64d039A8205F7AcC7722d3",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0xdcB43ecB329459653B5372B6b16a8eE4343a085E",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
  lpUrl: "https://testnet.bscscan.com/address/0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03#code",
});

// export const ohm_daiOld = new LPBond({
//   name: "ohm_dai_lp_old",
//   displayName: "OHM-DAI LP OLD",
//   bondToken: "DAI",
//   payoutToken: "OHM",
//   v2Bond: true,
//   bondIconSvg: {
//     [NetworkID.Mainnet]: OhmDaiImg,
//     [NetworkID.Testnet]: OhmDaiImg,
//     [NetworkID.BSCMainnet]: OhmDaiImg,
//     [NetworkID.BSCTestnet]: OhmDaiImg,
//     [NetworkID.Arbitrum]: OhmDaiImg,
//     [NetworkID.ArbitrumTestnet]: OhmDaiImg,
//     [NetworkID.Avalanche]: OhmDaiImg,
//     [NetworkID.AvalancheTestnet]: OhmDaiImg,
//     [NetworkID.Fantom]: OhmDaiImg,
//     [NetworkID.Polygon]: OhmDaiImg,
//   },
//   bondContractABI: BondOhmDaiContract,
//   reserveContract: ReserveOhmDaiContract,
//   tokenName: {
//     [NetworkID.Mainnet]: "OHM-DAI LP",
//     [NetworkID.Testnet]: "OHM-DAI LP",
//     [NetworkID.BSCMainnet]: "OHM-DAI LP",
//     [NetworkID.BSCTestnet]: "OHM-DAI LP",
//     [NetworkID.Arbitrum]: "OHM-DAI LP",
//     [NetworkID.ArbitrumTestnet]: "OHM-DAI LP",
//     [NetworkID.Avalanche]: "OHM-DAI LP",
//     [NetworkID.AvalancheTestnet]: "OHM-DAI LP",
//     [NetworkID.Fantom]: "OHM-DAI LP",
//     [NetworkID.Polygon]: "OHM-DAI LP",
//   },
//   isBondable: {
//     [NetworkID.Mainnet]: false,
//     [NetworkID.Testnet]: false,
//     [NetworkID.Arbitrum]: false,
//     [NetworkID.ArbitrumTestnet]: false,
//     [NetworkID.Avalanche]: false,
//     [NetworkID.AvalancheTestnet]: false,
//   },
//   isLOLable: {
//     [NetworkID.Mainnet]: false,
//     [NetworkID.Testnet]: false,
//     [NetworkID.Arbitrum]: false,
//     [NetworkID.ArbitrumTestnet]: false,
//     [NetworkID.Avalanche]: false,
//     [NetworkID.AvalancheTestnet]: false,
//     [NetworkID.Fantom]: false,
//     [NetworkID.Polygon]: false,
//   },
//   LOLmessage: "",
//   isClaimable: {
//     [NetworkID.Mainnet]: true,
//     [NetworkID.Testnet]: true,
//     [NetworkID.Arbitrum]: false,
//     [NetworkID.ArbitrumTestnet]: false,
//     [NetworkID.Avalanche]: false,
//     [NetworkID.AvalancheTestnet]: false,
//     [NetworkID.Fantom]: false,
//     [NetworkID.Polygon]: false,
//   },
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
//       reserveAddress: "0x34d7d7Aaf50AD4944B70B320aCB24C95fa2def7c",
//     },
//     [NetworkID.Testnet]: {
//       bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
//       reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
//     },
//   },
//   lpUrl:
//     "https://app.sushi.com/add/0x383518188c0c6d7730d91b2c03a03c837814a899/0x6b175474e89094c44da98b954eedeac495271d0f",
// });

export const taz_dai = new LPBond({
  name: "taz_dai_lp",
  displayName: "DAI / TAZ",
  bondToken: "DAI",
  payoutToken: "TAZOR",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: TazDaiImg,
    [NetworkID.Testnet]: TazDaiImg,
    [NetworkID.BSCMainnet]: TazDaiImg,
    [NetworkID.BSCTestnet]: TazDaiImg,
    [NetworkID.Arbitrum]: TazDaiImg,
    [NetworkID.ArbitrumTestnet]: TazDaiImg,
    [NetworkID.Avalanche]: TazDaiImg,
    [NetworkID.AvalancheTestnet]: TazDaiImg,
    [NetworkID.Fantom]: TazDaiImg,
    [NetworkID.Polygon]: TazDaiImg,
    [NetworkID.Theta]: TazDaiImg,
    [NetworkID.Klaytn]: TazDaiImg,
    [NetworkID.Harmony]: TazDaiImg,
    [NetworkID.Telos]: TazDaiImg,
    [NetworkID.Metis]: TazDaiImg,
    [NetworkID.Celo]: TazDaiImg,
    [NetworkID.Moonriver]: TazDaiImg,
    [NetworkID.Wanchain]: TazDaiImg,
  },
  bondContractABI: TazDaiLPBondContract,
  reserveContract: ReserveTazorDaiContract,
  tokenName: {
    [NetworkID.Mainnet]: "DAI / TAZ",
    [NetworkID.Testnet]: "DAI / TAZ",
    [NetworkID.BSCMainnet]: "DAI / TAZ",
    [NetworkID.BSCTestnet]: "DAI / TAZ",
    [NetworkID.Arbitrum]: "DAI / TAZ",
    [NetworkID.ArbitrumTestnet]: "DAI / TAZ",
    [NetworkID.Avalanche]: "DAI / TAZ",
    [NetworkID.AvalancheTestnet]: "DAI / TAZ",
    [NetworkID.Fantom]: "DAI / TAZ",
    [NetworkID.Polygon]: "DAI / TAZ",
    [NetworkID.Theta]: "DAI / TAZ",
    [NetworkID.Klaytn]: "DAI / TAZ",
    [NetworkID.Harmony]: "DAI / TAZ",
    [NetworkID.Telos]: "DAI / TAZ",
    [NetworkID.Metis]: "DAI / TAZ",
    [NetworkID.Celo]: "DAI / TAZ",
    [NetworkID.Moonriver]: "DAI / TAZ",
    [NetworkID.Wanchain]: "DAI / TAZ",
  },
  isBondable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.BSCMainnet]: false,
    [NetworkID.BSCTestnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "Out of Office",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.BSCMainnet]: true,
    [NetworkID.BSCTestnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x99E9b0a9dC965361C2CBc07525EA591761aEaA53",
      reserveAddress: "0xB612c37688861f1f90761DC7F382C2aF3a50Cc39",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x7BB53Ef5088AEF2Bb073D9C01DCa3a1D484FD1d2",
      reserveAddress: "0x11BE404d7853BDE29A3e73237c952EcDCbBA031E",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0x99E9b0a9dC965361C2CBc07525EA591761aEaA53",
      reserveAddress: "0xB612c37688861f1f90761DC7F382C2aF3a50Cc39",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0xA5b5716E740a275bEf3F1E8e16CE60a80dda2C3b",
      reserveAddress: "0xA5b5716E740a275bEf3F1E8e16CE60a80dda2C3b",
    },
    [NetworkID.Avalanche]: {
      bondAddress: "0x99E9b0a9dC965361C2CBc07525EA591761aEaA53",
      reserveAddress: "0xB612c37688861f1f90761DC7F382C2aF3a50Cc39",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0xA5b5716E740a275bEf3F1E8e16CE60a80dda2C3b",
      reserveAddress: "0x24c289Aa4ef278b49a0d6B4da8aAEDa267cb247c",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
  lpUrl: "https://testnet.bscscan.com/address/0x24c289Aa4ef278b49a0d6B4da8aAEDa267cb247c#code",
});

export const ohm_lusd = new LPBond({
  name: "ohm_lusd_lp",
  displayName: "OHM-LUSD LP",
  bondToken: "LUSD",
  payoutToken: "OHM",
  v2Bond: false,
  bondIconSvg: {
    [NetworkID.Mainnet]: OhmLusdImg,
    [NetworkID.Testnet]: OhmLusdImg,
    [NetworkID.BSCMainnet]: OhmLusdImg,
    [NetworkID.BSCTestnet]: OhmLusdImg,
    [NetworkID.Arbitrum]: OhmLusdImg,
    [NetworkID.ArbitrumTestnet]: OhmLusdImg,
    [NetworkID.Avalanche]: OhmLusdImg,
    [NetworkID.AvalancheTestnet]: OhmLusdImg,
    [NetworkID.Fantom]: OhmLusdImg,
    [NetworkID.Polygon]: OhmLusdImg,
    [NetworkID.Theta]: OhmLusdImg,
    [NetworkID.Klaytn]: OhmLusdImg,
    [NetworkID.Harmony]: OhmLusdImg,
    [NetworkID.Telos]: OhmLusdImg,
    [NetworkID.Metis]: OhmLusdImg,
    [NetworkID.Celo]: OhmLusdImg,
    [NetworkID.Moonriver]: OhmLusdImg,
    [NetworkID.Wanchain]: OhmLusdImg,
  },
  bondContractABI: BondOhmLusdContract,
  reserveContract: ReserveOhmLusdContract,
  tokenName: {
    [NetworkID.Mainnet]: "OHM-LUSD LP",
    [NetworkID.Testnet]: "OHM-LUSD LP",
    [NetworkID.BSCMainnet]: "OHM-LUSD LP",
    [NetworkID.BSCTestnet]: "OHM-LUSD LP",
    [NetworkID.Arbitrum]: "OHM-LUSD LP",
    [NetworkID.ArbitrumTestnet]: "OHM-LUSD LP",
    [NetworkID.Avalanche]: "OHM-LUSD LP",
    [NetworkID.AvalancheTestnet]: "OHM-LUSD LP",
    [NetworkID.Fantom]: "OHM-LUSD LP",
    [NetworkID.Polygon]: "OHM-LUSD LP",
    [NetworkID.Theta]: "OHM-LUSD LP",
    [NetworkID.Klaytn]: "OHM-LUSD LP",
    [NetworkID.Harmony]: "OHM-LUSD LP",
    [NetworkID.Telos]: "OHM-LUSD LP",
    [NetworkID.Metis]: "OHM-LUSD LP",
    [NetworkID.Celo]: "OHM-LUSD LP",
    [NetworkID.Moonriver]: "OHM-LUSD LP",
    [NetworkID.Wanchain]: "OHM-LUSD LP",
  },
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0xFB1776299E7804DD8016303Df9c07a65c80F67b6",
      reserveAddress: "0xfDf12D1F85b5082877A6E070524f50F6c84FAa6b",
    },
    [NetworkID.Testnet]: {
      // NOTE (appleseed-lusd): using ohm-dai rinkeby contracts
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
  lpUrl:
    "https://app.sushi.com/add/0x383518188C0C6d7730D91b2c03a03C837814a899/0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
});

export const ohm_weth = new CustomBond({
  name: "ohm_weth_lp",
  displayName: "OHM-WETH SLP",
  bondToken: "WETH",
  payoutToken: "OHM",
  v2Bond: true,
  bondIconSvg: {
    [NetworkID.Mainnet]: OhmEthImg,
    [NetworkID.Testnet]: OhmEthImg,
    [NetworkID.BSCMainnet]: OhmEthImg,
    [NetworkID.BSCTestnet]: OhmEthImg,
    [NetworkID.Arbitrum]: OhmEthImg,
    [NetworkID.ArbitrumTestnet]: OhmEthImg,
    [NetworkID.Avalanche]: OhmEthImg,
    [NetworkID.AvalancheTestnet]: OhmEthImg,
    [NetworkID.Fantom]: OhmEthImg,
    [NetworkID.Polygon]: OhmEthImg,
    [NetworkID.Theta]: OhmEthImg,
    [NetworkID.Klaytn]: OhmEthImg,
    [NetworkID.Harmony]: OhmEthImg,
    [NetworkID.Telos]: OhmEthImg,
    [NetworkID.Metis]: OhmEthImg,
    [NetworkID.Celo]: OhmEthImg,
    [NetworkID.Moonriver]: OhmEthImg,
    [NetworkID.Wanchain]: OhmEthImg,
  },
  bondContractABI: BondOhmEthContract,
  reserveContract: ReserveOhmEthContract,
  tokenName: {
    [NetworkID.Mainnet]: "OHM-WETH SLP",
    [NetworkID.Testnet]: "OHM-WETH SLP",
    [NetworkID.BSCMainnet]: "OHM-WETH SLP",
    [NetworkID.BSCTestnet]: "OHM-WETH SLP",
    [NetworkID.Arbitrum]: "OHM-WETH SLP",
    [NetworkID.ArbitrumTestnet]: "OHM-WETH SLP",
    [NetworkID.Avalanche]: "OHM-WETH SLP",
    [NetworkID.AvalancheTestnet]: "OHM-WETH SLP",
    [NetworkID.Fantom]: "OHM-WETH SLP",
    [NetworkID.Polygon]: "OHM-WETH SLP",
    [NetworkID.Theta]: "OHM-WETH SLP",
    [NetworkID.Klaytn]: "OHM-WETH SLP",
    [NetworkID.Harmony]: "OHM-WETH SLP",
    [NetworkID.Telos]: "OHM-WETH SLP",
    [NetworkID.Metis]: "OHM-WETH SLP",
    [NetworkID.Celo]: "OHM-WETH SLP",
    [NetworkID.Moonriver]: "OHM-WETH SLP",
    [NetworkID.Wanchain]: "OHM-WETH SLP",
  },
  isBondable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  isLOLable: {
    [NetworkID.Mainnet]: false,
    [NetworkID.Testnet]: false,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  LOLmessage: "Maternity Leave",
  isClaimable: {
    [NetworkID.Mainnet]: true,
    [NetworkID.Testnet]: true,
    [NetworkID.Arbitrum]: false,
    [NetworkID.ArbitrumTestnet]: false,
    [NetworkID.Avalanche]: false,
    [NetworkID.AvalancheTestnet]: false,
    [NetworkID.Fantom]: false,
    [NetworkID.Polygon]: false,
    [NetworkID.Theta]: false,
    [NetworkID.Klaytn]: false,
    [NetworkID.Harmony]: false,
    [NetworkID.Telos]: false,
    [NetworkID.Metis]: false,
    [NetworkID.Celo]: false,
    [NetworkID.Moonriver]: false,
    [NetworkID.Wanchain]: false,
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      // TODO (appleseed): need new bond address
      bondAddress: "0xB6C9dc843dEc44Aa305217c2BbC58B44438B6E16",
      reserveAddress: "0x69b81152c5A8d35A67B32A4D3772795d96CaE4da",
    },
    [NetworkID.Testnet]: {
      // NOTE (unbanksy): using ohm-dai rinkeby contracts
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
  bondType: BondType.LP,
  lpUrl:
    "https://app.sushi.com/add/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
    if (networkID === NetworkID.Mainnet) {
      const ethBondContract = this.getContractForBond(networkID, provider);
      let ethPrice: BigNumberish = await ethBondContract.assetPrice();
      ethPrice = Number(ethPrice.toString()) / Math.pow(10, 8);
      const token = this.getContractForReserve(networkID, provider);
      const tokenAddress = this.getAddressForReserve(networkID);
      const bondCalculator = getBondCalculator(networkID, provider, true);
      const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_V2);
      const valuation = await bondCalculator.valuation(tokenAddress || "", tokenAmount);
      const markdown = await bondCalculator.markdown(tokenAddress || "");
      let tokenUSD =
        (Number(valuation.toString()) / Math.pow(10, 9)) * (Number(markdown.toString()) / Math.pow(10, 18));
      return tokenUSD * Number(ethPrice.toString());
    } else {
      // NOTE (appleseed): using OHM-DAI on rinkeby
      const token = this.getContractForReserve(networkID, provider);
      const tokenAddress = this.getAddressForReserve(networkID);
      const bondCalculator = getBondCalculator(networkID, provider, false);
      const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
      const valuation = await bondCalculator.valuation(tokenAddress || "", tokenAmount);
      const markdown = await bondCalculator.markdown(tokenAddress || "");
      let tokenUSD =
        (Number(valuation.toString()) / Math.pow(10, 9)) * (Number(markdown.toString()) / Math.pow(10, 18));
      return tokenUSD;
    }
  },
});

// export const ohm_wethOld = new CustomBond({
//   name: "ohm_weth_lp_old",
//   displayName: "OHM-WETH SLP OLD",
//   bondToken: "WETH",
//   payoutToken: "OHM",
//   v2Bond: false,
//   bondIconSvg: {
//     [NetworkID.Mainnet]: OhmEthImg,
//     [NetworkID.Testnet]: OhmEthImg,
//     [NetworkID.BSCMainnet]: OhmEthImg,
//     [NetworkID.BSCTestnet]: OhmEthImg,
//     [NetworkID.Arbitrum]: OhmEthImg,
//     [NetworkID.ArbitrumTestnet]: OhmEthImg,
//     [NetworkID.Avalanche]: OhmEthImg,
//     [NetworkID.AvalancheTestnet]: OhmEthImg,
//   },
//   bondContractABI: BondOhmEthContract,
//   reserveContract: ReserveOhmEthContract,
//   tokenName: {
//     [NetworkID.Mainnet]: "OHM-WETH SLP OLD",
//     [NetworkID.Testnet]: "OHM-WETH SLP OLD",
//     [NetworkID.BSCMainnet]: "OHM-WETH SLP OLD",
//     [NetworkID.BSCTestnet]: "OHM-WETH SLP OLD",
//     [NetworkID.Arbitrum]: "OHM-WETH SLP OLD",
//     [NetworkID.ArbitrumTestnet]: "OHM-WETH SLP OLD",
//     [NetworkID.Avalanche]: "OHM-WETH SLP OLD",
//     [NetworkID.AvalancheTestnet]: "OHM-WETH SLP OLD",
//   },
//   isBondable: {
//     [NetworkID.Mainnet]: false,
//     [NetworkID.Testnet]: true,
//     [NetworkID.Arbitrum]: false,
//     [NetworkID.ArbitrumTestnet]: false,
//     [NetworkID.Avalanche]: false,
//     [NetworkID.AvalancheTestnet]: false,
//   },
//   isLOLable: {
//     [NetworkID.Mainnet]: false,
//     [NetworkID.Testnet]: false,
//     [NetworkID.Arbitrum]: false,
//     [NetworkID.ArbitrumTestnet]: false,
//     [NetworkID.Avalanche]: false,
//     [NetworkID.AvalancheTestnet]: false,
//   },
//   LOLmessage: "Maternity Leave",
//   isClaimable: {
//     [NetworkID.Mainnet]: true,
//     [NetworkID.Testnet]: true,
//     [NetworkID.Arbitrum]: false,
//     [NetworkID.ArbitrumTestnet]: false,
//     [NetworkID.Avalanche]: false,
//     [NetworkID.AvalancheTestnet]: false,
//   },
//   networkAddrs: {
//     [NetworkID.Mainnet]: {
//       bondAddress: "0xB6C9dc843dEc44Aa305217c2BbC58B44438B6E16",
//       reserveAddress: "0xfffae4a0f4ac251f4705717cd24cadccc9f33e06",
//     },
//     [NetworkID.Testnet]: {
//       // NOTE (unbanksy): using ohm-dai rinkeby contracts
//       bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
//       reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
//     },
//   },
//   bondType: BondType.LP,
//   lpUrl:
//     "https://app.sushi.com/add/0x383518188c0c6d7730d91b2c03a03c837814a899/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
//   customTreasuryBalanceFunc: async function (this: CustomBond, networkID, provider) {
//     if (networkID === NetworkID.Mainnet) {
//       const ethBondContract = this.getContractForBond(networkID, provider);
//       let ethPrice: BigNumberish = await ethBondContract.assetPrice();
//       ethPrice = Number(ethPrice.toString()) / Math.pow(10, 8);
//       const token = this.getContractForReserve(networkID, provider);
//       const tokenAddress = this.getAddressForReserve(networkID);
//       const bondCalculator = getBondCalculator(networkID, provider, false);
//       const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
//       const valuation = await bondCalculator.valuation(tokenAddress || "", tokenAmount);
//       const markdown = await bondCalculator.markdown(tokenAddress || "");
//       let tokenUSD =
//         (Number(valuation.toString()) / Math.pow(10, 9)) * (Number(markdown.toString()) / Math.pow(10, 18));
//       return tokenUSD * Number(ethPrice.toString());
//     } else {
//       // NOTE (appleseed): using OHM-DAI on rinkeby
//       const token = this.getContractForReserve(networkID, provider);
//       const tokenAddress = this.getAddressForReserve(networkID);
//       const bondCalculator = getBondCalculator(networkID, provider, false);
//       const tokenAmount = await token.balanceOf(addresses[networkID].TREASURY_ADDRESS);
//       const valuation = await bondCalculator.valuation(tokenAddress || "", tokenAmount);
//       const markdown = await bondCalculator.markdown(tokenAddress || "");
//       let tokenUSD =
//         (Number(valuation.toString()) / Math.pow(10, 9)) * (Number(markdown.toString()) / Math.pow(10, 18));
//       return tokenUSD;
//     }
//   },
// });

// HOW TO ADD A NEW BOND:
// Is it a stableCoin bond? use `new StableBond`
// Is it an LP Bond? use `new LPBond`
// Add new bonds to this array!!
export const allBonds = [
  // mai,
  dai,
  usdt,
  busd,
  // eth,
  // cvx,
  // tazor_dai,
  // ohm_daiOld,
  // taz_dai,
  // ohm_fraxOld,
  // lusd,
  // ohm_lusd,
  // ohm_weth,
  // ohm_wethOld,
];

export const taz_native_token = new LpToken({
  name: "taz_dai_lp",
  displayName: "DAI - TAZ",
  bondIconSvg: {
    [NetworkID.Mainnet]: tazETHImg,
    [NetworkID.Testnet]: tazETHImg,
    [NetworkID.BSCMainnet]: tazBNBImg,
    [NetworkID.BSCTestnet]: tazBNBImg,
    [NetworkID.Arbitrum]: TazDaiImg,
    [NetworkID.ArbitrumTestnet]: TazDaiImg,
    [NetworkID.Avalanche]: tazAVAXImg,
    [NetworkID.AvalancheTestnet]: tazAVAXImg,
    [NetworkID.Fantom]: tazAVAXImg,
    [NetworkID.Polygon]: tazAVAXImg,
    [NetworkID.Theta]: tazAVAXImg,
    [NetworkID.Klaytn]: tazAVAXImg,
    [NetworkID.Harmony]: tazAVAXImg,
    [NetworkID.Telos]: tazAVAXImg,
    [NetworkID.Metis]: tazAVAXImg,
    [NetworkID.Celo]: tazAVAXImg,
    [NetworkID.Moonriver]: tazAVAXImg,
    [NetworkID.Wanchain]: tazAVAXImg,
  },
  reserveContract: ReserveTazorDaiContract,
  tokenName: {
    [NetworkID.Mainnet]: "DAI - TAZ",
    [NetworkID.Testnet]: "DAI - TAZ",
    [NetworkID.BSCMainnet]: "TAZ - BNB",
    [NetworkID.BSCTestnet]: "TAZ - BNB",
    [NetworkID.Arbitrum]: "DAI - TAZ",
    [NetworkID.ArbitrumTestnet]: "DAI - TAZ",
    [NetworkID.Avalanche]: "TAZ - AVAX",
    [NetworkID.AvalancheTestnet]: "TAZ - AVAX",
    [NetworkID.Fantom]: "TAZ - AVAX",
    [NetworkID.Polygon]: "TAZ - AVAX",
    [NetworkID.Theta]: "TAZ - AVAX",
    [NetworkID.Klaytn]: "TAZ - AVAX",
    [NetworkID.Harmony]: "TAZ - AVAX",
    [NetworkID.Telos]: "TAZ - AVAX",
    [NetworkID.Metis]: "TAZ - AVAX",
    [NetworkID.Celo]: "TAZ - AVAX",
    [NetworkID.Moonriver]: "TAZ - AVAX",
    [NetworkID.Wanchain]: "TAZ - AVAX",
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      bondAddress: "0x99E9b0a9dC965361C2CBc07525EA591761aEaA53",
      reserveAddress: "0xB612c37688861f1f90761DC7F382C2aF3a50Cc39",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0x7BB53Ef5088AEF2Bb073D9C01DCa3a1D484FD1d2",
      reserveAddress: "0x11BE404d7853BDE29A3e73237c952EcDCbBA031E",
    },
    [NetworkID.BSCMainnet]: {
      bondAddress: "0xF855E52ecc8b3b795Ac289f85F6Fd7A99883492b",
      reserveAddress: "0xe30Faec92446770A2caE6b6ED7AbeE3621e9b8F3",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0xF855E52ecc8b3b795Ac289f85F6Fd7A99883492b",
      reserveAddress: "0xe30Faec92446770A2caE6b6ED7AbeE3621e9b8F3",
    },
    [NetworkID.Avalanche]: {
      bondAddress: "0x99E9b0a9dC965361C2CBc07525EA591761aEaA53",
      reserveAddress: "0x24c289Aa4ef278b49a0d6B4da8aAEDa267cb247c",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F", //native-stable token address
      reserveAddress: "0x24c289Aa4ef278b49a0d6B4da8aAEDa267cb247c",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const tazor_native_token = new LpToken({
  name: "tazor_dai_lp",
  displayName: "DAI - TAZOR",
  bondIconSvg: {
    [NetworkID.Mainnet]: tazorETHImg,
    [NetworkID.Testnet]: tazorETHImg,
    [NetworkID.BSCMainnet]: tazorBNBImg,
    [NetworkID.BSCTestnet]: tazorBNBImg,
    [NetworkID.Arbitrum]: TazorDaiImg,
    [NetworkID.ArbitrumTestnet]: TazorDaiImg,
    [NetworkID.Avalanche]: tazorAVAXImg,
    [NetworkID.AvalancheTestnet]: tazorAVAXImg,
    [NetworkID.Fantom]: tazorAVAXImg,
    [NetworkID.Polygon]: tazorAVAXImg,
    [NetworkID.Theta]: tazorAVAXImg,
    [NetworkID.Klaytn]: tazorAVAXImg,
    [NetworkID.Harmony]: tazorAVAXImg,
    [NetworkID.Telos]: tazorAVAXImg,
    [NetworkID.Metis]: tazorAVAXImg,
    [NetworkID.Celo]: tazorAVAXImg,
    [NetworkID.Moonriver]: tazorAVAXImg,
    [NetworkID.Wanchain]: tazorAVAXImg,
  },
  reserveContract: ReserveTazorDaiContract,
  tokenName: {
    [NetworkID.Mainnet]: "DAI - TAZOR",
    [NetworkID.Testnet]: "DAI - TAZOR",
    [NetworkID.BSCMainnet]: "TAZOR - BNB",
    [NetworkID.BSCTestnet]: "TAZOR - BNB",
    [NetworkID.Arbitrum]: "DAI - TAZOR",
    [NetworkID.ArbitrumTestnet]: "DAI - TAZOR",
    [NetworkID.Avalanche]: "DAI - TAZOR",
    [NetworkID.AvalancheTestnet]: "TAZOR - AVAX",
    [NetworkID.Fantom]: "TAZOR - AVAX",
    [NetworkID.Polygon]: "TAZOR - AVAX",
    [NetworkID.Theta]: "TAZOR - AVAX",
    [NetworkID.Klaytn]: "TAZOR - AVAX",
    [NetworkID.Harmony]: "TAZOR - AVAX",
    [NetworkID.Telos]: "TAZOR - AVAX",
    [NetworkID.Metis]: "TAZOR - AVAX",
    [NetworkID.Celo]: "TAZOR - AVAX",
    [NetworkID.Moonriver]: "TAZOR - AVAX",
    [NetworkID.Wanchain]: "TAZOR - AVAX",
  },
  networkAddrs: {
    [NetworkID.Mainnet]: {
      // TODO: add correct bond address when it's created
      bondAddress: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
      reserveAddress: "0x055475920a8c93CfFb64d039A8205F7AcC7722d3",
    },
    [NetworkID.Testnet]: {
      bondAddress: "0xcF449dA417cC36009a1C6FbA78918c31594B9377",
      reserveAddress: "0x8D5a22Fb6A1840da602E56D1a260E56770e0bCE2",
    },
    [NetworkID.BSCMainnet]: {
      // TODO: add correct bond address when it's created
      bondAddress: "0xF855E52ecc8b3b795Ac289f85F6Fd7A99883492b",
      reserveAddress: "0x4Ab4f9f53F77fe45979bF2386AF9B5b095314B48",
    },
    [NetworkID.BSCTestnet]: {
      bondAddress: "0xF855E52ecc8b3b795Ac289f85F6Fd7A99883492b",
      reserveAddress: "0x4Ab4f9f53F77fe45979bF2386AF9B5b095314B48",
    },
    [NetworkID.Avalanche]: {
      // TODO: add correct bond address when it's created
      bondAddress: "0x956c43998316b6a2F21f89a1539f73fB5B78c151",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.AvalancheTestnet]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F", // native-stable address.
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Fantom]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F", // native-stable address.
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Polygon]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F", // native-stable address.
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Theta]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Klaytn]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Harmony]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Telos]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Metis]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Celo]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Moonriver]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
    [NetworkID.Wanchain]: {
      bondAddress: "0xe657DcD108B440845B27C15AED878f20b40D8b3F",
      reserveAddress: "0x08e3A3b0cD19fD8Fe515934f1877456Ebe9F3f03",
    },
  },
});

export const allLpBonds = [
  tazor_dai,
  taz_dai,
  // ohm_fraxOld,
  // lusd,
  // ohm_lusd,
  // ohm_weth,
  // ohm_wethOld,
];

export const allLpTokens = [
  tazor_native_token,
  taz_native_token,
  // ohm_fraxOld,
  // lusd,
  // ohm_lusd,
  // ohm_weth,
  // ohm_wethOld,
];

// TODO (appleseed-expiredBonds): there may be a smarter way to refactor this
// export const allExpiredBonds = [cvx_expired];
export const allExpiredBonds = [cvx];
export const allBondsMap = allBonds.reduce((prevVal, bond) => {
  return { ...prevVal, [bond.name]: bond };
}, {});

// Debug Log
// console.log(allBondsMap);
export default allBonds;
