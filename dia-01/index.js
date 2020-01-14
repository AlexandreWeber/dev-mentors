import postService from './posts.service.js';

const postsContainer = document.querySelector("#posts");
            
const makePost = ({title, content}) => {
    let post = `
        <div class="post">
            <div class="post-title">
                ${title}
            </div>
            <div class="post-content">
                ${content}
            </div>
        </div>
    `; 
    
    postsContainer.innerHTML += post;
}

async function getPosts() {
    const posts = await postService.fetchPosts();

    posts.forEach(post => {
        makePost(post);
    });
}

getPosts();