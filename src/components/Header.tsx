import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import DarkThemeIcon from "@material-ui/icons/Brightness5";
import LightThemeIcon from "@material-ui/icons/Brightness7";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "../useTheme";

const useStyles = makeStyles((theme) => ({
  title: {
    paddingLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

export interface HeaderProps {
  setTheme: (theme: Theme) => void;
  theme: Theme;
  onMenuClick: () => void;
}

function Header({ theme, setTheme, onMenuClick }: HeaderProps) {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <IconButton color="inherit" edge="start" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Final Fantasy VII Remake Speedrun Notes
        </Typography>
        <Tooltip title="Toggle light/dark theme">
          <IconButton
            color="inherit"
            edge="end"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <DarkThemeIcon /> : <LightThemeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
