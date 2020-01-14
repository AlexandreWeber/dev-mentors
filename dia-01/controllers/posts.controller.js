import service from '../services/posts.service.js';

class PostController {
    
    postsContainer = undefined;

    constructor () {
        this.postsContainer = document.querySelector("#posts");
    }

    createPostElements = ({title, content}) => {
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

    addPost = (post) => {
        const postElements = this.createPostElements(post);

        this.postsContainer.innerHTML += postElements;
    };

    getPosts() {
        return new Promise(async (resolve) => {
            const posts = await service.query();
            resolve(posts);
        });
    }
}

export default new PostController();