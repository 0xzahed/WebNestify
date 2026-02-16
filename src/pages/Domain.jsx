const Domain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Domain Services</h1>
        <p className="text-xl">Find and register your perfect domain name</p>
        <div className="mt-8">
          <input 
            type="text" 
            placeholder="Search for your domain..." 
            className="px-6 py-3 rounded-full w-96 text-gray-800"
          />
          <button className="ml-4 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition font-medium">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Domain;
