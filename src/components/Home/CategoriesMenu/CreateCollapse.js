import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import React, {useState} from "react";

import CreateMenuLi from "./CreateMenuLi";
import useStyles from "./CategoriesMenuStyles";

const CreateCollapse = ({children, open, index}) => {
    const classes = useStyles();
    const CLOSE = 999999;
    const [whoOpen, setWhoOpen] = useState(CLOSE);

    const changeWhoOpen = (id) => {
        setWhoOpen(id);
    };

    return (
        <Collapse in={open} timeout="auto" unmountOnExit key={index} className={classes.secondMenu}>
            <List>
                {children.map((c, i)=> <CreateMenuLi key={i} id={c.id} name={c.name} childrenCount={c.children.length} children={c.children} index={i} changeWhoOpen={changeWhoOpen} whoOpen={whoOpen}/>)}
            </List>
        </Collapse>
    )
};

export default CreateCollapse;
