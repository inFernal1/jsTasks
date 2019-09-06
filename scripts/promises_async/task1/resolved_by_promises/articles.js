import * as serverApi from './db';

function all(){
    return new Promise(function(resolve,reject) {
        serverApi.all((response) => {
        let info = JSON.parse(response);

        if(info.code === 200){
            resolve(info.data);
        }
        else{
            reject(info.status);
        }
        
    });
})
}

function one(id){
    return new Promise(function(resolve,reject) {
    serverApi.get(id, (response) => {
        let info = JSON.parse(response);
        if(info.code === 200){
            resolve(info.data);
        }
        else{
            reject(info.status);
        }
    });
})
}

function remove(id){
    return new Promise(function(resolve,reject) {
    serverApi.remove(id, (response) => {
        let info = JSON.parse(response);

        if(info.code === 200){
            resolve(info.data);
        }
        else{
            reject(info.status);
        }
    });
})
}

export {all, one, remove};