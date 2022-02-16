/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 25/01/2022 - 16:53:56
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 25/01/2022
 * - Author          :
 * - Modification    :
 **/
import { alpha, makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  flex: {
    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  search: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid lightgrey",
    borderRadius: "30px",
    width: "45%"
  },

  input: {
    marginLeft: theme.spacing(1)
  },

  icons: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },

  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },

  badge: {
    marginRight: theme.spacing(2)
  },

  bottomIcons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "black"
  }
}));
