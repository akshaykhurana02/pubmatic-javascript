// Promise Chaining

let mainPromise = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve("Hello World 2");
    } else {
        reject("Main Promise : Error Occured");
    }
});

mainPromise
    .then(
        new Promise((resolve, reject) => {
            let error = false;
            if (!error) {
                resolve("Hello World 1");
            } else {
                reject("Inner Promise : Error Occured");
            }
        }).then((result1) => {
            console.log(result1);
        })
    )
    .then((result2) => {
        console.log(result2);
    }).catch((error) => {
        console.log(error);
    });