class Posts {
    fetchPosts = () => {
        return new Promise(resolve => {
            fetch('http://172.17.1.15:8080/article/recent')
            .then((posts) => {
                return posts.json();
            })
            .then(data => resolve(data));
        });
    }
}

export default new Posts();