{/* Write a JS to store an array of objects having height & name Display Heighest height */}

var a = [
    {"name":"abc","height":155},
    {"name":"ww","height":167},
    {"name":"yoo","height":197}
]

a.sort((a,b)=>b.height-a.height)
console.log(a[0].height)
console.log(a[0])

{/* 197
{ name: 'yoo', height: 197 } */}