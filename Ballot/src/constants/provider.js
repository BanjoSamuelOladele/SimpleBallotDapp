import { ethers } from "ethers";



export const readOnlyProvider = new ethers.JsonRpcProvider(
    import.meta.env.VITE_RPC_URL
);

export const readAndChangeStateProvider = (provider) => new ethers.BrowserProvider(provider);


