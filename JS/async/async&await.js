// * Async & Await

/* Meant to be an improvement of promises, writing synchronous 
   code looking code and performing async under the hood */

// * Async
// To declare async functions, always return promises 
// If you dont declare specifically a promise, the function will wrap the value in a resolved promise

function lessFun() {
    return 'not so hello'
}
console.log(lessFun()) // Logs: 'not so hello'

async function fun() {
    return 'hello'
}
console.log(fun()) // Logs: Promise { 'hello' }


// A more accurate way to do this
async function hellaFun() {
    // Return a promise fulfilled and then() catches its value
    return Promise.resolve('omg hiii')
}
// Here then() manage the returned value and logs it
hellaFun().then((value) => console.log(value)) // Logs: omg hiii


// * Await
// Can be put in front of any async promise based function and pause the code until that promise is attended
// Await only works inside async functions

async function myAsync() {
    // Promise that resolves in one second     
    let fun = new Promise((resolve) => {
        setTimeout(resolve, 1000, 'go have fun')
    })
    // Asign the value of the promise resolution to a variable
    // Pauses the code till the promise is resolved 
    let result = await fun
    // Logs result
    console.log(result)
}

myAsync()

// This chaining can be replaced 
const pinky = fetchUser('api/user')
pinky
    .then(result => fetchUserName('api/user/name'))
    .then(result => fetchUserAge('api/user/name'))
    .then(result => fetchUserGender('api/user/name'))
    .then(result => fetchUserPreferences('api/user/name'))
    .then(result => console.log(`User data: ${result}`))

// Can be rewritten like this
async function fetchData() {
    const user = await fetchUser('api/user')
    const followers = await fetchUserFollowers('api/user/followers')
    const interests = await fetchUserInter('api/user/interests')
    const age = await fetchUserAge('api/user/age')
    const address = await fetchUserAddress('api/user/address')
    console.log('Display', result)
}

// And can catch errors if within a try/catch block 
async function fetchData() {
    try {
        const user = await fetchUser('api/user')
        const followers = await fetchUserFollowers(`api/user/${result.followerId}`)
        const interests = await fetchUserInter(`api/user/${result.interestId}`)
        const age = await fetchUserAge(`api/user/${result.age}`)
        const address = await fetchUserAddress(`api/user/${result.address}`)
        console.log('Display', result)
    } catch (e) {
        console.log('Error', e)
    }
}

// * Secuential, concurrent and parallel

// Function returning a promise that resolves after two seconds
function resolveHello() {
    return new Promise(resolve => {
        setTimeout(function () {
            console.log('Hello')
        }, 2000)
    })
}

// Function returning a promise that resolves after one second
function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('World')
        }, 1000)
    })
}

// * Secuential start
async function sequentialStart() {
    // Each variable awaits for the resolution of the function before going further
    const hello = await resolveHello()
    console.log(hello) // Logs after two seconds

    const world = await resolveWorld()
    console.log(world) // Logs after one second

    // The total time of this function is 2 + 1 = 3 seconds (slow)
    // + Unless the second variable depends on the first variable, you shouldn't do this as it slows down the process 
}
sequentialStart() // Logs 'Hello''World'

// * Concurrent
async function concurrentStart() {
    const hello = resolveHello()
    const world = resolveWorld()
    // Each log will await for the resolution of its variable 
    console.log(await hello) // Logs after 2 seconds

    console.log(await world) // Logs after 2 seconds

    // The total time is 2 seconds as the functions are not delaying each other
    /* 
    + Execute the functions by their own as none is dependent of another 
    + and the await happens only when the values are needed 
     
    ! This is the approach you can have when loading an UI, firing all 
    ! requests and display them as you need them with await in the right order  
    */
}
concurrentStart() // Logs 'Hello''World'

// * Parallel
// Promises can be resolved without waiting for other ones to resolve, so every function is run independently
function parallelStart() {
    Promise.all([
        (async () => console.log(await resolveHello()))(), // Logs after two seconds (independently)
        (async () => console.log(await resolveWorld()))() // Logs after one second (independently)
        // These have additional parenthesis at the end since they're 
        // IIFE (Immediately Invoked Function Expression) so they're called immediately after definition 
    ])
}
parallelStart() // Logs 'World''Hello' as resolveWorld() ends first and can exit the promise first

// If wanted to ensure that the execution is paused at Promise.all(), put async and await respectively
async function parallelStart() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(), // Logs after two seconds (independently)
        (async () => console.log(await resolveWorld()))() // Logs after one second (independently)
        // These have additional parenthesis at the end since they're 
        // IIFE (Immediately Invoked Function Expression) so they're called immediately after definition 
    ])
    console.log('Finally')
}
parallelStart() // Logs 'World''Hello''Finally'

