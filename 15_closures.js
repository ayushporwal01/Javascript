//Lexical Scope - The ability of a func scope/ block scope to access variables from its parent scope.

const a = 20
{
    const a = 100
    {
        const a = 200
        console.log(a) //200
    }
    console.log(a) //100
}
console.log(a) //20


//Closure - A function along with its lexical scope forms a closure.


