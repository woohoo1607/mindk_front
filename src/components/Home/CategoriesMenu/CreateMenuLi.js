import {NavLink} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Divider from "@material-ui/core/Divider";
import React from "react";

import useStyles from "./CategoriesMenuStyles";
import CreateCollapse from "./CreateCollapse";

const CreateMenuLi = ({id, name, childrenCount, children, index, changeWhoOpen, whoOpen}) => {
    const classes = useStyles();

    const changeStatus = (parent_id) => {
        changeWhoOpen(parent_id);
    };

    return (
        <div key={index}>
            <NavLink to={`/catalog?page=1&category=${id}`} className={classes.link}>
                <ListItem button
                          key={id}
                          onMouseEnter={()=> changeStatus(id)}
                >
                    <ListItemText primary={name} />
                    {!!childrenCount && <ArrowForwardIosIcon fontSize="small"/>}
                </ListItem>
                <Divider />
            </NavLink>
            {!!childrenCount && <CreateCollapse children={children} open={whoOpen===id} index={index}/>}
        </div>
    )
};
export default CreateMenuLi;
