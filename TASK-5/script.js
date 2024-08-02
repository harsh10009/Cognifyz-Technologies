 
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayPosts(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        const postTitle = document.createElement('h2');
        postTitle.innerText = post.title;

        const postBody = document.createElement('p');
        postBody.innerText = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        postsContainer.appendChild(postElement);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayPosts(data);
        })
        .catch(error => console.error('Error fetching data:', error));
});

