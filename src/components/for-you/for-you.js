import React from 'react';
import styled from 'styled-components';
import {useState,useEffect} from 'react';
import { curatedData } from '../../utils/client';
import CompoundNews from '../reusable-components/compound-news';

let ForYouWrapper = styled.div`
    width : 1000px;
    background-color : #1f1f1f;
    margin:30px auto 0;
`

function ForYouComponent() {
    let items = ["entertainment","sports","technology"]
    let [data,setData] = useState(null);
    useEffect(()=>{
        const fn = async () => {
            try {
              const ent = await curatedData(items[0]);
              
              let obj = {};
              obj.ent =ent.articles;
              setData(obj)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          fn();
    },[])
    let entertainmentArr =[];
   if(data){
    let size = 4;
      for (let i = 0; i < data.ent.length; i += size) {
        entertainmentArr.push(data.ent.slice(i, i + size));
      }
   }
  return (
    <div>
        {data && <ForYouWrapper>
            {entertainmentArr.map((data,key)=>{
                return <CompoundNews data={data}></CompoundNews>
            })}
        </ForYouWrapper>}      
    </div>
  );
}

export default ForYouComponent;