
let seconddiv = document.getElementById('thirddiv');

// window.onscroll = function(){scrollfunction()};

window.addEventListener("scroll",function(){
    if(document.documentElement.scrollTop > 930){
        seconddiv.className = 'activation';
    }
});

window.addEventListener("scroll", function(){
    if(this.document.documentElement.scrollTop >= 2520 ){
        this.document.querySelector(".gototop").style.display="block";
        this.document.querySelector(".fa-arrow-up").style.display="block";
        this.document.querySelector(".gototop2").style.display="none";
    }else if(this.document.documentElement.scrollTop <= 2500 ){
        this.document.querySelector(".gototop").style.display="none";
        this.document.querySelector(".fa-arrow-up").style.display="none";
        this.document.querySelector(".gototop2").style.display="block";
        this.document.querySelector(".fa-arrow-down").style.display="block";
    }else{
        this.document.querySelector(".gototop2").style.display="block";
        this.document.querySelector(".fa-arrow-down").style.display="block";
    }
});





// window.addEventListener("scroll",function scrollfunction(){
//     if(document.documentElement.scrollTop > 930){
//         seconddiv.className = 'activation';
//     }
// };
let topwithdrawals = document.getElementById('topwithdrawals');
let topdeposits = document.getElementById("topdeposits");
let topdepositbutton = document.querySelector('.lastdeposit');
let topwithdrawalbutton = document.querySelector('.lastwithdrawal');

function topwithdraw(){
    topwithdrawals.style.display="block";
    topdeposits.style.display="none";
    topdepositbutton.style.color = "var(--tertiary-color)"
    topwithdrawalbutton.style.color ="var(--primary-color)";
    topwithdrawalbutton.style.border ="2px solid var(--primary-color)";
    topdepositbutton.style.border ="2px solid var(--tertiary-color)";

};

function topdeposited(){
    topwithdrawals.style.display="none";
    topdeposits.style.display="block";
    topwithdrawalbutton.style.color = "var(--tertiary-color)"
    topdepositbutton.style.color ="var(--primary-color)";
    topdepositbutton.style.border ="2px solid var(--primary-color)";
    topwithdrawalbutton.style.border ="2px solid var(--tertiary-color)";
};


function calculateprofit(){
let plan = document.getElementById('selectplan').value;
let investamount =Number( document.getElementById('investamount').value);
let profitamount = document.getElementById('profitamount');


if (plan === "Silver Plan"){
    result = 5 / 100 * investamount;
    profitamount.value= "$"+result + " Return of Investment Monthly";
} else if (plan === "Diamond Plan"){
    result = 15 / 100 * investamount;
    profitamount.value= "$"+result + " Return of Investment Monthly";
} else if (plan === "Platinum Plan"){
    result = 50 / 100 * investamount;
    profitamount.value= "$"+result + " Return of Investment Monthly";
}
};


// if(investamount == 75){
//    theresult = 80

//    profitamount.innerHTML = theresult;
// //    alert(theresult)
// }


let accord = document.getElementsByClassName('accordion');
let i;
 for(i=0; i< accord.length; i++){
    accord[i].addEventListener('click', function(){
        this.classList.toggle("active-accordion")
        let content = this.nextElementSibling;
        if(content.style.display === "block"){
            content.style.display = "none"
        }else{
            content.style.display = "block"
        }
    })
 };

 window.addEventListener("scroll", function(){
    let header = document.getElementById('mainheader');
    header.classList.toggle('sticky-header', window.scrollY * 3)
 });


 let date = new Date().getFullYear();
 document.getElementById("copy-right-text").innerHTML = "&#169; "+ date +" Built by"+ "<a href='https://twitter.com/teckhardy'> Teckhardy </a>" + " All Rights Reserved"




function openform(){
   
        document.querySelector(".demoform").style.display = "block";
    };


    document.querySelector(".cta").addEventListener("click", ()=>{
            openform()
    })

    document.querySelector(".cta2").addEventListener("click", ()=>{
        openform()
})


document.querySelector(".demoform").addEventListener("click", (e)=>{
    if(e.target === document.querySelector(".demoform")){
        document.querySelector(".demoform").style.display = "none";
    }
})

document.querySelector(".close").addEventListener('click', ()=>{
    document.querySelector(".demoform").style.display = "none";
})


// Form change


