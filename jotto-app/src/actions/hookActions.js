import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
    const response = await axios.get('http://localhost:3030');
    console.log('secret word is', response.data);
    setSecretWord(response.data);
}

export default {
    getSecretWord
}