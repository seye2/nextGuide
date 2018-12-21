const fetch = require('isomorphic-fetch');
/*
export const objectToQueryString = (data) => {
    return '?'+Object.entries(data).map((entry: Array<any>)=>{
        if(Array.isArray(entry[1])) {
            return `${entry[0]}=[${entry[1].join(',')}]`;
        } else if(entry[1]===null || entry[1]===undefined) {
            return null;
        } else {
            return `${entry[0]}=${encodeURIComponent(entry[1])}`
        }
    }).join('&').replace(/&+/g, '&');
}

export class API {
    public static getApi(){
        return fetch(`url`).then(res => {
            if(!res.ok) throw Error(res.statusText)
            return res.json()
        });
    }

*/

export class API {
    public static getApi() {
        return fetch(`${apiUrl}/kr`).then(res => {
            if (!res.ok) throw Error(res.statusText)
            return res.json()
        });
    }
}
