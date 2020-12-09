import { makeStyles } from "@material-ui/core";

//const theme=useTheme()
const style = makeStyles((theme) => ({
  root: (name) => {
    const variant = name.name;
    return {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      height: 150,
      width: 150,
      borderRadius: 40,
      boxShadow: "7px 7px 10px 0px rgba(0, 0, 0, 0.15)",
      "& p": {
        fontFamily: theme.typography.fontFamily,
        fontSize: "1rem",
        color:
          variant === "Infected"
            ? theme.palette.lightBlue
            : variant === "Recovered"
            ? theme.palette.darkBlue
            : variant === "Deaths"
            ? theme.palette.red
            : null,
        marginBottom: "10%",
        fontWeight: "bold",
      },
      "& h4": {
        fontFamily: theme.typography.fontFamily,
        marginTop: "10%",
        color: theme.palette.black,
      },
    };
  },
}));
export default style;
