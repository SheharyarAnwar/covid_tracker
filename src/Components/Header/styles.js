import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    height: "14vh",
    // width: "100vw",
    backgroundColor: theme.palette.grey,
    "& p": {
      color: theme.palette.orange,
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginLeft: "3vw",
    },
    "& .cls-2": {
      fill: theme.palette.orange,
    },
  },
}));
export default style;
