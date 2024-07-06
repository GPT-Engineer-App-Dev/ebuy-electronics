const Index = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center">
        <h1 className="text-4xl">Welcome to Our Store</h1>
      </header>

      {/* Main Banner */}
      <section className="bg-gray-200 p-8 text-center">
        <h2 className="text-3xl mb-4">Discover Our Latest Collection</h2>
        <p className="text-lg">Find the best products at unbeatable prices.</p>
      </section>

      {/* Featured Products */}
      <section className="p-8">
        <h2 className="text-2xl mb-4 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border p-4 text-center">
            <h3 className="text-xl mb-2">Product 1</h3>
            <p>High-quality product that meets your needs.</p>
          </div>
          <div className="border p-4 text-center">
            <h3 className="text-xl mb-2">Product 2</h3>
            <p>Top-rated product with excellent reviews.</p>
          </div>
          <div className="border p-4 text-center">
            <h3 className="text-xl mb-2">Product 3</h3>
            <p>Best seller with great value for money.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 Our Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;