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

function rejectPosts() {
    setTimeout(() => {
        let toBePrinted = "";
        posts.forEach((post) => {
            toBePrinted += `<li>${post.description}</li>`;
        });
        document.body.innerHTML += toBePrinted;
    }, 0);
}

function createNewPost(post) {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const isError = false;
            if (!isError) {
                // reject(`(If) Error: Something went wrong!`);
                resolve(); // Operation is successfull and no errors are there
            } else {
                reject();
            }
            //console.log("ABCDEF");
        }, 1000);
    });
    return promise1;
}

createNewPost({ title: "Third Post", description: "This is post three!" });
