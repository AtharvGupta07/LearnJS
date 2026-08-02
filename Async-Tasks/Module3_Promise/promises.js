const promiseOne = new Promise(function (resolve, reject){
    //do an aync task:
    //db calls, crptography, n/w calls
    //settimeOut
    setTimeout(()=>{
        console.log('Aync task is complete');
    },1000);
});