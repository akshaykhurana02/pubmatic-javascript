// Running multiple promises together

const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved");
    }, 1000);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved");
    }, 990);
});

const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 Resolved");
    }, 970);
});


// Running 1 after the other

// const callingMultiplePromises1AfterTheOther = async () => {
//     const initialTime = new Date();

//     const responseFromPromise1 = await promise1();
//     console.log(`Response 1 : ${responseFromPromise1}`);

//     const responseFromPromise2 = await promise2();
//     console.log(`Response 2 : ${responseFromPromise2}`);

//     const responseFromPromise3 = await promise3();
//     console.log(`Response 3 : ${responseFromPromise3}`);

//     const completionTime = new Date();

//     console.log(`Total time taken ${completionTime - initialTime}`);
// }

// callingMultiplePromises1AfterTheOther();

// Running Concurrenlty

const callingMultiplePromisesConcurrently = async () => {
    const initialTime = new Date();

    const combinedResponse = await Promise.race([promise1(), promise2(), promise3()]);
    console.log("We are progressing within the function!");

    // console.log(`Combined Response : ${combinedResponse}`);
    console.log(combinedResponse);

    const completionTime = new Date();

    console.log(`Total time taken ${completionTime - initialTime}`);
}

callingMultiplePromisesConcurrently();
