/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 28/01/2022 - 11:13:18
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/01/2022
 * - Author          :
 * - Modification    :
 **/
import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import useStyles from "./styles";
import {
  Typography,
  Avatar,
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
  Button,
  Popper,
  Grow
} from "@material-ui/core";

const Login = () => {
  const [userDetails, setUserDetails] = useState({});
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const responseGoogle = (response) => {
    setUserDetails(response.profileObj);
    setIsUserLoggedIn(true);
  };

  const logout = () => {
    setIsUserLoggedIn(false);
  };

  return (
    <div>
      {!isUserLoggedIn && (
        <GoogleLogin
          clientId="863532140951-ucg4f55ageb6mfqopi7evl7bqr8hnbvu.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              variant="outlined"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login
            </Button>
          )}
          onSuccess={responseGoogle}
          isSignedIn={true}
        />
      )}

      {isUserLoggedIn && (
        <div>
          <Button
            color="inherit"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <Avatar
              alt="user-pic"
              color="primary"
              src={userDetails?.imageUrl}
              style={{ marginRight: "2px" }}
            />
            <span
              style={{ borderBottom: "1px solid grey" }}
              className={classes.loginNameLg}
            >
              {" "}
              {userDetails?.name}
            </span>
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "right top" : "right bottom",
                  marginTop: "-5%"
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem>
                        <span className={classes.loginNameSm}>
                          {userDetails?.name}
                        </span>
                      </MenuItem>
                      <MenuItem onClick={handleClose}>Profile</MenuItem>
                      <MenuItem onClick={handleClose}>My account</MenuItem>
                      <MenuItem onClick={handleClose}>
                        {" "}
                        <GoogleLogout
                          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                          render={(renderProps) => (
                            <Button
                              variant="outlined"
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                            >
                              Logout
                            </Button>
                          )}
                          onLogoutSuccess={logout}
                        ></GoogleLogout>
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      )}
    </div>
  );
};

export default Login;
