import axios from "axios";

async function getLightCones () {
    try {
        const response = await axios.get('http://localhost:3000/light-cones')
        return await response.data
    } catch (e) {
        console.error(e.message)
    }
}

export {getLightCones}