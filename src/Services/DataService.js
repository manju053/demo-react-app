import axios from 'axios'

const fetchPosts = async () => {
    const GET_URI = "https://twinesocial.p.rapidapi.com/v1/content?campaign=louboutin";
    const HEADER = {
        "headers": {
            "x-rapidapi-host": "twinesocial.p.rapidapi.com",
            "x-rapidapi-key": "d1d78dd580mshfc95a06bc76ca4dp1a2d47jsn06766d1bec61"
        }
    }
    const result = await axios.get(GET_URI, HEADER)
    return result
}

export { fetchPosts }