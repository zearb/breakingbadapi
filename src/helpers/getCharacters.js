const getCharacters = async () => {

    const url = `https://www.breakingbadapi.com/api/characters`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data

}

export default getCharacters;