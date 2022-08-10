// problem 2: isJavaScriptFile

function isJavaScriptFile (string){
          const stringInput1 = 'app.js';
          const stringInput2 = 'js.png';
          const stringInput3 = 'image.js.png';
          const stringInput4 = 'image.jpg.js';

          // if( string === stringInput1 && string !== stringInput4 ||(string !== stringInput1  && string === stringInput4)){
          //           return true;
          // }
          // else{
          //           return false;
          // }
          if ( string == stringInput.endsWith('.js')){
                    console.log('javascript')
          }
          else {
                    console.log('not javascript')
          }
          /* console.log(stringInput1.endsWith('.js'))
          console.log(stringInput2.endsWith('.js'))
          console.log(stringInput3.endsWith('.js'))
          console.log(stringInput4.endsWith('.js'))  */
          return stringInput;

}
 const stringInput = isJavaScriptFile('app.js');
console.log(stringInput) 
/* console.log(isJavaScriptFile('js.png'))
console.log(isJavaScriptFile('image.js.png'))
console.log(isJavaScriptFile('image.jpg.js')) */