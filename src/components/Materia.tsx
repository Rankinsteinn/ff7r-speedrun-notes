import React from "react";
import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { charactersPalette } from "./palette";

const useStyles = makeStyles((theme) => ({
  nestedList: {
    marginLeft: theme.spacing(2),
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
  listSubheader: {
    width: "100%",
  },
  listItemIcon: {
    minWidth: 64,
  },
  listItemText: {
    lineHeight: 1,
  },
}));

export interface MateriaItem {
  name: string;
  source?: "inventory" | "cloud" | "tifa" | "barret" | "aerith";
}

export interface MateriaProps {
  characters: Array<{
    name: string;
    weapon: Array<MateriaItem>;
    armor: Array<MateriaItem>;
    summon: Array<MateriaItem>;
  }>;
}

function Materia({ characters }: MateriaProps) {
  const classes = useStyles();

  const renderMateria = (materia: Array<MateriaItem>) => {
    return materia.map((x, i) => (
      <Typography
        key={i}
        component="span"
        variant="body2"
        className={classes.listItemText}
        style={{
          fontWeight: x.source ? "bold" : undefined,
          textTransform: x.source ? "uppercase" : undefined,
          color:
            x.source && x.source !== "inventory"
              ? charactersPalette[x.source]
              : undefined,
        }}
      >{`(${x.name || "Empty"}) `}</Typography>
    ));
  };

  return (
    <List
      dense
      className={classes.list}
      subheader={
        <ListSubheader className={classes.listSubheader}>Materia</ListSubheader>
      }
    >
      {characters.map((character, characterIndex) => (
        <Box key={characterIndex}>
          <ListItem>
            <ListItemText
              primary={character.name}
              classes={{ primary: classes.listItemText }}
            />
          </ListItem>
          <List dense disablePadding className={classes.nestedList}>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                Weapon
              </ListItemIcon>
              <ListItemText
                primary={renderMateria(character.weapon)}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                Armor
              </ListItemIcon>
              <ListItemText
                primary={renderMateria(character.armor)}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                Summon
              </ListItemIcon>
              <ListItemText
                primary={renderMateria(character.summon)}
                classes={{ primary: classes.listItemText }}
              />
            </ListItem>
          </List>
        </Box>
      ))}
    </List>
  );
}

export default Materia;
