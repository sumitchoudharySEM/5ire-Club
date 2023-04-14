import { useState } from 'react';
import { ethers } from 'ethers';
import subscribe from '../artifacts/contracts/Subscribe/Subscribe.json';

const SubscribePage = () => {
  const [status, setStatus] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const subscribeEmail = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL || '');
      const signer = new ethers.Wallet(process.env.REACT_APP_PRIVATE_KEY || '', provider);

      const contract = new ethers.Contract(process.env.REACT_APP_CONTRACT_ADDRESS || '', subscribe.abi, signer);

      const receipt = await contract.subscribe(email);
      console.log(receipt);

      setSubscribed(true);
      setStatus('Subscribed successfully!');
    } catch (error) {
      console.error(error);
      setStatus('Failed to subscribe.');
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md px-10 py-4 mb-8">
        Subscribe Now
      </h1>
      <div className="w-3/4 lg:w-1/2">
        <img src="https://media.istockphoto.com/id/672310452/photo/abstract-science-circle-global-network-connection-in-hands-on-sunset-background.jpg?b=1&s=170667a&w=0&k=20&c=TxCaOmjVps19EBn_KOAm1BVibw_SL3OF6wYe9L7tJwc=" alt="Subscribe" className="rounded-lg p-4 mb-8 " />
        {!subscribed ? (
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="hidden"
              placeholder="Mint your NFT"
              className="w-full rounded-md py-2 px-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              value={email}
              onChange={handleEmailChange}
            />
            <button
              className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md py-2 px-8 text-white font-medium shadow-lg hover:shadow-md transition duration-300"
              onClick={subscribeEmail}
            >
             Mint Membership
            </button>
          </div>
        ) : (
          <p className="text-white text-center font-medium">{status}</p>
        )}
      </div>
    </div>
  );
};

export default SubscribePage;
