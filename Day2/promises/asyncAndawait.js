let fetchAllUsers = async()=>{
    //https://jsonplaceholder.typicode.com/users
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json()
        console.log("all user : ", data)
    }catch(e){
        console.log("error in fetching users")
    }finally{
        console.log("After fetching all users")
    }
}
fetchAllUsers()