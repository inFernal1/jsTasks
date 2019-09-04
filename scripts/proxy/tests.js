import {watchObj} from './proxy'

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val){
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
cleverDiv.style.color = 'red';
cleverDiv.querySelector('em').style.color = 'green';