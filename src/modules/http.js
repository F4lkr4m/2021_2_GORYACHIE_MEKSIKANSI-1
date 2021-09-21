window.serverAddress = "http://127.0.0.1:5000";

/**
 * Getting object data with info to fetch
 *
 * @param {{method: string, body: object, type: string}} params
 * @returns {Object}
 *
 */
function getData ({
    method = 'GET',
    body = null,
    type = 'application/json'
                  } = {}) {
     const data = {
         mode: 'cors',
         credentials: 'include',
         method,
         headers: {
             'Access-Control-Allow-Origin': '*'
         }
     };

     if (type === 'application/json') {
         data.headers['Content-Type'] = type
     }

     if (method !== 'GET') {
         data.body = body;
     }

     return data;
}

/**
 * Fetching server
 *
 * @param {{url: string, method: string, body: object, type: string}} params
 * @returns {Object}
 *
 */
async function makeFetch({
                       url = '/',
                       method = 'GET',
                       body = null,
                       type = 'application/json',
                   } = {}) {
    const response = await fetch(window.serverAddress + url, getData({method, body, type}));
    const responseJSON = await response.json();

    return {
        status: responseJSON.code,
        parsedJSON: responseJSON,
    };
}

export default class Http {

    /**
     * ajaxGet request
     *
     * @param {{url: string}} params
     * @returns {Object}
     *
     */
    async ajaxGet({
                             url = '/'
                         } = {}) {
        return await makeFetch({url: url, method: 'GET'});
    }


    /**
     * ajaxPost request
     *
     * @param {{url: string, body: object}} params
     * @returns {Object}
     *
     */
    async ajaxPost ({
        url = '/',
        body = null,
                    } = {}) {
        return await makeFetch({url: url, method: 'POST',body: body});
    }
}
