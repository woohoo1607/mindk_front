import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const Cart = ({isOpen, onClose, productsCart}) => {

    return (
        <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                Корзина
            </DialogTitle>
            <DialogContent>
                Корзина пуста...=(
            </DialogContent>
        </Dialog>
    )
};

export default Cart;