function changeform(){
    document.querySelector("#demoinvest").style.display ='none';
    document.querySelector("#login-form").style.display ='block';
    document.querySelector("#toggle-sign-up-form").style.display ='block';
    document.querySelector("#toggle-log-inform").style.display = 'none';
    document.getElementById("setstorage").style.display = "none";
    document.getElementById("getstorage").style.display = "block";
    
};


function returnform(){

    document.querySelector("#demoinvest").style.display ='block';
    document.querySelector("#login-form").style.display ='none';
    document.querySelector("#toggle-sign-up-form").style.display ='none';
    document.querySelector("#toggle-log-inform").style.display = 'block';
    document.getElementById("setstorage").style.display = "block";
    document.getElementById("getstorage").style.display = "none";

}


document.querySelector("#toggle-sign-up-form").addEventListener("click", ()=>{
    returnform()
});

document.querySelector("#toggle-log-inform").addEventListener("click", ()=>{
    changeform()
});



// Local Storage Items/ getting values from form and assigning them into a variable

let firstName = document.getElementById("firstName").value;
let lastName = document.querySelector("#lastName").value;
let Email = document.querySelector("#Email").value;
let clientPlan = document.querySelector("#investmentpackage").value;


    

// Setting Local Storage

// function handleSubmit(){

    
// // localStorage.setItem("firstName", firstName);
// // localStorage.setItem("lastName", lastName);
// // localStorage.setItem("Email", Email);
// // localStorage.setItem("clientPlan", clientPlan);
// // localStorage.setItem("passCode", passCode);

// // window.location.href="https://facebook.com";

// if(confirmPassCode != passCode){
// document.querySelector('.formerror1').style.display ="block";
// }else if(confirmPassCode === passCode){
//     document.querySelector('.formerror1').style.display ="none";
// }else{
//     document.querySelector('.formerror1').style.display ="none";
// }
// ;

// return;


// };

// Form Validation


function validatingemail(){
    let Email = document.getElementById("Email").value;
    let formerror4 = document.querySelector(".formerror4");

    if(Email.indexOf("@") === -1 ){
        formerror4.style.display = "block"
    }else{
        formerror4.style.display = "none"
    }


}

function validatingpassword(){

    let passCode = document.getElementById("password").value;
    let formerror2 = document.querySelector(".formerror2");

    if(passCode.length <= 8){

        // if password is less than or equal to eight characters, display this custom
        // error message

        document.querySelector(".formerror2").style.display = "flex";

        // checking if they are greater than eight chracters 

    }else if(passCode.length > 8){

        // if they are greater than eight remove the error message

        document.querySelector(".formerror2").style.display = "none";
    }



}



function validatingconfirmpassword(){
    let passCode = document.getElementById("password").value;
    let confirmPassCode = document.getElementById("confirmpassword").value;



    if (confirmPassCode != passCode){

        // if they dont correspond display this error messae 

            document.querySelector(".formerror1").style.display = "flex";


            // checking if they match
    } else if(confirmPassCode === passCode){

        // if they match remove the error message

        document.querySelector(".formerror1").style.display = "none";
    }



}

function validatingname(){

    let formerror5 = document.querySelector(".formerror5");
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if(firstName === "" || lastName === "" || firstName.length <3 || lastName.length <3){
        formerror5.style.display = "block"
    }else {
        formerror5.style.display = "none"
    }


}

// Image Uploading and saving data to local storage

// getting the upload button
let imageuploadbutton = document.querySelector("#upload-image");

// getting the avatar image 
let selectedimage = document.querySelector("#uploaded-image");

// setting a universal file reader

let fr = new FileReader();


// Adding a function to the upload button anytime a change has beeen detected

imageuploadbutton.addEventListener("change", ()=>{

    // Setting to read the file as a data URL so it can be coverted into a string-
    // Value and compatable for the ocal storage
    // we are reading uploaded files at index "0" because its the only file

    fr.readAsDataURL(imageuploadbutton.files[0])


    // adding an eventlistener to the file reader anytime data has been read and it has loaded
    
    fr.addEventListener("load", ()=>{

        // Setting the result of the read data to variable, which woul later be used

        const imageurl = fr.result;

        // Setting the URL into a Local-Storage to be used later in the dashboard
        
        localStorage.setItem("ClientImage", imageurl)


        // Changing the source of the avatar image to the new selected image
        //  so the user knows what they have selected
        
            selectedimage.src = imageurl;
    })

})




