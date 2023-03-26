import { useState } from 'react';
import { ethers } from 'ethers';
import  KUTUMB_ABI  from './myEpicNft.json';
//import { KUTUMB_ADDRESS } from './kutumb-address';

//get a provider
const provider = new ethers.providers.JsonRpcProvider(
    "https://alpha-rpc.scroll.io/l2"
  );
const signer = provider.getSigner();
if (typeof window.ethereum !== 'undefined') {
    const signer = provider.getSigner();
    const connectWallet = async () => {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    };
    connectWallet();
  }
const KUTUMB_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138";

const kutumbContract = new ethers.Contract(KUTUMB_ADDRESS, KUTUMB_ABI, signer);

export default function MyPage() {
  const [to, setTo] = useState('');
  const [uri, setURI] = useState('');
  const [txHash, setTxHash] = useState('');

  async function mintNFT() {
    const tx = await kutumbContract.safeMint(to, uri);
    await tx.wait();
    setTxHash(tx.hash);
  }

  return (
    <div>
      <label>
        To:
        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} />
      </label>
      <br />
      <label>
        URI:
        <input type="text" value={uri} onChange={(e) => setURI(e.target.value)} />
      </label>
      <br />
      <button onClick={mintNFT}>Mint NFT</button>
      {txHash && (
        <p>
          NFT minted successfully with transaction hash: {txHash}
        </p>
      )}
    </div>
  );
}