

let loginForm = document.querySelector(".sign-in-form");
loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    // getting form data
   
    const username = document.querySelector("#Username").value;
    const password = document.querySelector("#password").value;
    if(!username || !password){
        alert("Please enter your username and password")
        return;
    }
   fetch('/login', {
    method: "POST",
    headers: {'Content-Type': 'application/json' },
    body: JSON.stringify({username, password}),
   })
   .then(reponse => reponse.json()).then(data => {
    console.log(data);
   })
    .catch(error =>{
        console.error(error);
    });
});

