/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 31/01/2022 - 12:34:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 31/01/2022
 * - Author          :
 * - Modification    :
 **/
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: `rgba(0, 0, 0, 0.1) 0px 4px 12px`, // padding: theme.spacing(2),
    height: "350px",
    "&:hover": {
      boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px`
    }
  },
  media: {
    width: "100%",
    height: "230px",

    objectFit: "contain"

    // 16:9
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: theme.spacing(5)
  }
}));
