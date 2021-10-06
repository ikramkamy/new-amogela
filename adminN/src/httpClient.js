const httpClient = (url, options = {}) => {
    if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Expose-Headers', 'Content-Range');
    options.headers.set('Content-Range', 'notes 0-9/9');
    
    return fetchUtils.fetchJson(url, options);
    }
