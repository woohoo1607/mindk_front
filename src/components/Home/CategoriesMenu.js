import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import useStyles from "./CategoriesMenuStyles";

const CategoriesMenu = (props) => {
    const classes = useStyles();

    const [openSecondCategoryWithId, setOpenSecondCategoryWithId] = useState(99999);
    const [openThirdCategoryWithId, setOpenThirdCategoryWithId] = useState(99999);
    const [openLastCategoryWithId, setOpenLastCategoryWithId] = useState(99999);

    const secondMenu = (parent_id) => {
        if (openSecondCategoryWithId===parent_id) {
            setOpenSecondCategoryWithId(99999);
        } else {
            setOpenSecondCategoryWithId(parent_id);
        }
    };
    const thirdMenu = (parent_id) => {
        if (openThirdCategoryWithId===parent_id) {
            setOpenThirdCategoryWithId(99999);
        } else {
            setOpenThirdCategoryWithId(parent_id);
        }
    };
    const lastMenu = (parent_id) => {
        if (openLastCategoryWithId===parent_id) {
            setOpenLastCategoryWithId(99999);
        } else {
            setOpenLastCategoryWithId(parent_id);
        }
    };

    const onMouseEnterMenu = (id, level) => {
        if (level === 1) {
            secondMenu(id)
        } else if (level === 2) {
            thirdMenu(id)
        } else {
            lastMenu(id)
        }
    };

    const onMouseLeaveNav = () => {
        secondMenu(99999);
        thirdMenu(99999);
        lastMenu(99999);
    };


    const createMenuLi = (id, name, childrenCount, level) => {
        return (
            <NavLink to={`/catalog?page=1&category=${id}`} className={classes.link}>
                <ListItem button
                          key={id}
                          onMouseEnter={()=> onMouseEnterMenu(id,level)}
                >
                    <ListItemText primary={name} />
                    {childrenCount>0 ? <ArrowForwardIosIcon fontSize="small"/> : <></>}
                </ListItem>
            </NavLink>
        )
    };


    return (
        <div className={classes.categoriesMenu} >
            <List component="nav" className={classes.menuNav} onMouseLeave={()=> onMouseLeaveNav()}>
                {props.categories.map((c,i)=> {
                    return (
                        <div key={i}>
                            {createMenuLi(c.id, c.name, c.children.length, 1)}
                            {c.children.length>0 ?
                            <Collapse in={openSecondCategoryWithId===c.id} timeout="auto" unmountOnExit key={i} className={classes.secondMenu}>
                                <List>
                                    {c.children.map((children, index) => {
                                        return (
                                            <div key={index}>
                                                {createMenuLi(children.id, children.name, children.children.length, 2)}
                                                {children.children.length>0 ?
                                                    <Collapse in={openThirdCategoryWithId===children.id} timeout="auto" unmountOnExit key={index} className={classes.thirdMenu}>
                                                        <List>
                                                            {children.children.map((lastChild, index) => {
                                                                return (
                                                                    <div key={index}>
                                                                        {createMenuLi(lastChild.id, lastChild.name, 0 ,3)}
                                                                    </div>
                                                                );
                                                            })}
                                                        </List>
                                                    </Collapse>

                                                    : <></>

                                                }
                                            </div>
                                        );
                                    })}
                                </List>
                            </Collapse>

                            : <></>

                            }
                        </div>
                    );
                })}

            </List>
        </div>
    )
};

export default CategoriesMenu;
