let form = document.getElementById("myform");
        form.addEventListener("submit",function(event){
        
        event.preventDefault();
        let form_name =document.getElementById("name").value;
        console.log("name :",form_name);
        let form_pass=document.getElementById("password").value;
        console.log("pass :",form_pass);
        // let  Reading=document.getElementById("reading").checked
        // console.log(Reading)
        // let traveled=document.getElementById("travel").checked
        // console.log(traveled)
        // let cooking=document.getElementById("cook").checked
        // console.log(cooking.value)
        // let gMale = document.getElementById("Male").checked
