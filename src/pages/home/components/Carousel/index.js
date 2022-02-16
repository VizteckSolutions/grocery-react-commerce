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
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import "../styles.css";
import useStyles from "./style";

const Index = () => {
  const classes = useStyles();

  return (
    <>
      <section style={{ height: "540px", width: "100%" }}>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            position: "relative"
          }}
        >
          <Box>
            <Carousel autoPlay>
              <img
                src="https://images.unsplash.com/photo-1539376248633-cf94fa8b7bd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="carousel_img"
                className={classes.carousel_img}
              />
              <img
                src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="carousel_img"
                className={classes.carousel_img}
                style={{ objectPosition: `1% 70%` }}
              />
            </Carousel>
          </Box>
          <Box sx={{ zIndex: "modal" }} className={classes.carousel_text}>
            <Typography
              variant="h2"
              components="h1"
              fontSize={{
                lg: 70,
                md: 50,
                sm: 40,
                xs: 32
              }}
            >
              Sell anything, everywhere
            </Typography>
            <Typography
              variant="h5"
              components="h2"
              fontSize={{
                lg: 40,
                md: 33,
                sm: 25,
                xs: 20
              }}
            >
              Easier, faster, all from one place.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#e94560",
                "&:hover": {
                  backgroundColor: "#e94560"
                }
              }}
            >
              Visit Collection
            </Button>
          </Box>
        </Container>
      </section>
    </>
  );
};

export default Index;
