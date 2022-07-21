const posts = [
    { title: "First Post", description: "This is post one!" },
    { title: "Second Post", description: "This is post two!" }
];



/*

1st Occurence -> <li>FirstPost</li>
2nd Occurence -> <li>FirstPost</li><li>SecondPost</li>

*/

// Without Callbacks

// createNewPost({ title: "Third Post", description: "This is post three!" });
// printPosts();

// function createNewPost(post) {
//     setTimeout(() => {
//         posts.push(post);
//     }, 1000);
// }


















// With Callbacks

function printPosts() {
    setTimeout(() => {
        let toBePrinted = "";
        posts.forEach((post) => {
            toBePrinted += `<li>${post.title}</li>`;
        });
        document.body.innerHTML += toBePrinted;
    }, 1000);
}

function createNewPost(post, callbackFn) {
    setTimeout(() => {
        posts.push(post);
        callbackFn();
    }, 1000);
}

createNewPost({ title: "Third Post", description: "This is post three!" }, printPosts);
