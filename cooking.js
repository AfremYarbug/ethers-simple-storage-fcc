// Synchronous
// 1. Put popcorn in microwave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
//Asynchronous programming allows a program to initiate tasks and move on to other tasks before the first ones are completed
// 1. Put popcorn in microwave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// A promise can be 
// ... in Pending state
// ... Fulfilled state
// ... Rejected   

// Example: Setup Movie Night

// Cook popcorn
// Pour Drinks
// Start Movie

async function setupMovieNight() {
    // Promise to wait unitl popcorn and drink function is fulfilled
    // if a function is async we have access to the await keyword
    await cookPopcorn() // wait until promise based function is fulfilled or rejected
    await pourDrinks()
    startMovie()
}
