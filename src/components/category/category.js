import React,{useEffect,useState} from 'react';
import {useLocation} from 'react-router-dom';
import { searchCategory } from '../../utils/client';
import styled from 'styled-components';
import GeneralNews from '../reusable-components/general-news';
import { Divider } from '@mui/material';
import CompoundNews from '../reusable-components/compound-news';

let CategoryWrapper = styled.div`
  width : 1000px;
  margin : 30px auto 0;
  background-color : #1f1f1f;
  border-radius : 18px;
  padding :20px;
`
let Categories = styled.p`
  color: #8BB8F8;
  font-size : 18px;
  padding : 10px 5px;
`


let CategoryComponent = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    let param = queryParams.get('q');

    let [category,setCategory] = useState([]);
    useEffect(()=>{
        (async function myFn(){
            if(param == "India") param="in";
            if (param == "Global") param = "us";
            if (param == "Local") param = "in"
            let x = await searchCategory(param);
            setCategory(x.articles.filter(data=>data.urlToImage));
        })();
        
    },[param])
    let size = 4;
    const compoundData = [];
    if(category && category !=undefined){
      for (let i = 0; i < category.length; i += size) {
        compoundData.push(category.slice(i, i + size));
      }
    }

    return(
        <CategoryWrapper>
          <Categories>{queryParams.get('q')}</Categories>
          {compoundData.length>1 && (
            <>
              {compoundData.map((data, index) => {
                return (
                  <>
                    <Divider sx={{ backgroundColor: '#e3e3e3' }}/> 
                    <CompoundNews key={index} data={data}></CompoundNews>
                  </>
                );
              })}
            </>
          )}
        </CategoryWrapper>
      );

}
export default CategoryComponent;