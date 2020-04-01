import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    categoriesMenu: {

    },
    link: {
        color: '#1c1c1c'
    },
    menuNav: {
        backgroundColor: '#FFF',
        position: 'relative',
        width: '250px',
    },
    secondMenu: {
        backgroundColor: '#FFF',
        position: 'absolute',
        left: '250px',
        top: '0px',
        width: '250px',
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    },
    thirdMenu: {
        backgroundColor: '#FFF',
        position: 'absolute',
        left: '250px',
        top: '0px',
        width: '250px',
        borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
    },
}));

export default useStyles;
