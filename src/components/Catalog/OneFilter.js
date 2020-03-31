import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

const OneFilter = ({index, filter}) => {
    const [open, setOpen] = React.useState(false);

    const handleCategoriesClick = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <List key={index}>
            <ListItem button onClick={handleCategoriesClick}>
                <ListItemText>{filter.name}</ListItemText>
            </ListItem>
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                <List>
                    {filter.parameters.length && filter.parameters.map((p,i) => {
                        return (
                            <ListItem key={i}>
                                <ListItemText>{p} ({filter.count[i]})</ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
            </Collapse>
        </List>
    )
};

export default OneFilter;
