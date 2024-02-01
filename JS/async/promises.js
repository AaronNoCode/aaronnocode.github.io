// * Promises

/* The case of the taco truck and dinner in home
   You are with your friend and want to eat tacos, so you ask your friend
   to go for tacos to dinner, but both of you aren't sure that the taco truck is even open, 
   so you tell your friend to call you if the truck is indeed there, if not, 
   you are going to prepare something else since there will be less food */

/* Friend = Promise
   You prepare something in the meantime while friend is checking tacos = async operation (fetchTacos) 
   Your friend calls you and says whether or not there are tacos = Promise return value
   Can get tacos = Promise fulfilled
   Cannot get tacos = Promise rejected
   Set up table = Success callback
   Prepare something else = Failure callback */

/* What this all means is that you are sending a request to a foreign entity 
   and are awaiting for the response, having a consequence for each case if the 
   request is successful or failed */

// A Promise is an object and has three states: pending (initial), fulfilled and rejected
// Why? These help us dealing with async easier than callbacks

// Create a promise
const promise = new Promise()

// How to fulfill or reject
// The promise constructor recieves two arguments by default (resolve and rejects [both are functions])  
const myPromise = new Promise((resolve, reject) => {
   resolve() // Changes the state of the promise to FULFILLED
})
const myOtherPromise = new Promise((resolve, reject) => {
   reject() // Changes the state of the promise to REJECTED
})

// This are typically called after an async operations
const testProm = new Promise((resolve, reject) => {
   setTimeout(() => {
      // Food truck found
      // Argument in resolve function is automatically passed to the callback of then() 
      resolve('Omw with the tacos') // Change status to FULFILLED   
   }, 5000)
})

const otherTestProm = new Promise((resolve, reject) => {
   setTimeout(() => {
      // Food truck not found
      // Argument in reject function is automatically passed to the callback of catch() 
      reject("The truck wasn't there") // Change status to REJECTED   
   }, 5000)
})

// Callback functions for fulfillment and rejection case 
const onFulfillment = (result) => {
   console.log(result)
   // Resolve() was called
   console.log('Set up table')
}

const onRejection = (err) => {
   console.log(err)
   // Reject() was called
   console.log('Cook something else')
}

// When the resolve and rejection functions are called, then() and catch() are triggered respectively
testProm.then(onFulfillment)
otherTestProm.catch(onRejection)
// With the above approach catch() will also catch errors inside the then() function, so its usage is recommended

/* You could do this too, but in this case catch() 
   will only handle errors from the promise and not the ones that come from then() */
testProm.then(onFulfillment, onRejection)

// * Chaining promises
// then() and catch() return promises, that means that they can be chained
const prom = new Promise((resolve, reject) => {
   resolve('5000')
})
prom.then(onFulfillment).catch(onRejection)

// Fetch consecutively 
const pinky = fetchUser('api/user')
pinky
   .then(result => fetchUserName('api/user/name'))
   .then(result => fetchUserAge('api/user/name'))
   .then(result => fetchUserGender('api/user/name'))
   .then(result => fetchUserPreferences('api/user/name'))
   .then(result => console.log(`User data: ${result}`))

// * Static methods of promises

// * Promise.all()
// When querying multiple API's and waiting for all of them to be finished before doing something

const promise1 = Promise.resolve('500')
const promise2 = 54
const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, 'foo')
})
// Every Promise resolution is used after every single one is finished
Promise.all([promise1, promise2, promise3]).then((values) => {
   console.log(values)
})

/* -Promise.all() recieves an iterable of promises and returns a single 
    promise that resolves to an array of the results of all promises introduced
   -The returned promise will resolve when all the input's promises have resolved 
   -If any promise throws an error, the whole promise rejects and throws the first rejection/error message */

// * Promise.allSettled()
// Like all() but doesn't care if one of the promises rejects

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
   console.log(values)
})

// * Promise.race()
// Returns a promise that fulfill or reject as soon as one of the 
// listed promises fulfills or rejects, with its respective value

const racer1 = new Promise((resolve, reject) => {
   setTimeout(resolve, 500, 'foo')
})

const racer2 = new Promise((resolve, reject) => {
   setTimeout(resolve, 100, 'fun')
})

/* Here racer2 output will be displayed as it resolution 
   is faster than racer1, even tough both promises resolve */
Promise.race([racer1, racer2]).then((value) => {
   console.log(value)
})
