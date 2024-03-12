import { ethers } from "ethers";

export const readOnlyProvider = new ethers.JsonRpcProvider(
    import.meta.env.VITE_RPC_URL
);

export const readAndChangeStateProvider = (signer) => new ethers.BrowserProvider(signer);

export const wssProvider = new ethers.WebSocketProvider(
    import.meta.env.VITE_WEB_SOCKET_RPC_URL
);