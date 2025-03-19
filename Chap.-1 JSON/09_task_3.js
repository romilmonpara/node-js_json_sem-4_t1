{/* Write a function named "firstlast" that takes an array & returns an object with below conditions
    1. The first element of an array must be object'key
    2. The last element of an array must be Key's value */}

a = ['abc', 'def', 'pqr', 'xyz']

function firstlast(a) {
    if (a.length === 0) {
        return {};
    }
    return { [a[0]]: a[a.length - 1] };
}

console.log(firstlast(a))
{/* { abc: 'xyz' } */}

{/* Multipal : */}