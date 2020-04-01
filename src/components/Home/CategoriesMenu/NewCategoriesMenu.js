import React, {useState} from "react";
import List from "@material-ui/core/List";

import useStyles from "./CategoriesMenuStyles";
import CreateMenuLi from "./CreateMenuLi";

const NewCategoriesMenu = (props) => {
    const classes = useStyles();
    const CLOSE = 999999;
    const [whoOpen, setWhoOpen] = useState(CLOSE);

    const changeWhoOpen = (id) => {
        setWhoOpen(id);
    };


    return (
        <div className={classes.categoriesMenu} >
            <List component="nav" className={classes.menuNav} onMouseLeave={()=> changeWhoOpen(CLOSE)}>
                {props.categories.map((c, i)=> <CreateMenuLi id={c.id} name={c.name} childrenCount={c.children.length} children={c.children} index={i} changeWhoOpen={changeWhoOpen} whoOpen={whoOpen}/>)}
            </List>
        </div>
    )
};

export default NewCategoriesMenu;
