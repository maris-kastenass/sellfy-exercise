import { useState, useEffect } from 'react';
import ProductsTable from '../ProductsTable/ProductsTable';

import type { Product } from '../../../types/product';

const ProductsLoader = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Sellfy/test-assignment-frontend/refs/heads/master/products.json'
        );
        const result = await response.json();
        console.log('result:', result);
        setProducts(result.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!products?.length) {
    return <p>No product loaded</p>;
  }

  const deleteProduct = (id: string) => {
    const newProducts = products.filter((product: Product) => {
      return product._id !== id;
    });

    setProducts(newProducts);
  };

  return <ProductsTable products={products} onDelete={deleteProduct} />;
};

export default ProductsLoader;
