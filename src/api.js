import axio from 'axio';


const searchImages = ()=>{


    const response = axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID xQ1DziFEZl_V11JMl1yoq7VV8i2T0NIM6YOpDYnzrHY"
        },
        params:{
            query:"Dogs"
        }
    })
console.log(response.date.results);
return response;

}

export default searchImages;