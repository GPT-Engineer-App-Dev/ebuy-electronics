import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { sampleProducts } from "@/data/sampleProducts";

const Index = () => {
  return (
    <div className="container mx-auto px-4">
      <section className="my-8">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img src="/placeholder.svg" alt="Main Banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold text-white">Welcome to ElectroShop</h1>
          </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-3xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="my-12 text-center">
        <h2 className="text-3xl font-semibold mb-4">Shop Now</h2>
        <p className="mb-6">Discover our wide range of electronic products</p>
        <Button size="lg" asChild>
          <a href="/products">View All Products</a>
        </Button>
      </section>
    </div>
  );
};

export default Index;