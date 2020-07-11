import React from "react";
import aceLogo from "./assets/img/logo/logoace.png";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

function App() {
  const home = {
    logoImg : './assets/img/logo/logoace1.png',

  }
  return (
    <div className="App">
      <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
          <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
              <img src={"./assets/img/logo/logoace.png"} alt=""/>
            </div>
          </div>
        </div>
      </div>
      
      <Header/>
      <Main/>
      <Footer/>

    </div>
  );
}

export default Appp;
