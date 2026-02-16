const Hosting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Hosting Plans</h1>
        <p className="text-xl mb-8">Choose the perfect hosting solution for your needs</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Shared Hosting</h3>
            <p className="text-4xl font-bold mb-4">$9.99<span className="text-lg">/mo</span></p>
            <ul className="space-y-2 text-left">
              <li>✓ 10 GB Storage</li>
              <li>✓ 100 GB Bandwidth</li>
              <li>✓ Free SSL</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg border-2 border-orange-500">
            <h3 className="text-2xl font-bold mb-4">VPS Hosting</h3>
            <p className="text-4xl font-bold mb-4">$29.99<span className="text-lg">/mo</span></p>
            <ul className="space-y-2 text-left">
              <li>✓ 50 GB Storage</li>
              <li>✓ Unlimited Bandwidth</li>
              <li>✓ Free SSL & Backups</li>
            </ul>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Dedicated</h3>
            <p className="text-4xl font-bold mb-4">$99.99<span className="text-lg">/mo</span></p>
            <ul className="space-y-2 text-left">
              <li>✓ 500 GB Storage</li>
              <li>✓ Unlimited Everything</li>
              <li>✓ 24/7 Premium Support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hosting;
