const user = {
    "name": ["ABC", "DEF", "GHI"],
    "age": 19,
    "course": ["FSD-1","Python","Java"],
    "address":["T1","T2",{"T3" : "Give agian"}]
}

console.log(user.address[2]["T3"]) 
console.log(user.address[2])

/* Give agian
{ T3: 'Give agian' }  */    