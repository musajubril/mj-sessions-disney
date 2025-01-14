const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const body = document.querySelector('body');
submit.addEventListener("click", function (){
    console.log()
    console.log(email.value, password.value);
    console.log(body.className, body.classList)
    body.className = `text-white bg-indigo-700`
    // email.style.display = "none"
})
email.addEventListener("keyup", function (e) {
    console.log(e.target.value);
})