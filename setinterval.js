setInterval(()=>{
    console.log("hello")
}, 3000) // stays alive cause its a function
        // of setInterval
//This runs first tho, cause the above func is async asyncronous 
console.log("i'm first bitch") 