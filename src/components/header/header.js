import React,{useState} from "react";
import styled from "styled-components";
import HeaderAppBar from "./header-appbar";
import HeaderMenu from "./header-menu";

let HeaderComponent = styled.div`
    background-color : rgb(32, 33, 36);
    height : 100px;
    display : flex;
    flex-direction : column;
    justify-content : space-around;
`

let Header = function (){
    let [isMobile,setMobile] = useState(false);
    return(
        <div className="header" style={{position:'sticky', top:0}}>
            <HeaderComponent>
                <HeaderAppBar isOpen={isMobile}></HeaderAppBar>
                <HeaderMenu isMobile={isMobile}></HeaderMenu>
            </HeaderComponent>
        </div>
    )
}

export default Header;