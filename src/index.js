const formOutput = document.querySelector("#first_name");
const createAccountButton = document.querySelector(".create-account");

createAccountButton.addEventListener('click', (event) => {
   console.log(formOutput.value);
});