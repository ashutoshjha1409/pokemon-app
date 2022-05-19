export const pageDetails = {
    defaultUrl: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    defaultLimit: 20,
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

export  const availableLimits = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 50, label: '50' }
  ]