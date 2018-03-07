import Typography from "typography";
import githubTheme from "typography-theme-github";

const Theme = githubTheme

Theme.baseFontSize = '16px'

Theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a:hover': {
    textDecoration: "none",
  }
})

const typography = new Typography(githubTheme);
// const typography = new Typography({ baseFontSize: "15px" });

export default typography;
