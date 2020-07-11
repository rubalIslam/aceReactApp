import React from 'react';
import { Link } from 'react-router-dom';
//import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';


const AdminNav = () => {

    const links = [
        {
            title: 'Customer Details',
            linkTo: '/customers'
        },
        {
            title: 'Add Designs',
            linkTo: '/addDesigns'
        },
        {
            title: 'Add Gallery',
            linkTo: '/addGallery'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom:'1px solid #353535'
    }


    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <li button style={style}>
                    {link.title}
                </li>
            </Link>
        ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Log out succesfull')
        },(error)=>{
            console.log('Error logging out')
        })
    }


    return (
        <div className="container p-120" style={{padding:120}}>
            {renderItems()}
            <li button 
                style={style} 
                onClick={()=> logoutHandler()}>
                Log out
            </li>
        </div>
    );
};

export default AdminNav;