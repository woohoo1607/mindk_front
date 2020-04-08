import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from "@material-ui/core/ListItemIcon";

const OneFilter = ({index, filter}) => {
    const [open, setOpen] = React.useState(false);

    const handleCategoriesClick = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };


    return (
        <List key={index}>
            <ListItem button onClick={handleCategoriesClick}>
                <ListItemText>{filter.name}</ListItemText>
            </ListItem>
            <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                <List>
                    {filter.parameters.length && filter.parameters.map((p,i) => {
                        let isDisabled = filter.count[i] ? false : true;
                        return (
                            <ListItem key={i} button onClick={handleToggle(i)} disabled={isDisabled}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.indexOf(i) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                      />
                                </ListItemIcon>
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
