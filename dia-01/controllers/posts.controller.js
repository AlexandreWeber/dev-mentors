import service from '../services/posts.service.js';

class PostsController {

    postsContainer = undefined;

    constructor () {
        this.postsContainer = document.querySelector("#posts");
        this.intialize();
    }

    addPosts = (posts) => {
        posts.forEach((post) => {
            const postElements = this.createPostElements(post);
            this.postsContainer.innerHTML += postElements;
        });
    };
    
    createPostElements = ({ title, content }) => {
        const post = `
            <div class="post">
                <div class="post-title">
                    ${title}
                </div>
                <div class="post-content">
                    ${content}
                </div>
            </div>
        `;

        return post;
    };

    getPosts() {
        return new Promise(async (resolve) => {
            const posts = await service.query();
            resolve(posts);
        })
    }

    async intialize() {
        const posts = await this.getPosts();
        this.addPosts(posts);
    }
}

export default new PostsController();