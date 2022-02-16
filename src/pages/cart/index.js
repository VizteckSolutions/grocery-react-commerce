/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 26/01/2022 - 11:46:23
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 26/01/2022
 * - Author          :
 * - Modification    :
 **/
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components";
import useGlobal from "../../context";
import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = () => {
  const { cart, fetchCart, handleEmptyCart } = useGlobal();

  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  useEffect(() => {
    fetchCart();
  }, []);
  if (!cart.line_items) return <Loader />;

  const renderCart = () => (
    <>
      <Box>
        <Grid container spacing={3}>
          {cart.line_items.map((lineItem) => (
            <Grid item xs={12} key={lineItem.id}>
              <CartItem item={lineItem} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginRight: "60px"
        }}
      >
        <Box sx={{ display: "flex", m: 4 }}>
          <Typography variant="h5" sx={{ mr: 2 }}>
            Subtotal:{" "}
          </Typography>
          <Typography variant="h6" component="h1">
            {cart.subtotal.formatted_with_symbol}
          </Typography>
        </Box>

        <Box sx={{ mx: 4 }}>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
            sx={{ mr: 2 }}
          >
            Empty cart
          </Button>
          <Button
            className={classes.checkoutButton}
            component={Link}
            to="/checkout"
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </Box>
      </Box>
    </>
  );

  return (
    <Container
      maxWidth="xl"
      style={{
        backgroundColor: "#eef1f5",
        marginTop: "20px",
        padding: "70px"
      }}
    >
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" sx={{ mb: 1 }}>
        Your Shopping Cart
      </Typography>
      <Divider sx={{ mb: 4 }} />
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};

export default Cart;
