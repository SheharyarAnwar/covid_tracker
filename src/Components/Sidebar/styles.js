import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: {
    height: "100vh",
    margin: 0,
    padding: 0,
    backgroundColor: theme.palette.orange,
    "& p": {
      color: "white",
      fontFamily: theme.typography.fontFamily,
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginTop: "4vh",
    },
  },
}));
export default style;
