// Running multiple promises together

const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 1000);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved");
    }, 3000);
});

const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 Resolved");
    }, 5000);
});


/*
    1 after ther other
    1000 + 2 ms
    3000 + 4 ms
    5000 + ms

*/

// Running 1 after the other

const callingMultiplePromises = async () => {
    const initialTime = new Date();

    const responseFromPromise1 = await promise1();
    console.log(`Response 1 : ${responseFromPromise1}`);

    const responseFromPromise2 = await promise2();
    console.log(`Response 2 : ${responseFromPromise2}`);

    const responseFromPromise3 = await promise3();
    console.log(`Response 3 : ${responseFromPromise3}`);

    const completionTime = new Date();

    console.log(`Total time taken ${completionTime - initialTime}`);
}

callingMultiplePromises();


// Running Concurrenlty