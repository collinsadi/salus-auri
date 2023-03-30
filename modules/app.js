
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
    


    // Checking if the Password Filled and the Confirm Password filled Match 

    if (confirmPassCode != passCode){

        // if they dont correspond display this error messae 

            document.querySelector(".formerror1").style.display = "flex";


            // checking if they match
    } else if(confirmPassCode === passCode){

        // if they match remove the error message

        document.querySelector(".formerror1").style.display = "none";
    }

    // checking if the password is less than or equal to eight characters

    if(passCode.length <= 8){

        // if password is less than or equal to eight characters, display this custom
        // error message

        document.querySelector(".formerror2").style.display = "flex";

        // checking if they are greater than eight chracters 

    }else if(passCode.length > 8){

        // if they are greater than eight remove the error message

        document.querySelector(".formerror2").style.display = "none";
    }

        // checking if password is empty 

    if (passCode === null || passCode === ""){

        // if password is empty, alert this custom message

        alert ("Choose a Password")
    }


    // Checking if all the above errors have been settled before proceeding with form submission

    if(formerror1.style.display === "none" && formerror2.style.display === "none"){

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
        alert("GoodBoy")
    };
    
};



// close alerts


    let closebutton = document.getElementsByClassName("closeerror");
    let buttonindex;

    for(buttonindex = 0; buttonindex< closebutton.length ; buttonindex++){

        closebutton[buttonindex].onclick = function(){
        let theAlert = this.parentElement;

        theAlert.style.display = "none";
    }
    }

    // window.addEventListener("contextmenu", (event)=>{
    //     event.preventDefault();
    //     alert("Right Clicking on this page is not Allowed");
    // });



console.log(confirmPassCode !== passCode)
