//elementos
let lista = document.querySelector('ul')
let input = document.querySelector('input')

//eventos
input.addEventListener('keyup', adicionar)

//funçoes
function adicionar(e){
    if (e.key === 'Enter'){
            let newli = document.createElement('li')
            newli.innerHTML = input.value
            lista.appendChild(newli)

            input.value = ''
    }
}


