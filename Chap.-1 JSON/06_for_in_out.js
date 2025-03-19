const sub = {
    "FSD":[
        {
            "Topic":"HTML",
            "Course":"Begginer",
            "Content":["tags","tabel","form"]
        },
        {
            "Topic":"CSS",
            "Course":"Begginer",
            "Content":["tags","tabel","form"]
        }
    ]
}

// for in loop => accesing through index.
console.log("====For in loop====")
for(x in sub.FSD){
    for(y in sub.FSD[x]){
        console.log(sub.FSD[x][y]);
    }
}

// for of loop => direct access of value.
console.log("====For of loop====")
for(x1 of sub.FSD){
    console.log(x1.Topic);
    console.log(x1.Course);
    console.log(x1.Content);
}

{/* ====For in loop====
HTML
Begginer
[ 'tags', 'tabel', 'form' ]
CSS
Begginer
[ 'tags', 'tabel', 'form' ]
====For of loop====
HTML
Begginer
[ 'tags', 'tabel', 'form' ]
CSS
Begginer
[ 'tags', 'tabel', 'form' ] */}