import controller from './controllers/posts.controller.js';

(async () => {
    const posts = await controller.getPosts();

    posts.forEach(post => {
        controller.addPost(post);
    });
})();


