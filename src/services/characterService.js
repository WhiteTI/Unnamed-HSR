import axios from "axios";

async function getCharacters() {
    try {
        const response = await axios.get('http://localhost:3003/characters')
        return await response.data;
    } catch (e) {
        console.log(e.message)
    }
}

async function getCharacter(id) {
    try {
        const response = await axios.get('http://localhost:3003/characters/' + id)
        return await response.data;
    } catch (e) {
        console.log(e.message)
    }
}

export {
    getCharacters,
    getCharacter,
}