export const BASE_URL = 'https://exuberant-lamb-long-underwear.cyclic.app';

export const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const shortDateTime = (date) => {
    let dateObject = new Date(date);
    return dateObject.toLocaleDateString('en-US');
}

export const shortLocalTime = (date) => {
    let dateObj = new Date(date);
    return dateObj.toLocaleTimeString("en-US");
}

export const fullYear = (date) => {
    let dateObj = new Date(date);
    return dateObj.getFullYear();
}

export const toYearAndMonth = (date) => {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  return `${months[month]}., ${year}.`;
}

export const setHeaders = (headers) => {
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', BASE_URL);
    headers.append('Access-Control-Allow-Credentials', 'true');
    return headers
}

export const toEmailLink = (address) => {
    return `mailto:${address}`
  }

  export const toPhoneLink = (phone) => {
    return `tel:${phone}`
  }

export const gradCapIconStyles = {
    height: '4.5rem',
    width: '4.5rem',
    lineHeight: '4.5rem',
    fontSize: '1.7rem',
    borderRadius: '50%',
    background: 'crimson',
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    top:'0',
    left: '-2.5rem'
  }

  export const smIconStyles = {
    fontSize: '3rem',
    color: 'crimson',
    paddingTop: '.5rem'
  }

 export const btnStyles = {
    background: 'crimson',
    padding: '1rem 2rem',
    border: 'none',
    outline: 'none',
    fontSize: '1.7rem'
  }