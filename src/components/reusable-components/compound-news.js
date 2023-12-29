import { Divider } from "@mui/material";
import styled from "styled-components";
import GeneralNews from "./general-news";

let NewsWrapper = styled.div`
    display : flex;
    gap : 10px;
    justify-content : space-between;
    padding : 10px;
    // width : 60%;
`
let HighlightWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-around;
    width : 50%;
`
let HighlightImage = styled.img`
    width  : 100%;
`
let HighlightAgency = styled.span `
    font-size : 12px;
`
let HighlightTitile = styled.p`
    font-size : 17px; 
`
let HighlightCredit = styled.span`
    font-size : 11px;
`
let GeneralNewsWrapper = styled.div`
    display : flex;
    flex-direction : column;
    gap : 5px;
    justify-content : space-between;
    padding : 10px;
    width : 50%;
`

let CompoundNews = ({data,isPic})=>{
    return(
       <>
        {data && <NewsWrapper>
            <HighlightWrapper>
                <HighlightImage src={data[0].urlToImage} />
                <HighlightAgency>{data[0].source.name}</HighlightAgency>
                <HighlightTitile>{data[0].title}</HighlightTitile>
                <HighlightCredit>{data[0].author}  | {new Date().getHours(data[0].publishedAt)} Hours Ago</HighlightCredit>
            </HighlightWrapper>
            <GeneralNewsWrapper>
                {data.slice(1).map((item,index)=>{
                    return(
                        <GeneralNews data={item}></GeneralNews>
                    )
                })}
            </GeneralNewsWrapper>
        </NewsWrapper>}
       </>
    )
}
export default CompoundNews;