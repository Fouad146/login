

let signName = document.querySelector("#signName");
let signEmail = document.querySelector("#signEmail");
let signPass = document.querySelector("#signpass");
let sinupBtn = document.querySelector("#sinupBtn");
let suc = document.querySelector(".text-success");
let signIn = document.querySelector("#signIn")

let enterEmail = document.querySelector("#enterEmail");
let enterPass = document.querySelector("#enterPass");
let loginBtn = document.querySelector("#loginBtn");
let signUp = document.querySelector("#signUp")

let firstPage = document.querySelector("#page-one")
let secPage = document.querySelector("#page-two")
let thPage = document.querySelector("#page-tree")

let nav = document.querySelector("nav")
let logOutBtn = document.querySelector("#logOutBtn")

let card = document.querySelector("#card")
//

let accounts = getAcc() || [] ;

sinupBtn.addEventListener("click", function (e) {
    let newAccount = {
        name: signName.value.trim(),
        email: signEmail.value.trim(),
        password: signPass.value.trim()
    };
saveAcc()
e.preventDefault(); //????

    if (newAccount.name && newAccount.email && newAccount.password) {
        accounts.push(newAccount);
        suc.classList.replace("d-none", "d-flex")
    } else {
        alert("All fields are free.")
    }
    signName.value = "";
    signEmail.value = "";
    signPass.value = "";
});


signIn.addEventListener("click", function (e) {
    secPage.classList.replace("d-flex", "d-none")
    firstPage.classList.replace("d-none", "d-flex")

e.preventDefault();


})


function saveAcc() {
    localStorage.setItem("accounts", JSON.stringify(accounts))

}
function getAcc() {
    return JSON.parse(localStorage.getItem("accounts"))
}



// 


loginBtn.addEventListener("click", function () {
    let email = enterEmail.value;
    let password= enterPass.value;
    for(var i =0 ; i < accounts.length ; i++ ){
        let cartona="";
        if(accounts[i].email === email && accounts[i].password === password){
            firstPage.classList.replace("d-flex", "d-none")
            thPage.classList.replace("d-none", "d-flex")
            nav.classList.replace("d-none", "d-flex")
                cartona = `<h1 class="text-center text-info">Walcome ${accounts[i].name}</h1>`;
                card.innerHTML = cartona ;
                
            }else{
            alert("some thing rong")
        }
    }

    enterEmail.value = "" ;
    enterPass.value = "" ;

}
)

signUp.addEventListener("click", function (e) {
    firstPage.classList.replace("d-flex", "d-none")
    secPage.classList.replace("d-none", "d-flex")
    suc.classList.replace("d-flex", "d-none")
e.preventDefault();

})


//

logOutBtn.addEventListener("click", function () {
    thPage.classList.replace("d-flex", "d-none")
    firstPage.classList.replace("d-none", "d-flex")
    nav.classList.replace("d-flex", "d-none")

})

