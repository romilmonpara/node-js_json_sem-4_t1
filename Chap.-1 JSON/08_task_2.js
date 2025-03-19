{/* Write a JSON Object which contains array of 3 Objects Each object contains 2 properties a name and a age Now, sort an array values by age in descending order print name & age in terminal as per hte sorted age */}

var people = [
    {
      "name": "Romil",
      "age": 19
    },
    {
      "name": "ABC",
      "age": 25
    },
    {
      "name": "XYZ",
      "age": 35
    }
]
console.log(people.sort((a,b)=>b.age-a.age))
{/* [
    { name: 'XYZ', age: 35 },
    { name: 'ABC', age: 25 },
    { name: 'Romil', age: 19 }
  ] */}

{/* Just print all data */}
for(x in people){
    for(y in people[x]){
        console.log(people[x][y])
    }
}