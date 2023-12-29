
import styled from "styled-components";

let NewsWrapper = styled.div`
    display : flex;
    gap : 5px;
    justify-content : space-between;
    padding : 10px;
`
let AgencyIcon = styled.span`
    font-size : 11px;
`
let HeadlineWrapper = styled.div`
    display : flex;
    justify-content : space-around;
    flex-direction : column;
    gap : 5px;
`

let HeadLine = styled.p`
    font-size : 14px;
    font-weight : 500;
`
let HeadLineImage = styled.img`
    width : 100px;
    height :100px;
    object-fit : cover;
`
let Credits = styled.p`
    font-size : 11px;
`

let GeneralNews = function ({data}){
    return(
        <>
            {data && (
                <>
                <NewsWrapper onClick={e=>window.open(data.url,'_blank')}>
                    <HeadlineWrapper>
                    <AgencyIcon>{data.source.name}</AgencyIcon>
                    <HeadLine>{data.title}</HeadLine>
                    <Credits>{data.author}  | {new Date().getHours(data.publishedAt)} Hours Ago</Credits>
                    </HeadlineWrapper>
                    <HeadLineImage src={data.urlToImage}/>
                </NewsWrapper>
                </>
            )}
        </>
    )
}

export default GeneralNews;