import axios from "axios";
import React,{useState, useEffect} from "react";
import GeneralNews from "../reusable-components/general-news";
import styled from "styled-components";
import CompoundNews from "../reusable-components/compound-news";
import { Divider } from "@mui/material";

let HomeWrapper = styled.div`
  width : 1200px;
  margin: 30px auto 0;
  display:flex;
  gap :20px;

`
let CompoundWrapper = styled.div`
  display : flex;
  flex-direction : column;
  width : 70%;
  background-color :#1f1f1f;
  border-radius : 17px;
  padding : 10px;
  height : max-content;
`
let GeneralWrapper = styled.div`
  display : flex;
  flex-direction : column;
  width  : 30%;
`
let TopStories = styled.p`
  color: #8BB8F8;
  font-size : 18px;
  padding : 10px 5px;
`
let SuggestedStories = styled.div`
  margin-bottom : 10px;
  background-color :#1f1f1f;
  border-radius : 17px;
  padding : 10px;
`
let ForYouStories = styled.div`
  margin-bottom : 10px;
  background-color :#1f1f1f;
  border-radius : 17px;
  padding : 10px;
`
const HomeComponent = function (){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=d4fbbe4b540e401ba2d8321fdd557db6',
        headers: { }
      };
    const [data, setData] = useState(null);
    useEffect(()=>{
        axios.request(config)
        .then((response) => {
            let x = response.data.articles.filter(data=>data.urlToImage);
            setData(x);
          })
          .catch((error) => {
            console.log(error);
          });
    },[])

    const size = 4;
    const topStoryLimit = 8;
    const forYouLimit = 12;
    const suggestionLimit = 15;
    const compoundData = [];
    if(data){
      for (let i = 0; i < topStoryLimit; i += size) {
        compoundData.push(data.slice(i, i + size));
      }
    }
    return(
      <HomeWrapper>
        <CompoundWrapper>
          <TopStories>Top Stories</TopStories>
      {compoundData.map((data, index) => {
        return(
          <>
          <Divider sx={{ backgroundColor: '#e3e3e3' }}/> 
          <CompoundNews data={data}></CompoundNews>
        </>
        )
        })}
        </CompoundWrapper>
      {data && <GeneralWrapper>
          <SuggestedStories>
          {data.slice(topStoryLimit,forYouLimit).map((x,key)=>{
            return(<>
              <GeneralNews  key={key} data={x} />
              <Divider sx={{ backgroundColor: '#e3e3e3' }}/>
            </>)
          })}
          </SuggestedStories>
          <ForYouStories>
          {data.slice(forYouLimit,suggestionLimit).map((x,key)=>{
            return(<>
              <GeneralNews  key={key} data={x} />
              <Divider sx={{ backgroundColor: '#e3e3e3' }}/>
            </>)
          })}
          </ForYouStories>
        </GeneralWrapper>}
      </HomeWrapper>
    )

}
export default HomeComponent ;