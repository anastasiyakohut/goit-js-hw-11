const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43997901-59e2ef8a5969ad3162d77619c';

export const searchPhotos = (query) => {
    const searchParams = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${searchParams}`).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    });
}