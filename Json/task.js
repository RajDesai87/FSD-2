const p = {"name":'abc',"age":30};
let key = "age"
p[key] = 20;
// console.log(p)
// console.log(p)

const a= {
    	"Datastructures":
 	   [
        	{
             	"Name": "tree",
                "course":"Intro",
                "content":["1","B","C"]
        	},
        	{

            	"Name": "tree1",
                "course":"Intro1",
                "content":["1","B","C","d"]
        	}
    	],
    	"xyz":
    	{
            "Name":"Graphics",
            "Topic":["BFS","CDF","Sorting"],
    	}
  	}
// console.log(a['Datastructures'][1].Name+'\n\n'+a['Datastructures'][0].Name+'\n\n'+a['xyz'].Name+'\n\n'+a['xyz']['Topic']+'\n\n'+a['xyz'].Topic[0]+'\n\n'+JSON.stringify(a['Datastructures'][1])+'\n\n'+a['Datastructures'][2]+'\n\n'+JSON.stringify(a['xyz']));

myObj = {

           	"name" : "John",
           	"age" : 30,
           	"cars" : [
                       	{ "name" : "Ford",  "models":[ "Fiesta", "Focus", "Mustang" ] },
                       	{ "name" : "BMW", "models" : [ "320", "X3", "X5" ] },
                       	{ "name" : "Fiat", "models" : [ "500", "Panda" ] }
            ] 
        }
console.log(myObj.name+' has '+myObj['cars'][1].name+'-'+myObj['cars'][1]['models'][1]+' at the age of '+myObj['age'])

function fromListToObject(arr){
    var obj = {}
    for(i in arr){
        obj[arr[i][0]] = arr[i][1]
    }
    return obj
}
ob = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]);
console.log(ob);

function transformFirstAndLast(arr) {
    var obj = {}
    obj[arr[0]] = arr[arr.length-1] 
    return obj
}
console.log(transformFirstAndLast(['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']));

const person =
[
    {
    name: "PQR", age: 38
    },
    {
    name: "ABC", age: 35
    },
    {
    name: "XYZ", age: 47
    }
]
person.sort((a,b)=>b.age-a.age)[0] // Method to sort an object
console.log(person[0]['name']+' '+person[0]['age']);


var test = { 
"division1": {
"name":["Z","B","H"]
},
"division2": {
"name" :["Y","A","G"]
}
}
// test['divison1'].name
test['division1'].name.sort()
test['division2'].name.sort()
console.log(test['division1']);
console.log(test['division2']);