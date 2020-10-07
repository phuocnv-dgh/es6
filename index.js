var fs = require('fs');
//callback - Arrow function
let startWork = (work, callback)=>{
    console.log(`Start to ${work}`);
    callback(work);
}
let finishWork = (working)=>{
    console.log(`Finish ${working} !!!!`);
}
startWork('Reading a book', finishWork);
//callback hell
const getNumber = () =>{
    setTimeout(()=>{
        console.log('this is a get number!!')
        let number = [1,2,3,4,5];
        console.log(number);

        setTimeout((number)=>{
            const people = {
                name : 'Phuoc',
                age: 21
            }
            console.log(`My number is ${number}. My name is ${people.name} and i am ${people.age} years old`);

            setTimeout((name)=>{
                people.gender = 'male';
                console.log(`My number is ${number}. My name is ${people.name} 
                    and i am ${people.age} years old. I am alpha ${people.gender}`);
            },2000);
        },2000,number[2]);
    },2000);
}
getNumber();
//promise
function readFilePromise(path,time){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            fs.readFile(path,{encoding:'utf-8'}, function(err, data){
                if(err){
                    reject(err);
                }
                else
                {
                    resolve(data);
                }
            });
        },time);
        });    
}
//read
readFilePromise('./file1.txt',2000)
    .then((file_1) =>{
        console.log(file_1);
        return readFilePromise('./file2.txt',2000);
    })
    .then((file_2)=>{
        console.log(file_2);
        return readFilePromise('./file3.txt',2000);
    }).then((file_3)=>{
        console.log(file_3);
    })
    .catch((err)=>{
        console.log(err);
    })
//async/ await
const printFile = async ()=>{
    const res = await readFilePromise('./file1.txt',2000);
    console.log(res);
    const res1 = await readFilePromise('./file2.txt',3000);
    console.log(res1);
    const res2 = await readFilePromise('./file3.txt',1000);
    console.log(res2);
}
 printFile();