// The continue button validating the input fields

function checkvalidation(){

    // Declaring the Variables to be used in this function
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let Email = document.getElementById("Email").value;
    let clientPlan = document.getElementById("investmentpackage").value;
    let passCode = document.getElementById("password").value;
    let confirmPassCode = document.getElementById("confirmpassword").value;
    // error form from DOM

     let formerror1 = document.querySelector(".formerror1");
    let formerror2 = document.querySelector(".formerror2");
    let formerror4 = document.querySelector(".formerror4");
    let formerror5 = document.querySelector(".formerror5");
    
    validatingname()


        // checking if password is empty 

    if (passCode === null || passCode === ""){

        // if password is empty, alert this custom message

        alert ("Choose a Password")
    }

    


    // Checking if all the above errors have been settled before proceeding with form submission

    if(formerror1.style.display === "none" && formerror2.style.display === "none" && formerror4.style.display === "none"
    && formerror5.style.display === "none" ){

        // Carryout these actions if the errors above have been seetled

        document.querySelector("#demoinvest").style.display ='none';
    document.querySelector("#login-form").style.display ='block';
    document.querySelector("#toggle-sign-up-form").style.display ='block';
    document.querySelector("#toggle-log-inform").style.display = 'none';
    document.querySelector(".formerror3").style.display = "flex";
    document.getElementById("setstorage").style.display = "none";
    document.getElementById("getstorage").style.display = "block";


    // Set Local storage 

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("Email", Email);
    localStorage.setItem("clientPlan", clientPlan);
    localStorage.setItem("passCode", passCode);


    }

    return;
};


// Checking if Login Details Correspond with That of Local Storage

function checkingLogIn(){
    let validatedEmail = localStorage.getItem("Email");
    let ValidatedPassword = localStorage.getItem("passCode");
    let emailToLogIn = document.getElementById("email-to-log-in").value;
    let passwordToLogIn = document.getElementById("password2").value;


    if (emailToLogIn !== validatedEmail || passwordToLogIn !== ValidatedPassword){
        alert("Incorrect Email or Password")
    }else{
        alert("Login sucessful you would be redirected to the dashboard")

        // dashboardredirect()
        setTimeout(dashboardredirect, 4000)
       
    };

     
};

function dashboardredirect(){
    window.location = "pages/dashboard.html"
};



// close alert on login after signup


    let closebutton = document.getElementsByClassName("closeerror");
    let buttonindex;

    for(buttonindex = 0; buttonindex< closebutton.length ; buttonindex++){

        closebutton[buttonindex].onclick = function(){
        let theAlert = this.parentElement;

        theAlert.style.display = "none";
    }
    }

    
   // LOOPING FOR MONKEY ICONS AND SETTING THEM TO TOGGLE PASSWORD INPUT

           let toggler = document.querySelectorAll(".password-toggler");
            let toggleindex;

            for (toggleindex = 0; toggleindex< toggler.length ; toggleindex++){
                toggler[toggleindex].onclick = function(){

                    let passwordtocheck = this.nextElementSibling;
                    let toggleicon = document.getElementById("toggle-icon");
                    let toggleicon2 = document.getElementById("toggle-icon2");
                    

                    if (passwordtocheck.type === "password" ){
                        passwordtocheck.type = "text";
                        toggleicon.src = "images/password-toggle2.png"
                        toggleicon2.src = "images/password-toggle2.png"
                       
                        
                        
                    } else if(passwordtocheck.type === "text"){
                        passwordtocheck.type = "password"
                        toggleicon.src = "images/password-toggle.png"
                        toggleicon2.src = "images/password-toggle.png"
                       
                    }}}



// window.onload = ()=>{
//     redirectuser()
// }
//             function redirectuser(){

//                 // alert("working")

//                         if (window.location.href === "file:///C:/Users/Collins%20ADI/Desktop/learning%20projects/crypto/index.html"){
//                             alert("working")
//                         }
//                         }


window.onload = ()=>{

    // if(navigator.onLine === false && localStorage.getItem("firstName") !== null ){
    //     alert( "Hello " + localStorage.getItem("firstName") +","+ " You are offline")
    // }

        
    // if(localStorage.getItem("firstName") === null && navigator.onLine === false){

    //         alert("Hello, You are offline")

    //     }
    // } else{alert("Welcome Back " + localStorage.getItem("firstName"))}

}




                    




                



         
                            
                                        