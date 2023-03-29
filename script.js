async function minhaFuncao() {
    const local = document.getElementById('meuContent')

    const response = await fetch('https://api.randomuser.me/?results=10')
    const data = await response.json()

    const meuArray = data.results

    for(i = 0; i < meuArray.length; i++) {
        const email = meuArray[i].email
        const name = meuArray[i].name.first
        const secondName = meuArray[i].name.last

        const divMeuCard = document.createElement('div')
        local.appendChild(divMeuCard)

        const meuH1 = document.createElement('h1')
        meuH1.innerText = `${name} ${secondName}`
        meuH1.style.color = 'red'
        meuH1.style.fontSize = '1rem'
        divMeuCard.appendChild(meuH1)

        const mparagrafo = document.createElement('p')
        mparagrafo.innerText = email
        divMeuCard.appendChild(mparagrafo)
    }
   

}
minhaFuncao()