export async function post(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response;
    } catch (error) {
        console.error(error);
        return new Response('An error occurred', { status: 500 });
    }
}

export async function get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        });
        return response;
    } catch (error) {
        console.error(error);
        return new Response('An error occurred', { status: 500 });
    }
}

export function removeToken() {
    localStorage.removeItem('token');
}
