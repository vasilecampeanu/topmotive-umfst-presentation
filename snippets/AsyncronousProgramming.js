// A function that returns a promise which resolves after a specified time
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// An async function to demonstrate asynchronous processing
async function asyncOperation() {
    console.log('Async operation starts');

    // 'await' pauses the function execution until the promise is resolved
    await timeout(2000); // Waits for 2 seconds

    console.log('Async operation completes after 2 seconds');
}

// Calling the async function
asyncOperation();
