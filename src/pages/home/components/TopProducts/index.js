/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 06/02/2022 - 14:39:38
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 06/02/2022
 * - Author          :
 * - Modification    :
 **/
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Ecrousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { Loader, Product } from "../../../../components";
import useGlobal from "../../../../context";
import "../styles.css";
const Index = () => {
  const { products } = useGlobal();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  if (!products.length) return <Loader />;

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 10,
            mb: 4,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Typography variant="h4" component="h2">
            Top Products
          </Typography>
          <Typography
            sx={{ textDecoration: "none", color: "#9c9899" }}
            component={Link}
            to="/products"
            variant="h6"
          >
            View all
            <PlayArrowRoundedIcon sx={{ ml: 1 }} />
          </Typography>
        </Box>
        <div className="topProduct">
          <Ecrousel breakPoints={breakPoints}>
            {products.slice(0, 9).map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </Ecrousel>
        </div>
      </Container>
    </>
  );
};

export default Index;
