class PostRequest {
    connection(url) {
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.error('Fetch error: ', err))
    }
}

export default PostRequest;