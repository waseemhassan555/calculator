let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let total=null
let arr=[]
var sum=0
for (item of buttons) {
   
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
       console.log("screen",screenValue)
        if (buttonText == 'x') {
            buttonText = '*';
            // console.log("screen",screenValue)
            // total*=screenValue
            // screenValue=""
        
           // screenValue += buttonText;
            screen.value = screenValue;
        }
        if (buttonText == '+') {
            buttonText = '+';
            console.log("screen",screenValue)
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '-') {
           // buttonText =;
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '/') {
             buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'c') {
       
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == 'sum') {
            console.log("screenvalue",screenValue)
           arr.push(parseInt(screenValue))
           console.log("arr",arr)
             screenValue = "";
            
           
        
          
            screen.value = screenValue;
            //screenValue = sum
            console.log("screenvalueaftersum",screenValue)
        }
        else if (buttonText == '=') {
             if(arr.length!=0){
                console.log("hello")
                arr.forEach(item=>{
                    sum+=item
                })

                screen.value=sum
                screenValue=sum
                arr=[]
                console.log("myarr",arr)
                console.log("confirmingscreen",screenValue)
                sum=0
             }

       else if(arr.length==0){
           
     //   let result= eval(screenValue)
        try {
         let result= eval(screenValue)
         console.log("res",result)
     
         screen.value = result;
         screenValue=result
            
          } catch (e) {
            console.log("ERROR",e);
            screen.value = "Error, Write it Correctly";

          }
       
         
        }
        }

        else {
           
            screenValue += buttonText;
            screen.value = screenValue;
        }
    
    })
    
}