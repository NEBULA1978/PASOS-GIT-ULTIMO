const codeSnippet = `function palindromo(texto){
    let invertido = texto
                    .split('')
                    .reverse()
                    .join('');
    return (invertido === texto);
}

console.log("Es un palíndromo? " + palindromo("1234321"));
console.log("Es un número palíndromo? " + palindromo("2134321"));`;

const showCodeBtn = document.getElementById("showCodeBtn");
const codeSnippetElement = document.getElementById("codeSnippet");
const palindromeInput = document.getElementById("palindromeInput");
const checkBtn = document.getElementById("checkBtn");
const resultMessage = document.getElementById("resultMessage");

showCodeBtn.addEventListener("click", () => {
  if (codeSnippetElement.style.display === "none") {
    codeSnippetElement.textContent = codeSnippet;
    codeSnippetElement.style.display = "block";
  } else {
    codeSnippetElement.textContent = "";
    codeSnippetElement.style.display = "none";
  }
});

checkBtn.addEventListener("click", () => {
  const inputWord = palindromeInput.value;
  const isPalindrome = palindromo(inputWord);

  resultMessage.textContent = isPalindrome
    ? "Es un palíndromo"
    : "No es un palíndromo";

  palindromeInput.value = ""; // Limpiar el campo de entrada

  setTimeout(() => {
    resultMessage.textContent = ""; // Borrar el mensaje de resultado después de 2 segundos
  }, 2000);
});

function palindromo(texto) {
  let invertido = texto.split("").reverse().join("");
  return invertido === texto;
}
