import axios from "axios"


class RestClint  {
    static GetRequest=(getUrl)=>{
        return axios.get(getUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        })
    }
    static PostRequest=(postUrl,postjson)=>{
        let config={
            headers:{
                'Content-Type':'application/x-www-form-urlencoded',
            }
        }
        return axios.post(postUrl,postjson,config).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        })
      
    }
 
}

export default RestClint
