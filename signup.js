var options = document.querySelector("#options");
var nameEntry = document.querySelector("#nameEntry");
var infoEntry = document.querySelector("#infoEntry");
var create = document.querySelector("#create");
var next1 = document.querySelector("#next1");
var back1 = document.querySelector("#back1");
var next2 = document.querySelector("#next2");

create.onclick = () => {
    options.style.left = "-450px"
    nameEntry.style.left = "40px"
}





next1.onclick = () => {
    nameEntry.style.left = "-450px"
    infoEntry.style.left = "40px"

    let firstnameInput = document.querySelector("#firstnameInput")
    console.log(firstnameInput.value)

    let lastnameInput = document.querySelector("#lastnameInput")
    console.log(lastnameInput.value)


}


back1.onclick = () => {
    nameEntry.style.left = "40px"
    infoEntry.style.left = "450px"
}
next2.onclick = () => {
    infoEntry.style.left = "-450px"
    otpForm.style.left = "40px"

    let contactInput = document.querySelector("#")

}
