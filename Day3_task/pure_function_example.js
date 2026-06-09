//pure function : those function which do not have side effect that means external variables doesnot effect the result of the function
const PI = 3.14

//pure function
let calculate = (x,y)=>{
    console.log("sum of x & y: ", x+y)
}


// impure function
let calculateAreaOfCircle = (radius)=>{
    console.log("area of circle is: ",PI * radius * radius)
}

calculate(10,5)
calculateAreaOfCircle(5)