let promises = new Promise( //call back function
    (resolve, reject) => {
        let iamSpiderMan = false;
        if(iamSpiderMan){
            resolve("i saved gwen")
        }else{
            reject("No, i didn't")
        }
    }
)

//here inntraditional way of handling promise, callback hell problem occurs
let heSaved = ()=>{
    promises.then(
        (data)=>{
            console.log("success: ",data)
        }
    ).catch(
        (e)=>{
            console.log("Error: ",e)
        }
    ).finally(
        ()=>{
            console.log("Just smile")
        }
    )
}
heSaved()

//call back hell problems solution: async & await, this async & await make code looks like synchronous programming. But actually is asynchronous programming

let gwenWasSaved = async()=>{
    console.log("starting async function")
    try{
        let result = await promises
        console.log("after promise: ", result)
    } catch (e) {
        console.log("error on async/await: ",e)
    }finally{
        console.log("finally called")
    }
}
gwenWasSaved()