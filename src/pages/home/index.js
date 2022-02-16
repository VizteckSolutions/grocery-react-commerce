/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 10/02/2022 - 11:59:19
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/02/2022
 * - Author          :
 * - Modification    :
 **/
import React from "react";
import { TopProduct, CategoriesProducts, Carousel } from "./components";
import { commerce } from "../../lib/commerce";
const Home = () => {
  return (
    <>
      <Carousel />
      <TopProduct />
      <CategoriesProducts />
    </>
  );
};

export default Home;
