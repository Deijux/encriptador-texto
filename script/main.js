const btnEncriptar = document.getElementById('btnEncriptar')
const btnDesencriptar = document.getElementById('btnDesencriptar')
const btnCopiar = document.getElementById('btnCopiar')
const textoResultado = document.getElementById('textoResultado')
const imgResultado = document.getElementById('imgResultado')
const tituloResultado = document.getElementById('tituloResultado')
const resultBox = document.getElementById('resultBox')

btnEncriptar.addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value
    if (inputText === '') {
        return
    }
    console.log(inputText)
    textoResultado.innerText = encriptarTexto(inputText)
    tituloResultado.innerText = 'Texto encriptado'
    imgResultado.style.display = 'none'
    resultBox.style.justifyContent = 'flex-start'
    resultBox.style.textAlign = 'left'
    btnCopiar.style.display = 'block'
})

btnDesencriptar.addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value
    if (inputText === '') {
        return
    }
    console.log(inputText)
    textoResultado.innerText = desencriptarTexto(inputText)
    tituloResultado.innerText = 'Texto desencriptado'
    imgResultado.style.display = 'none'
    resultBox.style.justifyContent = 'flex-start'
    resultBox.style.textAlign = 'left'
    btnCopiar.style.display = 'block'
})

// Crear la funcionalidad de copiar al portapapeles
btnCopiar.addEventListener('click', () => {
    const textoCopiado = textoResultado.innerText
    navigator.clipboard.writeText(textoCopiado)
})

const encriptarTexto = (text) => {
    const replacements = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return text.replace(/[aeiou]/g, matched => replacements[matched]);
}

function desencriptarTexto(text) {
    const replacements = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return text.replace(/(enter|imes|ai|ober|ufat)/g, matched => replacements[matched]);
}
