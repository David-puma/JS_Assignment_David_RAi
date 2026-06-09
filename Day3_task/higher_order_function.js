// higher order function: those function which has function as a parameter and/or returns function
//res = (A * B) / (C + D)

let calculateComplex = (A,B,C,D,multiplyFunc, sumFunc)=>{
    return multiplyFunc(A,B)/sumFunc(C,D)   
}

let resultComplex = calculateComplex(
    23,45,12,56,
    (a,b)=>{
        console.log("multiply result: ", a*b)
        return a*b
    },
    (c,d)=> c+d,
)
console.log("complex calculation result: ", resultComplex)