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

  // if product array is empty then show this
  if (!products?.length) {
    return <p>No product loaded</p>;
  }

  // when delete pressed removes product from list
  const deleteProduct = (productId: string) => {
    const newProducts = products.filter((product: Product) => {
      return product._id !== productId;
    });

    setProducts(newProducts);
  };

  return <ProductsTable products={products} onDelete={deleteProduct} />;
};

export default ProductsLoader;
