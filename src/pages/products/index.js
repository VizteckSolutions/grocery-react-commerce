/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 10/02/2022 - 12:21:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/02/2022
 * - Author          :
 * - Modification    :
 **/
import React, { useEffect, useState } from "react";
import { Loader } from "../../components";
import useGlobal from "../../context";
import { ProductList } from "../../components";
const Index = () => {
  const { products } = useGlobal();

  if (!products) return <Loader />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Index;
