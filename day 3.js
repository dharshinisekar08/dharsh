function SendMessage9(){
    console.log("Hai Js");
    console.log(x);//inside
}
SendMessage();
    console.log(x);//outside

    function variable:
    //only accessible in the function in which they are declared.
    function SendMessage(){
        let x=10;
        console.log("Hai Js");
        console.log(x);//within
    }
    SendMessage();

    //block scope
    //the block scope of the variable means that the variable 
    //is accessible within the block that is between the curly braces.

    function check(){
        if(true){
            let name="Webdevelopment";
            console.log("block scope");
            console.log(name);
        }
    }
    check()

    //variable declared outside any function
    //calback:
    //a callback function in javascript is a function that is passed as an argument to another function,
    //and it is executed after the completion of that function.
    //it is commanly used for:
    //handling asynchronous operations(like API calls,timeouts,or event handling)
    //customizing behavioor inside a function.
    function first(){
        console.log("this is my first function");
    }
    first()
    function second(callback){
        console.log("this is my second function");
        setTimeout(callback,2000);
    }
    second(first)

    let count=0;
    let Input=()=>{
        count++
        console.log(count);
        if(count<5){
            Input()
        }
    }
    Input();
