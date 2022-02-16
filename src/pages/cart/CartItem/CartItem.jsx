/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/01/2022 - 15:29:41
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/01/2022
 * - Author          :
 * - Modification    :
 **/
import { Box, Button, Typography } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid, IconButton } from "@mui/material";
import React from "react";
import useGlobal from "../../../context/index";

const CartItem = ({ item }) => {
  const { handleUpdateCartQty, handleRemoveFromCart } = useGlobal();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <Grid
        container
        spacing={3}
        style={{
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "10px",
          marginBottom: " 10px"
        }}
      >
        <Grid item xs={5} sx={{ display: "flex", alignItems: "center" }}>
          <img
            alt="product"
            src={
              item?.image?.url ||
              "https://image.freepik.com/free-photo/green-product-background_53876-90135.jpg"
            }
            title={item.name}
            style={{
              width: "90%",
              borderRadius: "10px",
              height: "100px",
              objectFit: "contain"
            }}
          />
          <Typography
            variant="subtitle1"
            component="h2"
            style={{
              whiteSpace: "nowrap",
              width: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            {item.name}
          </Typography>
        </Grid>
        <Grid item xs={3} sx={{ display: "flex" }}>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}
          >
            <RemoveIcon />
          </Button>
          <Typography
            style={{
              border: "1px solid grey",
              borderRadius: "5px",
              padding: "10px"
            }}
          >
            {item.quantity}
          </Typography>
          <Button
            type="button"
            size="small"
            onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}
          >
            <AddIcon />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h5" sx={{ mr: 1 }}>
            {item.line_total.formatted_with_symbol}
          </Typography>
        </Grid>
      </Grid>
      <IconButton sx={{ ml: 1 }} onClick={() => handleRemoveFromCart(item.id)}>
        <ClearSharpIcon />
      </IconButton>
    </Box>
  );
};

export default CartItem;
