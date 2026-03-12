var a= {
    "name":"abc",
    "age":27,
    "isPass":false,
    "address":{"city":"Ahmedabad","zip":380013},
    "subject":["fsd","fcsp","dm"],
    "rank":null
  }
  console.log(a)

  var temp = {
    'a' : [
        {
            "id":1,
            "name":"php",
            "version":"v2.0.1",
            "author":["abc","pqr"]
        },
        {
            "id":2,
            "name":"Java",
            "version":"v2.0.2",
            "author":"J.shepherd"     
        }
    ]
  }

  const sub = {
    "FSD":[{
        "Topic":"Node",
        "Course":"Beginner",
        "Context":["JSON","REM","Module"]
    },
    {
        "Topic":"Express",
        "Course":"Beginner",
        "Context":["abc","Validation","Module"]
    }
    ]
  }
console.log("We have "+temp.a[1].name+" but version is "+temp.a[1].version+" & author is "+temp.a[1].author) 
for (x in sub.FSD){
    for(y in sub.FSD[x]){
        console.log(sub.FSD[x][y])
    }
}

for (x of sub.FSD) {
    console.log(x.Topic)
    console.log(x.Course)
    console.log(x.Context)
}