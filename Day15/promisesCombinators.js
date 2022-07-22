// Promise Combinators

const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 1 Rejected");
    }, 1000);
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 Rejected");
    }, 950);
});

const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 Resolved");
    }, 1100);
});


// Promise.all -> short-circuits when an input value is rejected

const promiseAll = async () => {
    const initialTime = new Date();

    try {
        const combinedResponse = await Promise.all([promise1(), promise2(), promise3()]);
        console.log("Promise.all Resolved");
        console.log(combinedResponse);
    } catch (e) {
        console.log("Promise.all Rejected");
        console.log(e);
    }

    const completionTime = new Date();
    console.log(`Total time taken ${completionTime - initialTime} \n\n`);
}

// promiseAll();


// Promise.race -> short-circuits when an input value is settled (rejected/fulfilled)

const promiseRace = async () => {
    const initialTime = new Date();

    try {
        const combinedResponse = await Promise.race([promise1(), promise2(), promise3()]);
        console.log("Promise.race Resolved");
        console.log(combinedResponse);
    } catch (e) {
        console.log("Promise.race Rejected");
        console.log(e);
    }

    const completionTime = new Date();
    console.log(`Total time taken ${completionTime - initialTime} \n\n`);
}

// promiseRace();



// Promise.any -> short-circuits when an input value is fulfilled

const promiseAny = async () => {
    const initialTime = new Date();

    try {
        const combinedResponse = await Promise.any([promise1(), promise2(), promise3()]);
        console.log("Promise.any Resolved");
        console.log(combinedResponse);
    } catch (e) {
        console.log("Promise.any Rejected");
        console.log(e);
    }

    const completionTime = new Date();
    console.log(`Total time taken ${completionTime - initialTime} \n\n`);
}

// promiseAny();


/*

Promise.any is equivalent of => if condition with OR.  -> if (p1 || p2 || p3)
Promise.all is equivalent of => if condition with AND. -> if (p1 && p2 && p3)
Promise.all is equivalent of => if condition with AND. -> if (min(p1 || p2 || p3))

*/


// Promise.allSettled -> does not short-circuit

const promiseAllSettled = async () => {
    const initialTime = new Date();

    try {
        const combinedResponse = await Promise.allSettled([promise1(), promise2(), promise3()]);
        console.log("Promise.allSettled Resolved");
        console.log(combinedResponse);
    } catch (e) {
        console.log("Promise.allSettled Rejected");
        console.log(e);
    }

    const completionTime = new Date();
    console.log(`Total time taken ${completionTime - initialTime} \n\n`);
}

promiseAllSettled();