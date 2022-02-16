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
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Ecrousel from "react-elastic-carousel";
import useGlobal from "../../../../context/index";
import { Product, Loader } from "../../../../components";
import { Link } from "react-router-dom";
import "../styles.css";

const Index = () => {
  const { categoryProducts } = useGlobal();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  if (!categoryProducts.length) return <Loader />;
  return (
    <>
      {categoryProducts.map((category) => (
        <section>
          <Container maxWidth="xl">
            <Box
              sx={{
                my: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h4" component="h2">
                {category.name}
              </Typography>
              <Link to={`/categories/${category.slug}`}>
                <Typography
                  sx={{
                    textDecoration: "none",
                    color: "#9c9899",
                    cursor: "pointer"
                  }}
                  variant="h6"
                >
                  View all
                  <PlayArrowRoundedIcon sx={{ ml: 1 }} />
                </Typography>
              </Link>
            </Box>

            <div className="ashar">
              <Ecrousel breakPoints={breakPoints}>
                {category.prductsData.slice(0, 9).map((product) => (
                  <Product product={product} />
                ))}
              </Ecrousel>
            </div>
          </Container>
        </section>
      ))}
    </>
  );
};

export default Index;
