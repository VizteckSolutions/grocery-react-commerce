/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 28/01/2022 - 16:51:48
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 28/01/2022
 * - Author          :
 * - Modification    :
 **/
import { alpha, makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  carousel_img: {
    height: "500px",
    width: "100%",
    objectFit: "cover"
  },

  carousel_text: {
    position: "absolute",
    top: "62%",
    [theme.breakpoints.up("sm")]: {
      top: "42%"
    },
    left: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    color: "black",
    fontSize: "30%"
  }
}));
