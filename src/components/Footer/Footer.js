/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 07/02/2022 - 14:59:42
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/02/2022
 * - Author          :
 * - Modification    :
 **/
import { Box, Grid, Typography } from "@material-ui/core";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import React from "react";

const Footer = () => (
  <>
    <Grid
      container
      justifyContent="center"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "350px",
        marginTop: "20px",
        backgroundColor: "#0f3360",
        color: "white",
        fontWeight: "bold",
        padding: "80px"
      }}
    >
      <Grid item xs={12} md={4} sx={{ mb: { xs: 1 } }}>
        <Typography
          variant="h4"
          component="h2"
          style={{ color: "#e94560", marginBottom: "10px" }}
        >
          VizTeck
        </Typography>
        <Typography variant="subtitle2" style={{ width: "70%" }}>
          xdnsmm smdnfsmfn snkdjfndskjfnjknfjksdjfh ksdjfjhdf skjdfjkdsfs
          ksdjfjdsfh jsdkfjk sjkdfdjs.sifdukdfjsjh
          skfdhjfhsd,sbdfjkdsfkjskjfskfjd.
        </Typography>
      </Grid>
      <Grid item xs={4} md={2}>
        <Typography variant="h5" component="h1">
          About Us
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" component="h3">
            Careers
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Our Stores
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Our cares
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Terms & Conditions
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Privacy Policy
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} md={2}>
        <Typography variant="h5" component="h1">
          Customer Care
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" component="h3">
            Help Center{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            How to buy{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Track your Order{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Corporate & Bulk Purchase{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Returns & Refunds{" "}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4} md={2}>
        <Typography variant="h5" component="h1">
          Contact Us
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Typography variant="subtitle2" component="h3">
            Building 145 Civic Center, Behria town Rawalpindi{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            {" "}
            Behria town Rawalpindi{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            Email: vizteck@gmail.com{" "}
          </Typography>
          <Typography variant="subtitle2" component="h3">
            phone: +92 313 5859 296{" "}
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <FacebookRoundedIcon sx={{ mr: 1 }} />{" "}
            <YouTubeIcon sx={{ mr: 1 }} /> <InstagramIcon sx={{ mr: 1 }} />{" "}
            <TwitterIcon sx={{ mr: 1 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Footer;
