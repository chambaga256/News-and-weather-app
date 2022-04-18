import httpServices from "./httpServices";

export function getNews(){
 const apiEndpoint = 'https://api.newscatcherapi.com/v2/search?q=uganda'

 return httpServices.get(apiEndpoint,{
     headers:{
         'x-api-key':'3nD3S7HL51h9YtlZbjTQWMQ8Ki-pX1vR9ch5myODRTU'
     }
 });
}