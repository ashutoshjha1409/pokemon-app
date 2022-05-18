export const pageDetails = {
    defaultUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    defaultLimit: 20,
    availableLimits: [10, 20, 50],
    defaultOffset: 0
}

export const defaultHeader = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    dataType: 'json'
}

export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }