import axios from 'axios';

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getSecretWord = async (setSecretWord) => {
    const response = await axios.get('http://localhost:3030');
    await timeout(1000);
    console.log('secret word is', response.data);
    setSecretWord(response.data);
}

export default {
    getSecretWord
}