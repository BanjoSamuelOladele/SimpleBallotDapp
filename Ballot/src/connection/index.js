import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'


// 2. Set chains
const mumbai = {
  chainId: import.meta.env.VITE_Mumbai_ChainId,
  name: 'Mumbai',
  currency: 'MATIC',
  explorerUrl: import.meta.env.VITE_ExploreUrl,
  rpcUrl: import.meta.env.VITE_RPC_URL
}

// 3. Create modal
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mumbai],
  projectId: import.meta.env.VITE_ProjectID,
  enableAnalytics: true
})

export const connectWalletPrompt = () =>{
  createWeb3Modal();
}


