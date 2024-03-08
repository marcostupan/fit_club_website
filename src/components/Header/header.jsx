import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 788 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div
        style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
        onClick={()=> setMenuOpened(true)}
        >
          {" "}
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      ) : (
        <ul className="header-menu">
          {/* <li onClick={()=>setMenuOpened(false)}><a href="#home"></a>Início</li> */}
          <li><a href="#home" onClick={()=>setMenuOpened(false)}>Início</a></li>
          <li><a href="#programs" onClick={()=>setMenuOpened(false)}>Programas</a></li>
          <li><a href="#reasons" onClick={()=>setMenuOpened(false)}>Porque nós?</a></li>
          <li><a href="#plans" onClick={()=>setMenuOpened(false)}>Planos</a></li>
          <li><a href="#testimonials" onClick={()=>setMenuOpened(false)}>Testemunhos</a></li>
          {/* <li onClick={()=>setMenuOpened(false)}>Programas</li>
          <li onClick={()=>setMenuOpened(false)}>Porque nós?</li>
          <li onClick={()=>setMenuOpened(false)}>Planos</li>
          <li onClick={()=>setMenuOpened(false)}>Testemunhos</li> */}
        </ul>
      )}
    </div>
  );
};

export default Header;
