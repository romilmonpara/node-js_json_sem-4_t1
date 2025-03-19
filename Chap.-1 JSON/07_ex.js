{/* Hii! We are Students of semester 4 of IT Students */}

const a = {
    "A" : "LJU",
    "B" : ["CSE","IT","CE"],
    "C" : [{
        "D" : "Hii",
        "E" : ['are',4,{"F":["semester", "We"]}]
    }],
    "G" : {
        "H":"Students",
        "I" : ["of","!"]
    },
    "J":[{"K":"Python", "L":"branch"},"FSD-2"]
}

console.log(a.C[0]["D"] + a.G["I"][1] + " " + a.C[0]["E"][2]["F"][1] + " " + a.C[0]["E"][0] + " " +
a.G["H"] + " " + a.G["I"][0] +" "+ a.C[0]["E"][2]["F"][0] +" "+ a.C[0]["E"][1] +" "+ a.G["I"][0] +" "+
a.B[1] +" "+ a.G["H"])
