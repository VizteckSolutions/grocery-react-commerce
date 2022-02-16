/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 26/01/2022 - 09:57:04
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/01/2022
 * - Author          :
 * - Modification    :
 **/
import { CssBaseline } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Container } from "@mui/material";
import React from "react";
import Loader from "../Loader";
import Product from "./Product";

const ProductList = ({ products }) => {
  if (!products.length) return <Loader />;
  return (
    <>
      <CssBaseline />

      <h1
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          color: "black",
          textAlign: "center"
        }}
      >
        OUR PRODUCTS
      </h1>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={2}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default ProductList;
