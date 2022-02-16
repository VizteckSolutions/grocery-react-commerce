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
import React from "react";
import { CategoriesList, Loader } from "../../components";
import useGlobal from "../../context";

const Index = () => {
  const { categories } = useGlobal();

  if (!categories) return <Loader />;

  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
};

export default Index;
