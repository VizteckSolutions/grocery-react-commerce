// /**
//  * @description      :
//  * @author           :
//  * @group            :
//  * @created          : 25/01/2022 - 16:53:29
//  *
//  * MODIFICATION LOG
//  * - Version         : 1.0.0
//  * - Date            : 25/01/2022
//  * - Author          :
//  * - Modification    :
//  **/
//
import { Select } from "@mui/material";
import { Mail, Search, ShoppingCart } from "@material-ui/icons";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  MenuItem,
  Typography
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router-dom";
import useGlobal from "../../context/index";
import Login from "./Login";
import useStyles from "./styles";

function Navbar() {
  const {
    cart,

    categories
  } = useGlobal();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  const navigate = useNavigate();

  useEffect(() => {}, []);
  return (
    <>
      {/* Company Information Bar */}
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: "#e94560" }}>
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            style={{ minHeight: "0px" }}
            sx={{
              py: 0.7,
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 1
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                display: { xs: "flex", md: "none" },
                fontSize: 18,
                color: "black"
              }}
            >
              VizTeck
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex" }}>
                <LocalPhoneIcon fontSize="small" />
                <Typography variant="subtitle2" sx={{ ml: 0.7 }}>
                  +92 313 5859 296
                </Typography>
              </Box>
              <Box sx={{ ml: 3, display: { xs: "none", md: "flex" } }}>
                <MailOutlineIcon fontSize="small" />
                <Typography variant="subtitle2" sx={{ ml: 0.7 }}>
                  vizteck@gmail.com
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box sx={{ mr: 2.5, color: "#262b42" }}>
                <Typography variant="subtitle2" component={Link} to="/">
                  Need Help?
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2">LNG</Typography>
                {/* <Language /> */}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Top website Navbar  */}
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", color: "black", zIndex: 99999 }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              py: 1,
              direction: "row",
              justifyContent: { xs: "space-around", md: "space-between" },
              alignItems: "center"
            }}
          >
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "#e94560",
                cursor: "pointer",
                textDecoration: "none"
              }}
            >
              VizTeck
            </Typography>

            <Box
              className={classes.search}
              sx={{
                width: { xs: "80%", md: "45%" },
                zIndex: 99999
              }}
            >
              <Box display="flex" alignItems="center">
                <Search onClick={() => {}} style={{ marginLeft: "10px" }} />
                <InputBase
                  placeholder="search..."
                  value={searchInput}
                  className={classes.input}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </Box>

              <Select
                value="All"
                // onChange={handleChange}
                style={{ border: "1px solid lightgrey", borderRadius: "30px" }}
              >
                <MenuItem value="All" onClick={() => {}}>
                  All Categories
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id}>{category.name}</MenuItem>
                ))}
              </Select>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                direction: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box>
                {location.pathname !== "/cart" && (
                  <IconButton
                    component={Link}
                    to="/cart"
                    aria-label="Show cart items"
                    color="inherit"
                  >
                    <Badge
                      badgeContent={cart.total_items}
                      className={classes.badge}
                      color="secondary"
                    >
                      <ShoppingCart />
                    </Badge>
                  </IconButton>
                )}
              </Box>
              <Box>
                <Badge
                  badgeContent={4}
                  color="secondary"
                  className={classes.badge}
                >
                  <Mail />
                </Badge>
              </Box>
              <Box>
                <Login />
              </Box>
            </Box>
          </Toolbar>

          <Toolbar
            disableGutters
            sx={{
              py: 1,
              direction: "row",
              justifyContent: { xs: "space-around", md: "space-between" },
              alignItems: "center"
            }}
          >
            <Box
              direction="row"
              spacing={1}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <MenuItem component={Link} to="/products">
                <Typography textAlign="center">All Categories</Typography>
              </MenuItem>

              {categories.map((category) => (
                <MenuItem
                  key={category.id}
                  component={Link}
                  to={`/categories/${category.slug}`}
                >
                  <Typography textAlign="center">{category.name}</Typography>
                </MenuItem>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Bottom website Navbar */}
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "white",
          color: "black",
          display: { xs: "flex", md: "none" },
          zIndex: 99999
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            style={{ minHeight: "0px" }}
            sx={{
              py: 0.7,
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 1
            }}
          >
            <Box
              className={classes.bottomIcons}
              style={{ textDecoration: "none" }}
              component={Link}
              to="/"
            >
              <HomeIcon />
              <Typography>Home</Typography>{" "}
            </Box>
            <Box
              className={classes.bottomIcons}
              style={{ textDecoration: "none" }}
              component={Link}
              to="/categories"
            >
              <CategoryIcon />
              <Typography>Category</Typography>{" "}
            </Box>

            {location.pathname === "/" && (
              <Box
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
                style={{ textDecoration: "none" }}
              >
                <Badge
                  badgeContent={cart.total_items}
                  color="secondary"
                  className={classes.bottomIcons}
                >
                  <ShoppingCart />
                </Badge>
                <Typography>Cart</Typography>
              </Box>
            )}

            <Box>
              <Login />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default Navbar;
