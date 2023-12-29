import axios from "axios";

export async function searchQuery (data){
    let config = {
        method: 'get',
        url: `https://newsapi.org/v2/everything?q=${data}&apiKey=d4fbbe4b540e401ba2d8321fdd557db6`,
        headers: { }
      };
      
      let result = await axios.request(config)
      return result.data;
}
export async function searchCategory (data){
    let config = {
        method: 'get',
        url: `https://newsapi.org/v2/everything?q=${data.toLowerCase()}&apiKey=d4fbbe4b540e401ba2d8321fdd557db6`,
        headers: { }
      };
      
      let result = await axios.request(config)
      return result.data;
}

export async function curatedData(data){
  let config = {
    method: 'get',
    url: `https://newsapi.org/v2/everything?q=${data.toLowerCase()}&pageSize=12&apiKey=d4fbbe4b540e401ba2d8321fdd557db6`,
  };
  
  let result = await axios.request(config)
  return result.data;
}