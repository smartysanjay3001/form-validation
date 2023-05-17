let id=(id)=>document.getElementById(id)

let clasess=(add)=>document.getElementsByClassName(add)


username=id("username");
email=id("email");
password=id("password")
form = id("form")



errorMsg=clasess("error")
successIcon=clasess("success-icon")
failureIcon=clasess("failure-icon")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();

//     // engine(username,0,"username cannot be blank")
//     // engine(email,1,'email cannot be blank')
//     // engine(password,2,"password cannot be blank")
//     alert("submitted");
// });



let engine=(id,serial,msg)=>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML=msg

        id.style.border="2px solid red";


        // icons

        failureIcon[serial].style.opacity="1"
        successIcon[serial].style.opacity="0"
        console.log("first")
    }
    else{


        errorMsg[serial].innerHTML="";

        id.style.border="2px solid red";


        // icons

        failureIcon[serial].style.opacity="0"
        successIcon[serial].style.opacity="1"
      console.log("lock")   
    }
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();

       console.log(e)
    engine(username,0,"username cannot be blank")
    engine(email,1,'email cannot be blank')
    engine(password,2,"password cannot be blank")
    // alert("submitted");
});