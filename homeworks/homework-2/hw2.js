/*
Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, 
sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.
*/

const posts = [
    { title: 'Post 1', content: 'This is my first post...'}
];

const listPosts = () => {
    posts.map(post => {
        console.log(`title: ${post.title} ---> content: ${post.content}`);
    });
};
const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject("Bir hata oluştu!!!");
    });
    return promise1;
};

async function showPosts() {
    try{
        await addPost({ title: 'Post 2', content: 'This is my second post...'});
        listPosts();
    } catch ( error ) {
        console.log(error);
    }
}

showPosts();