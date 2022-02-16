/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 10/02/2022 - 12:13:41
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/02/2022
 * - Author          :
 * - Modification    :
 **/
import { Card, Container } from "@mui/material";
import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { commerce } from "../../lib/commerce";
import useGlobal from "../../context";

const ProductsDetail = () => {
  const [individualProduct, setIndividualProduct] = useState([]);
  const { handleAddToCart } = useGlobal();

  const { permalink } = useParams();
  useEffect(() => {
    const fetchIndividualProduct = async () => {
      const product = await commerce.products.retrieve(permalink, {
        type: "permalink"
      });
      setIndividualProduct(product);
    };
    fetchIndividualProduct();
  }, []);
  if (!individualProduct) return null;

  return (
    <Container maxWidth="xl">
      <Grid
        container
        spacing={1}
        style={{
          backgroundColor: "white",
          marginTop: "10px",
          padding: "10px",
          alignItems: "center"
        }}
      >
        <Grid item md={5}>
          <img
            src={individualProduct?.image?.url || ""}
            alt={individualProduct.name}
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography
            gutterBottom
            variant="h4"
            color="textPrimary"
            component="h4"
            fontWeight={500}
          >
            {individualProduct.name}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            color="textPrimary"
            component="h4"
          >
            Description
          </Typography>
          <List>
            <ListItem>
              <Box
                dangerouslySetInnerHTML={{
                  __html: individualProduct.description
                }}
              ></Box>
            </ListItem>
          </List>
        </Grid>

        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    Price
                  </Grid>
                  <Grid item xs={6}>
                    {individualProduct?.price?.formatted_with_symbol}
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid alignItems="center" container>
                  <Grid item xs={6}>
                    Status
                  </Grid>
                  <Grid item xs={6}>
                    In Stock
                  </Grid>
                </Grid>
              </ListItem>

              <ListItem>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(individualProduct.id, 1)}
                >
                  Add to cart
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  style={{ backgroundColor: "#e94560" }}
                  component={Link}
                  to="/cart"
                >
                  Go to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsDetail;
