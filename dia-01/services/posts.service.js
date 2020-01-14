class Post {
    query = () => {
        // return new Promise(resolve => {
        //     fetch('http://172.17.1.15:8080/article/recent')
        //     .then((posts) => {
        //         return posts.json();
        //     })
        //     .then(data => resolve(data));
        // });
        const posts = [
            { id: 1, title: 'Post 1', content: 'Texto do Post 1' },
            { id: 2, title: 'Post 2', content: 'Texto do Post 2' },
            { id: 3, title: 'Post 2', content: 'Texto do Post 3' },
        ];

        return new Promise(resolve => resolve(posts));
    }
}

export default new Post();