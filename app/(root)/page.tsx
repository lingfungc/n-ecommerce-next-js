import ProductList from "@/components/ui/shared/product/product-list";

import sampleData from "@/db/sample-data";

const HomePage = async () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default HomePage;
