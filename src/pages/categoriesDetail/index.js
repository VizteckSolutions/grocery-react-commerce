/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 10/02/2022 - 14:01:54
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/02/2022
 * - Author          :
 * - Modification    :
 **/
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ProductList from "../../components/Product/ProductList";
import { commerce } from "../../lib/commerce";
const CategoriesDetail = () => {
  // const { fetchIndividualCategory, individualCategory } = useGlobal();
  const [individualCategory, setIndividualCategory] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    const fetchIndividualCategory = async (slug) => {
      const { data } = await commerce.products.list({
        category_slug: slug
      });

      setIndividualCategory(data);
    };
    fetchIndividualCategory(slug);
  }, [slug]);
  if (!individualCategory)
    return (
      <Stack
        sx={{
          color: "grey.500",
          justifyContent: "center",
          alignItems: "center",
          mt: 4
        }}
        spacing={2}
        direction="row"
      >
        <CircularProgress color="inherit" />
      </Stack>
    );
  return (
    <div>
      <h1>
        <ProductList products={individualCategory} />
      </h1>
    </div>
  );
};

export default CategoriesDetail;
