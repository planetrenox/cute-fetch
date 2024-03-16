const fch = (url) => ({
    POST: async (data) => fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': typeof data === 'object' ? 'application/json' : 'text/plain',
        },
        body: typeof data === 'object' ? JSON.stringify(data) : data,
    }),

    PUT: async (data) => fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': typeof data === 'object' ? 'application/json' : 'text/plain',
        },
        body: typeof data === 'object' ? JSON.stringify(data) : data,
    }),

    SOFTWRITE: async (data) => fetch(url, {
        method: 'SOFTWRITE',
        headers: {
            'Content-Type': typeof data === 'object' ? 'application/json' : 'text/plain',
        },
        body: typeof data === 'object' ? JSON.stringify(data) : data,
    }),

    OVERWRITE: async (data) => fetch(url, {
        method: 'OVERWRITE',
        headers: {
            'Content-Type': typeof data === 'object' ? 'application/json' : 'text/plain',
        },
        body: typeof data === 'object' ? JSON.stringify(data) : data,
    }),

    DELETE: async () => fetch(url, { method: 'DELETE' }),

    GET: async () => fetch(url, { method: 'GET' }),
});

export default fch;
