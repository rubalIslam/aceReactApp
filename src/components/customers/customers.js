import React, { Component } from "react";
import { Link } from "react-router-dom";

import { firebaseContacts } from "../../firebase";
import { firebaseLooper, reverseArray } from "../ui/misc";

class Customers extends Component {
  state = {
    isloading: true,
    search: "",
    customers: [],
  };

  componentDidMount() {
    firebaseContacts.once("value").then((snapshot) => {
      const customers = firebaseLooper(snapshot);
        //console.log(customers);
      this.setState({
        isloading: false,
        customers: reverseArray(customers),
      });

      //console.log(customers);
    });
  }
  updateSearch(event) {
    this.setState({
      search: event.target.value.substr(0, 20),
    });
  }

  render() {
    let filterCustomers = this.state.customers.filter((customer) => {
      return (
        customer.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div className = "customers" style={{color:"white"}}>
        <div className="container customer">
          <div className="row">
              <div className="col-lg-12">
                <input
                type="text"
                style={{ borderRadius: "5px", width:"100%", backgroundColor: "white", color:"black" }}
                placeholder="Search"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                />
              </div>
          </div>
          <div className="row custrow">
            <div className="col-lg-2 colheader col-md-2 text-center">
              <div>Name</div>
            </div>
            <div className="col-lg-2 colheader col-md-2  text-center">
              <div>Phone No.</div>
            </div>
            <div className="col-lg-2 colheader col-md-2 text-center">
              <div>Email</div>
            </div>
            <div className="col-lg-6 colheaderQuery col-md-3 text-center">
              <div>Query</div>
            </div>
          </div>
          {this.state.customers
            ? filterCustomers.map((customer, i) => (
                <div className="row">
                  <div className="col-lg-2 colheaderval col-md-2 ">
                    <div>{customer.name}</div>
                  </div>
                  <div className="col-lg-2 colheaderval col-md-2 ">
                    <div>{customer.phone}</div>
                  </div>
                  <div className="col-lg-2 colheaderval col-md-2 ">
                    <div>{customer.email}</div>
                  </div>
                  <div className="col-lg-6 colheaderQueryval col-md-2 ">
                    <div>{customer.question}</div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    );
    
  }
}

export default Customers;
