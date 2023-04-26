var signInOptions = document.querySelector("#signInOptions");
var passwordEntry = document.querySelector("#passwordEntry")
var nextBtn = document.querySelector("#nextBtn");

nextBtn.onclick = () => {
    signInOptions.style.left = "-450px"
    passwordEntry.style.left = "40px"
}

var loginBtn = document.querySelector("#loginBtn")
var signinInput = document.querySelector("#signinInput")
var passwordInput = document.querySelector("#passwordInput")

let errorPopup = document.querySelector("#errorPopup");


let confirmedAccounts = [
    {
        confirmedNum: "09293603139",
        confirmedEmail: "strdpl95@gmail.com",
        confirmedUsername: "meMaten",
        confirmedPassword: "±ç+z",
    }
]


let logInErrors = [

]


let phoneRegXPerCountry = [
    {
        Country : "Philippines",
        regX : /^(09|\+639)\d{9}$/
    }
]


let emailRegXPerSite = [
    {
        site : "google",
        regX : /^[\w.+\-]+@gmail\.com$/
    }
]


// let testUsernane = "sdfd244s"
// let test = () => {
//     if (testUsernane.match()) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// test()


nextBtn.addEventListener('click', () => {
    let profileLog = {
        numLog : "",
        emailLog: "",
        usernameLog: ""
    }
    let numberRegex = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/
    let emailRegex = /^\w+([\.]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let usernameRegex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
    let testInput = signinInput.value


    if (signinInput.value === "") {
        signInOptions.style.left = "40px";
        passwordEntry.style.left = "450px";
        setTimeout(() => {
            console.log('account not found')
            errorPopup.classList.toggle('active');
        }, 1500)
        
    } else {
        // NUMBER
        if (testInput.match(numberRegex) && !testInput.match(emailRegex) && !testInput.match(usernameRegex)) {
            console.log("number")
            for (let i = 0; i < phoneRegXPerCountry.length; i++) {
                    let phoneRegXPerCountryObj = phoneRegXPerCountry[i]
                    let numInput = signinInput.value;
                    let testPhoneRegX = phoneRegXPerCountryObj.regX
        
                    if (numInput.match(testPhoneRegX)) {
                        profileLog.numLog = numInput
                        // console.log(profileLog.numLog)
                        console.log("valid number")
                        // localStorage.setItem("profileLog", JSON.stringify(profileLog))
                    } else {
                        console.log("invalid number")
                    }
            }
            for (let i = 0; i < confirmedAccounts.length; i++) {
                let testConfirmedNum 
                testConfirmedNum = confirmedAccounts[i].confirmedNum 
                if (testConfirmedNum === profileLog.numLog) {
                    console.log('welcome!')
                } else {
                    signInOptions.style.left = "40px";
                    passwordEntry.style.left = "450px";
                    setTimeout(() => {
                    console.log('account not found')
                    errorPopup.classList.toggle('active');
                    }, 2000)
                }
            }
        }  
        // EMAIL
        else if (testInput.match(emailRegex) && !testInput.match(usernameRegex) && !testInput.match(numberRegex)) {
            console.log("email")
            for (let i = 0; i < emailRegXPerSite.length; i++) {
                let emailRegXPerSiteObj = emailRegXPerSite[i];
                let emailInput = signinInput.value;
                let testEmailRegX = emailRegXPerSiteObj.regX
    
                if (emailInput.match(testEmailRegX)) {
                    profileLog.emailLog = emailInput
                    // console.log(profileLog.emailLog)
                    console.log("valid email")
                    // localStorage.setItem("profileLog", JSON.stringify(profileLog))
                    
                } else {
                    console.log("invalid email")
                }
            }
            for (let i = 0; i < confirmedAccounts.length; i++) {
                let testConfirmedEmail
                testConfirmedEmail = confirmedAccounts[i].confirmedEmail
                if (testConfirmedEmail === profileLog.emailLog) {
                    console.log('welcome!')
                } else {
                    signInOptions.style.left = "40px";
                    passwordEntry.style.left = "450px";
                    setTimeout(() => {
                    console.log('account not found')
                    errorPopup.classList.toggle('active');
                    }, 2000)
                }
            }
        } 
        // USERNAME 
        // else if (testInput.match(usernameRegex) && !testInput.match(numberRegex) && !testInput.match(emailRegex)) {
        //     console.log("username")
        //     let usernameRegX = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
        //     let usernameInput = signinInput.value;
    
        //         if (usernameInput.match(usernameRegX)) {
        //             profileLog.usernameLog = usernameInput 
        //             // console.log(profileLog.emailLog)
        //             console.log("valid username")
        //             // localStorage.setItem("profileLog", JSON.stringify(profileLog))
                    
        //         } else {
        //             console.log("invalid email")
        //         }
            
        //     for (let o = 0; o < confirmedAccounts.length; o++) {
        //         let testConfirmedUsername
        //         testConfirmedUsername = confirmedAccounts[o].confirmedUsername
        //         if (testConfirmedUsername === profileLog.usernameLog) {
        //             console.log('welcome!')
        //         } else {
        //             signInOptions.style.left = "40px";
        //             passwordEntry.style.left = "450px";
        //             setTimeout(() => {
        //             console.log('account not found')
        //             errorPopup.classList.toggle('active');
        //             }, 2000)
        //         }
        //     }
        // }   
    }
})


loginBtn.addEventListener('click', () => {
    let testPasswordInput = passwordInput.value

    for(let i = 0; i < confirmedAccounts.length; i++) {
        let testConfirmedPassword
        testConfirmedPassword = confirmedAccounts[i].confirmedPassword
        
        if (atob(testPasswordInput) === testConfirmedPassword) {
            console.log("match")
            window.location.href = "index.html";
        } else {
            console.log("not match")
        }
    }
})

