import React,{useState} from "react";
import styled from "styled-components";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { searchQuery } from "../../utils/client";
import { Link, redirect, useNavigate } from "react-router-dom";

let Logo = styled.div`
    padding : 0 20px;
    font-weight : 500;
    font-size : 18px;
`
let SearchWrapper = styled.div`
    display : flex;
    gap : 10px;
    
`;
let ProfileIcon = styled.div`
    width : 50px;
    height : 50px;
    border-radius :50%;
    background-color : grey;
    margin: 0 10px
`

let HeaderAppBar = function({isOpen}){
    let navigate = useNavigate();
    let [inputVal,setInputVal] = useState(null);
    function inputChange(event){
        event.preventDefault();
        setInputVal(event.target.value);
        let x = inputVal;
        setInputVal(null)
        navigate("/q?name="+x)
    }
    return(
        <div className="header-appbar" style={{display:'flex',justifyContent:'space-between', alignItems:'center'}}>
            <Link to="/" style={{textDecoration:'none'}}><Logo>News   App</Logo></Link>
            <SearchWrapper >
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:500 }}
                    onSubmit={e=>inputChange(e)}
                >
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon sx={{fill:'#000'}} />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1}}
                        placeholder="Search For Topic, Place and Sources"
                        onChange={e=>setInputVal(e.target.value)}
                    />
                </Paper>
            </SearchWrapper>
            <ProfileIcon/>
        </div>
    )
}
export default HeaderAppBar;