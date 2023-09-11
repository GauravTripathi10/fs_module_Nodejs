// In This we will learn about the fs module and its properties:
// require('fs') is use for the fs module-> it gives all  properties which are available in fs 
const { error } = require('console');
var fileSystem = require('fs');

// console.log(fileSystem);

// if We want to read the file
 fileSystem.readFile("readfile.js","utf-8",(error,data)=>{
    if(error){
        // if found any error
        console.log(error);
    }
    else{
        // otherwise print all data present in the file
        console.log(data);
    }
});

// if we want to write something in the file  or create a new file

fileSystem.writeFile("readfile.js",'console.log("Na kar stride")',(error)=>{
if(error){
    console.log("Hui Error:");
}
else{
    console.log("Likh Diya jo Likhna Tha ");
}
});
// It erase all the previous data from the file and write new data into file:
fileSystem.appendFile('./newinfo.js','console.log("This is all about the new info")',(error)=>{
if(error){
    console.log(error);
}
else{
    console.log("Likh Diya jo Likhna Tha phir se samjhe bete");
}
});




// if we want to make a floder

fileSystem.mkdirSync("jsfiles");
