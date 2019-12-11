class EasyHTTP {
//HTTP GET request
    async get(url) {
        const response = await fetch(url);
        return await response.json();
    }

    //HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            header: {
                'Content -type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    };

//HTTP PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            header: {
                'Content -type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    }

//HTTP DELETE request
    async delete(url) {
        await fetch(url, {
            method: 'DELETE',
            header: {
                'Content -type': 'application/json'
            },
        });
        return await 'Resource Deleted...';
    }
}

export const http = new EasyHTTP();
