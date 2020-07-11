import React from 'react';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open }
            onClose={()=> props.onClose(false)}
        >
            <div className="bg-dark">
            <List component="nav" className="bg-dark">
                <ListItem button >
                    <Link to="/">
                        Home
                    </Link>
                </ListItem>
                <ListItem button >
                    <Link to="/aboutus">
                        About Us
                    </Link>
                </ListItem>
                <ListItem button >
                    <Link to="/services">
                        Services
                    </Link>
                </ListItem>
                <ListItem button >
                    <Link to="/works">
                        Works
                    </Link>
                </ListItem>
                <ListItem button >
                    <Link to="/gallery">
                        Gallery
                    </Link>
                </ListItem>
                <ListItem button >
                    <Link to="/sign">
                        Login
                    </Link>
                </ListItem>
                <ListItem button>
                    <div className="header-btns f-right">
                    <Link to="/contactus" className="btn header-btn">
                        Contact us
                    </Link>
                    </div>
                </ListItem>
                <div className="bg-dark" style={{height:1000}}>

                </div>
            </List>
            </div>
        </Drawer>
    );
};

export default SideDrawer;