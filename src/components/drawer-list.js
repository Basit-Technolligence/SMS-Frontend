import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import GroupIcon from "@material-ui/icons/Group";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ReceiptIcon from "@material-ui/icons/Receipt";
import DrawerListItem from "./drawer-list-item";
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  navlink: {
    textDecoration: "none",
    color: "#433E3E",
  },
}));

const DrawerList = () => {
  const classes = useStyles();
  const listArray = ["Students", "Teachers", "Expenses"];
  const [openStudents, setOpenStudents] = useState(false);
  const [openTeachers, setOpenTeachers] = useState(false);
  const [openExpenses, setOpenExpenses] = useState(false);
  return (
    <>
      <List>
        {listArray.map((list) => {
          let open = "";
          let icon = "";
          let setOpen = "";
          if (list === "Students") {
            icon = <AccessibilityNewIcon />;
            open = openStudents;
            setOpen = () => setOpenStudents(!openStudents);
          } else if (list === "Teachers") {
            icon = <GroupIcon />;
            open = openTeachers;
            setOpen = () => setOpenTeachers(!openTeachers);
          } else {
            icon = <LocalAtmIcon />;
            open = openExpenses;
            setOpen = () => setOpenExpenses(!openExpenses);
          }
          return (
            <DrawerListItem
              title={list}
              openVariable={open}
              onClick={setOpen}
              key={list}
            >
              {icon}
              <NavLink to={"/home/Add" + list} className={classes.navlink}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary={"Add " + list} />
                </ListItem>
              </NavLink>
              <NavLink to={"/home/Manage" + list} className={classes.navlink}>
                <ListItem button className={classes.nested}>
                  <ListItemText primary={"Manage " + list} />
                </ListItem>
              </NavLink>
            </DrawerListItem>
          );
        })}
      </List>
      <List>
      <NavLink to={"/home/Challan"} className={classes.navlink}>
          <ListItem button>
            <ListItemIcon>
              <SystemUpdateAltIcon />
            </ListItemIcon>
            <ListItemText primary="Students' Challan" />
          </ListItem>
          </NavLink>
        </List>
    </>
  );
};

export default DrawerList;
