const input = document.getElementById("input");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate-btn");
const viewBtn = document.getElementById("view-btn");

generateBtn.addEventListener("click", generatePassword);

let size = 12;
function generatePassword() {
    let newPassword = "";

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@$%-&()?";

    for (let i = 0; i < size; i++) {
        let myChars = upperCase + lowerCase + numbers + symbols;

        random = Math.floor(Math.random() * myChars.length);

        newPassword += myChars[random];
    }

    input.value = newPassword;
}

viewBtn.addEventListener("click", viewPassword);

function viewPassword() {
    input.type = "text";

    setTimeout(() => {
        input.type = "password";
    }, 5000);
}

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(input.value);
    alert("copied to clipboard - click 'ok' ");
})