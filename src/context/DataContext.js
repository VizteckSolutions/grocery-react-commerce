/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 26/01/2022 - 10:44:02
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/01/2022
 * - Author          :
 * - Modification    :
 **/
import React, { useEffect, createContext, useState } from "react";
import { commerce } from "../lib/commerce";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);

  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const fetchProducts = async () => {
    const { data: products } = await commerce.products.list();
    setProducts(products);
  };

  const fetchCategories = async () => {
    const { data: categories } = await commerce.categories.list();
    setCategories(categories);
  };

  const fetchProductByCategory = async () => {
    const { data: products } = await commerce.products.list();
    const { data: categoriesData } = await commerce.categories.list();
    setProducts(products);
    const productsPerCategory = categoriesData.reduce((acc, category) => {
      return [
        ...acc,
        {
          ...category,
          prductsData: products.filter((product) =>
            product.categories.find((cat) => cat.id === category.id)
          )
        }
      ];
    }, []);

    setCategoryProducts(productsPerCategory);
  };

  const fetchCart = async () => {
    let result = await commerce.cart.retrieve();
    setCart(result);
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchProductByCategory();
  }, []);
  let Data = {
    products,
    categories,
    categoryProducts,
    fetchCart,
    cart,
    handleAddToCart,
    handleEmptyCart,
    handleUpdateCartQty,
    handleCaptureCheckout,
    handleRemoveFromCart,
    order,
    errorMessage
  };

  return (
    <>
      <DataContext.Provider value={Data}>{children}</DataContext.Provider>
    </>
  );
};
