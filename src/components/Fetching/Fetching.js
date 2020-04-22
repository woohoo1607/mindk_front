import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';

import "./styles.css";

const Fetching = () => {
    return (
        <div className="featching">
            <div className="progress">
                <CircularProgress />
            </div>
        </div>
    )
};

export default Fetching
