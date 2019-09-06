import * as serverApi from './db';
import { PassThrough } from 'stream';
import { EOVERFLOW } from 'constants';

async function all(){
       let response = await serverApi.all()
        return parseResponse(response)
}

async function one(id){
  let response = await serverApi.get(id) 
    return parseResponse(response)
}

async function remove(id){
    let response = await serverApi.remove(id)
        return parseResponse(response)
}

export {all, one, remove};

let parseResponse = (response) => {
    try {
    let info = JSON.parse(response);
    if(info.code !== 200) throw new Error('bad status')
    return info.data
    }
    catch(e) {
        throw new Error('incorrect answer from server')
    }
}