import React,{useState} from "react";
import styled from "styled-components";
import { list1,list2 } from "./header-list";
import { Link } from "react-router-dom";

let HeaderMenuWrapper = styled.div`
    display : flex;
    justify-content : center;
    font-family: 'Plus Jakarta Sans', sans-serif;
    gap:15px;
    font-size : 13px;
`
let Separator = styled.div`
    border:1px solid grey;
    height : 15px;
    margin : 0 10px;
`
let Links = styled.span `
    font-weight : 400;
` 
let HeaderMenu = function({isMobile}){
    let [activeLink , setActiveLink] = useState(null);
    return(
        <>
        {!isMobile &&<HeaderMenuWrapper>
            {list1.map((data, key) => (
                <Link onClick={e=>{setActiveLink(data)}} to={data} key={key} style={{ textDecoration: 'none' }}>
                    <Links style={activeLink===data?{color:'#8BB8F8'}:{color:'inherit'}} key={key}>{data}</Links>
                    </Link>
                
            ))}
            <Separator/>
            {list2.map((data, key) => (
                <Link onClick={e=>{setActiveLink(data)}} to={"/category?q="+data} key={key} style={{ textDecoration: 'none' }}>
                <Links style={activeLink===data?{color:'#8BB8F8'}:{color:'inherit'}} key={key}>{data}</Links>
                </Link>
            ))}
            </HeaderMenuWrapper>}
            </>
    )
}

export default HeaderMenu;