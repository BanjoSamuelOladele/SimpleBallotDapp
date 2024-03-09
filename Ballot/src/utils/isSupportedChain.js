

console.log("chainid from the env", import.meta.env.VITE_Mumbai_ChainId)
export const isSupportedChain = (chainId) => Number(chainId) === Number(import.meta.env.VITE_Mumbai_ChainId);