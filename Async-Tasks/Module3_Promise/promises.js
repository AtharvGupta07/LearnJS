const promiseOne = new Promise(function (resolve, reject){
    //do an aync task:
    //db calls, crptography, n/w calls
    //settimeOut
    setTimeout(()=>{
        console.log('Aync task 1 is complete');
        resolve();
    },1000);
});

promiseOne.then(()=>{
    console.log('PromiseOne Consumed');
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task 2 is complete');
        resolve();
    },1000)
}).then(()=>{
    console.log('PromiseTwo Consumed.');
})


const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Atharv', email: 'atharvgupta098@gmail.com'});
    }, 1000)    
}).then((data)=>{
    console.log(data);
})

const promiseFour = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username: 'Atharv', email: 'atharvgupta098@gmail.com'})            
        }
        reject('Error Found');
        
    }, 1000);
})
.then((data)=>{
    return data.username;
})
.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log(data);
})
.finally(()=>{
    console.log('PromiseFour is either resolved or rejected.'); 
});

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: 'Javascript', password: '123'})            
        }
        reject('Error Found');
    },1000);
});

async function consumePromiseFive() {
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}
consumePromiseFive();

const url = 'https://api.github.com/users';
// async function getAllUsers(){
//   try{
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   }
//   catch(error){
//     console.log('Failed to fetch data from Git');
//   }
// }
// getAllUsers();

// const getGitData = new Promise(function(resolve,reject){
//     const response = await fetch(url);
//     const data = await response.json();
//     if(data){
//         resolve(data);
//     }else{
//         reject();
//     }
// }).then((data)=>{
//     console.log(data);
// }).catch(()=>{
//     console.log('Failed to fetch data from Git');
// }).finally(()=>{
//     console.log('Promise->getGitData is completed');
// })

fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    // let str = "";
    // for(let i = 0; i < data.length; i++){
    //     if(i == data.length-1){
    //         str += data[i].login;
    //     }else{
    //         str += data[i].login + ', ';
    //     }
    // }
    console.log(`Users: [ ${data.map(users => users.login).join(', ')} ]`);
}).catch(()=>{
    console.log('Failed to fetch data from Git');
})
.finally(()=>{
    console.log('Promise->getGitData is completed');
})