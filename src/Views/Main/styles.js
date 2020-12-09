import { makeStyles } from "@material-ui/core";
const style = makeStyles((theme) => {
  return {
    innerContainer: (match) => {
      const { mdMatch, smMatch, brMatch } = match;
      let height = null;
      if (mdMatch) {
        height = "100vh";
      }
      if (smMatch) {
        height = "86vh";
      }
      if (brMatch) {
        height = "200%";
      }

      return {
        height: height,
        backgroundColor: theme.palette.grey,
      };
    },
  };
});
export default style;
