/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/01/2022 - 15:26:11
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/01/2022
 * - Author          :
 * - Modification    :
 **/
import { Card, IconButton, Typography } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import useGlobal from "../../context";
import Loader from "../Loader/index";
import useStyles from "./styles";
const Product = ({ product }) => {
  const { handleAddToCart } = useGlobal();

  const classes = useStyles();
  if (!product) return <Loader />;

  return (
    <>
      <Card className={classes.root}>
        <Link
          to={`/products/${product.permalink}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={
              product?.image?.url ||
              "https://image.freepik.com/free-photo/green-product-background_53876-90135.jpg"
            }
            alt="watch"
            className={classes.media}
          />
        </Link>
        <Box className={classes.cardContent}>
          <Box>
            <Typography
              variant="h6"
              component="h1"
              style={{
                whiteSpace: "nowrap",
                width: "140px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginLeft: "10px"
              }}
            >
              {product.name}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              component="h2"
              style={{ marginLeft: "10px", color: "#890e22" }}
            >
              Rs{product.price.formatted}
            </Typography>

            <IconButton
              aria-label="Add to Cart"
              onClick={() => handleAddToCart(product.id, 1)}
            >
              <AddShoppingCart />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default Product;
