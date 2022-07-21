function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('Calling 1st Promise');
    const result1 = await resolveAfter2Seconds();
    console.log("Waiting for the operation 1 to get fulfilled");
    console.log(result1);

    console.log('Calling 2nd Promise');
    const result2 = await resolveAfter2Seconds();
    console.log("Waiting for the operation 2 to get fulfilled");
    console.log(result2);
}

// asyncCall();


/*

    Flipkart Application -> Trys to Login -> Calling API to authenticate his request (1st Promise)

    const authenticateUser = await authenticatingUser({email: "", password: ""});

    authenticateUser = {
        isAuthenticated: true;
        userId: 23456;
    }

    Once 1st Promise is resolved -> Another API Instantly -> getOrderHistory() (2nd Promise)

    getOrderHistory(authenticateUser.userId);



*/

function fetchUserDetails() {
    return new Promise((resolve, reject) => {
        let flag = false;
        setTimeout(() => {
            flag && resolve("User is Authenticated");
            !flag && reject("Promise is rejected!");
        }, 0);
    })
}

const authenticateUser = async () => {
    try {
        const userDetails = await fetchUserDetails();
        console.log(userDetails);
    } catch(e) {
        console.log(`${e}`);
    }
}

authenticateUser();