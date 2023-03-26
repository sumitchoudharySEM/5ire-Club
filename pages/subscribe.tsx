

export default function MintNFT() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Subscribe to KUTUMB X SCROLL</h1>
      <div className="flex flex-col items-center space-y-4">
        <img src="https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/storage/uploads/view/563756e73e6c53096d7e6375d2b12212.jpg" alt="" height="500" width="500"/>
        <input
          type="text"
          id="nft-uri"
          className="border border-gray-400 p-2"
          color="black"
          style={{ color: "black" }}
          
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}