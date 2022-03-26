import { Web3Auth } from "@web3auth/web3auth";
import { CHAIN_NAMESPACES, CustomChainConfig, CONNECTED_EVENT_DATA } from "@web3auth/base";
import { ADAPTER_EVENTS } from "@web3auth/base";
import { LOGIN_MODAL_EVENTS } from "@web3auth/ui";

function subscribeAuthEvents(
  web3auth: Web3Auth,
  onLogin: (data: CONNECTED_EVENT_DATA) => void,
  onLogout: () => void
) {
  web3auth.on(ADAPTER_EVENTS.CONNECTED, onLogin);

  web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
    console.log("connecting");
  });

  web3auth.on(ADAPTER_EVENTS.DISCONNECTED, onLogout);

  web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
    console.log("someerror or user have cancelled login request", error);
  });

  web3auth.on(LOGIN_MODAL_EVENTS.MODAL_VISIBILITY, (isVisible) => {
    console.log("modal visibility", isVisible);
  });
}

const polygonMumbaiConfig: CustomChainConfig = {
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  rpcTarget: "https://rpc-mumbai.maticvigil.com",
  blockExplorer: "https://mumbai-explorer.matic.today",
  chainId: "0x13881",
  displayName: "Polygon Mumbai Testnet",
  ticker: "matic",
  tickerName: "matic",
};

const web3auth = new Web3Auth({
  chainConfig: polygonMumbaiConfig,
  clientId:
    "BAEuAwh_XX88GzRhxUkwEeI-gA9R-QqIWBiZpo8F5fOhYAOLH_IsXnq4jXnMbr-y7H7lcgJBG52uJYoaLrS2Ei8",
});

export const initializeModal = async (
  onLogin: (data: CONNECTED_EVENT_DATA) => void,
  onLogout: () => void
) => {
  subscribeAuthEvents(web3auth, onLogin, onLogout);
  try {
    await web3auth.initModal();
  } catch {}
};

export function connect() {
  return web3auth.connect();
}

export function getUserInfo() {
  return web3auth.getUserInfo();
}

export function logout() {
  return web3auth.logout();
}

export default { initializeModal, connect, getUserInfo, logout, web3auth };
