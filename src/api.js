import axio from 'axio';


const searchImages = async ( term )=>{


    const response = await axios.get("https://api.unsplash.com/search/photos",{
        headers:{
            Authorization:"Client-ID TU-API-KEY"
        },
        params:{
            query:term
        }
    })

    console.log(response.data.results);


    return response.data.results;

}

function App() {

    const handleSubmit = (term) =>{
        console.log("Hagamos una busqueda de ", term)
    }
    return (
        <div>
            <SearchBar enSubmit={handleSubmit}/>
        </div>
    )
}

export default searchImages;