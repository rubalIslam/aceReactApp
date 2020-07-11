import React from "react";
import Layout from "./Hoc/Layout";
import { Switch } from "react-router-dom";


import PrivateRoute from "./components/authRoutes/privateRoutes";
import PublicRoute from "./components/authRoutes/publicroutes";
import SignIn from "./components/signin/signin";
import Dashboard from "./components/admin/Dashboard";
import Gallery from "./components/gallery/Gallery";

import Contacts from '../src/components/contacts/contacts';
import Customers from '../src/components/customers/customers';
import AddGallery from '../src/components/admin/addGallery/AddGallery';
import Home from "./main/main";
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
       {/* <PrivateRoute
          {...props}
          path="/admin_add/add_customers"
          exact
          component={}
       />*/}
       <PrivateRoute
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoute
          {...props}
          path="/addGallery"
          exact
          component={AddGallery}
        />

       <PublicRoute
          {...props}
          path="/sign"
          exact
          component={SignIn}
        />
        <PublicRoute
          {...props}
          path="/contactus"
          exact
          component={Contacts}
       />
       <PublicRoute
          {...props}
          path="/gallery"
          exact
          component={Gallery}
       />
       <PublicRoute
          {...props}
          path="/customers"
          exact
          component={Customers}
       />
        <PublicRoute
          {...props}
          restricted={false}
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </Layout>
  );
};
export default Routes;