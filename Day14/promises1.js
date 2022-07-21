const posts = [
    { title: "First Post", description: "This is post one!" },
    { title: "Second Post", description: "This is post two!" }
];

function printPosts() {
    setTimeout(() => {
        let toBePrinted = "";
        posts.forEach((post) => {
            toBePrinted += `<li>${post.title}</li>`;
        });
        document.body.innerHTML += toBePrinted;
    }, 0);
}

function createNewPost(post) {
    const promise1 = new Promise(function (resolve, reject) {
        setTimeout(() => {
            posts.push(post);
            const isError = false;
            if (!isError) {
                resolve(); // Operation is successfull and no errors are there
            } else {
                reject();
            }
        }, 1000);
    });
    return promise1;
}

createNewPost({ title: "Third Post", description: "This is post three!" }).then(printPosts);