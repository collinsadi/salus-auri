

// Declaring Variables for the sections

let dashboardSection = document.getElementById("dashboard");
let walletSection = document.getElementById("wallet");
let settingsSection = document.getElementById("settings");



// Declaring variables for sidebar buttons

let dashboardbtn = document.getElementById("dashboard-btn");
let walletbtn = document.getElementById("wallet-btn");
let settingsbtn = document.getElementById("setting-btn");
let plusbutton = document.querySelector("#addmoney");

// Mobile Buttons

let dashboardbtn2 = document.getElementById("dashboard-btn2");
let walletbtn2 = document.getElementById("wallet-btn2");
let settingsbtn2 = document.getElementById("setting-btn2");





// adding event listeners to side bar buttons


walletbtn.addEventListener("click",_=>{

    dashboardSection.style.display = "none";
    settingsSection.style.display = "none"
    walletSection.style.display = "block";

    walletbtn.style.color ="var(--primary-color)";
     dashboardbtn.style.color = "var(--white-text)";
    settingsbtn.style.color = "var(--white-text)";

    walletbtn.classList.add.apply(".active-side-button")

});

dashboardbtn.addEventListener("click", _=>{
    walletSection.style.display ="none";
    settingsSection.style.display = "none";
    dashboardSection.style.display ="block";

    dashboardbtn.style.color ="var(--primary-color)";
    walletbtn.style.color = "var(--white-text)";
    settingsbtn.style.color = "var(--white-text)";
});

settingsbtn.addEventListener("click", _=>{
    walletSection.style.display = "none";
    settingsSection.style.display = "block";
    dashboardSection.style.display = "none";

    settingsbtn.style.color ="var(--primary-color)";
    dashboardbtn.style.color = "var(--white-text)";
    walletbtn.style.color = "var(--white-text)";
});

plusbutton.addEventListener("click", ()=>{
    dashboardSection.style.display = "none";
    settingsSection.style.display = "none"
    walletSection.style.display = "block";


    
    walletbtn.style.color ="var(--primary-color)";
     dashboardbtn.style.color = "var(--white-text)";
    settingsbtn.style.color = "var(--white-text)";

});

// Ebent listeners for side buttons end here



// adding event listeners to mobile buttons

walletbtn2.addEventListener("click",_=>{

    dashboardSection.style.display = "none";
    settingsSection.style.display = "none"
    walletSection.style.display = "block";

});

dashboardbtn2.addEventListener("click", _=>{
    walletSection.style.display ="none";
    settingsSection.style.display = "none";
    dashboardSection.style.display ="block";
});

settingsbtn2.addEventListener("click", _=>{
    walletSection.style.display = "none";
    settingsSection.style.display = "block";
    dashboardSection.style.display = "none";
});

// Button event listener for mobile devices end here





// Getting the live crypto prices for the live chart

//  var liveprices = {
//     "async":true,
//     "scroosDomain":true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=usd"
//     ,"method": "GET",
//     "headers": {},


// };

// $.ajax(liveprices).done(function(response){
//     console.log(response.tether.usd)
//     document.getElementById("bitcoin").innerHTML = "$ " + response.bitcoin.usd;
//     document.getElementById("etherum").innerHTML = "$ " + response.ethereum.usd;
//     document.getElementById("tether").innerHTML = "$ " + response.tether.usd;
// });

// Getting Live server ends here




// Redirect User if they are not logged in

function redirectuser(){

    let checkingtoredirect1 = localStorage.getItem("passCode");
    let checkingtoredirect2 = localStorage.getItem("Email");

    // alert("working")

   // console.log(checkingtoredirect1)
   // console.log(localStorage)

    if (window.location.href !== "../index.html" && checkingtoredirect1 === null && checkingtoredirect2 === null){
        
    window.location.href = "../index.html"
    
    // alert("working")
    }
    }




 //Run function on page load  

window.onload = ()=>{

    // redirect user who isnt logged in
    // redirectuser()

    setTimeout(redirectuser, 500)

    // setInterval(timechange, 1000)



}

let timespeed = setInterval(timechange, 500);

// getting the uploaded images and setting the profile picture for big devices

document.getElementById("profile-image").src = localStorage.getItem("ClientImage")


// getting the uploaded image and setting the profile image for small devices

document.getElementById("profile-image2").src = localStorage.getItem("ClientImage")



// Dashboard Customization

// getting the username from the DOM
let Username = document.getElementById("username");

//getting the greeting text container from the DOM

let greeting = document.getElementById("greetings");

// Getting the timing container from the DOM

let timing = document.getElementById("timing");

// Calling Local storages

let gottenusername = localStorage.getItem("firstName") + " " + localStorage.getItem("lastName");

// Getting the image from the local storage
let gottenprofilepicture = localStorage.getItem("ClientImage");

// Making every first letter of the username capital incase user signs up with a small letter
let modifiedusername  = gottenusername.charAt(0).toUpperCase();

// Getting the other parts of the username to add with the capitalized first letter
let modifiedusername2 = gottenusername.slice(1);

// changing the dashboard

// Setting the username for dektop dashboard
Username.innerHTML = modifiedusername + modifiedusername2;

// setting username for mobile dashboard
let mobileusername = document.querySelector(".name-section-mobile h3");

mobileusername.innerHTML = "Hello, " + modifiedusername + modifiedusername2;


// Date

let date = new Date();

function timechange(){

    let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

timing.innerHTML = date.toLocaleTimeString();

//+ ", " + months[date.getMonth()] + ", " + date.getDate();

// if(hours < 12){
//     timing.innerHTML = hours+ ":" + minutes + ":" + seconds + " AM"
// } else{
//     timing.innerHTML = hours+ ":" + minutes + ":" + seconds + " PM"
// };

let months = ["jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

if (hours <12 ){
    document.getElementById("greetings").innerHTML = "Good Morning"
} else if(hours < 16 && hours > 12){
    document.getElementById("greetings").innerHTML = "Good AfterNoon"
} else{
    document.getElementById("greetings").innerHTML = "Good Evening"
}
console.log()


};


//  async function  copywallet(){

// let walletadress = document.getElementById("bitcoinwalletadress").value;

// //let addme = this.previousElement;
 
// await navigator.clipboard.writeText(walletadress);

// alert("Bitcoin Wallet Address Copied")

 
// };


// async function  copyethwallet(){

//     let walletadress = document.getElementById("ethereumwalletadress").value;
    
//     //let addme = this.previousElement;
     
//     await navigator.clipboard.writeText(walletadress);
    
//     alert("ethereum Wallet Address Copied")
    
     
//     };

//     async function  copytethwallet(){

//         let walletadress = document.getElementById("tetherwalletadress").value;
        
//         //let addme = this.previousElement;
         
//         await navigator.clipboard.writeText(walletadress);
        
//         alert("Tether Wallet Address Copied")
        
         
//         };

 let Depositsettingsbtn = document.getElementById("depositsettings");
let Passwordsettingsbtn = document.getElementById("passwordsettings");

let passwordpage = document.getElementById("password-setting");
let depositpage = document.getElementById("deposit setting");

function hidepasswordpage(){
    passwordpage.style.display = "none";
    alert("done");
}


let logmeout = document.getElementById("logout-btn");

logmeout.addEventListener("click", ()=>{

    localStorage.clear();
    window.location = "../index.html"
    
})
    

    
