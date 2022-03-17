import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
1)
function sumArray(array,entero){
    for(let i=0;i<(array.length)-1;i++){
      let combinedValue=array[i]+array[i+1]

      if(combinedValue===entero){
        console.log("numero combinado")
        return true
      }    
  }
  console.log("numero no combinado")
  return false
}

2)

3)
function sumMultArray(array){
    var sumTotal=0
    for(let i=0;i<array.length;i++){
       if(Array.isArray(array[i])){
        sumTotal=sumTotal+sumMultArray(array[i])
       }else{
        sumTotal=sumTotal+array[i]
       }
    }
    return sumTotal
  }
*/