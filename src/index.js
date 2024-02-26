/**
 * Enhanced fetch wrapper to support fch('<url>').post({<body>}) usage pattern.
 */

const fch = (url) => ({
    post: async (data) =>
    {
        try {
            const response = await fetch(url, {
                method: 'POST', headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(data),
            });
            return await response.json();
        }
        catch (error) {
            console.error("POST request error:", error);
            throw error;
        }
    }
});

export default fch;
