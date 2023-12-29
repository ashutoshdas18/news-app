import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import { searchQuery } from '../../utils/client';
import styled from 'styled-components';
import GeneralNews from '../reusable-components/general-news';
import { Divider } from '@mui/material';

let QueryWrapper = styled.div`
    width : 1000px;
    margin: 30px auto 0;
    background-color:#1f1f1f;
    padding : 10px;
    border-radius : 18px;

`

let QueryComponent = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');

    let [data,setData] = useState([]);
    useEffect(()=>{
        (async function myFn(){
            let x = await searchQuery(name);
            setData(x.articles);
        })();
        
    },[name])
    
    return(
        <QueryWrapper>
            {data && <>
                {data.map((d,key)=>{
                    if(d.urlToImage)
                    return (
                    <>
                    <GeneralNews data={d}></GeneralNews>
                    <Divider sx={{ backgroundColor: '#e3e3e3' }}/> 
                    </>
                    )
                }
                )}
                
            </>}
        </QueryWrapper>
    )
}

export default QueryComponent;