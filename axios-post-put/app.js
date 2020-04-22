const axiosApp = axios.create({ baseURL: 'https://ih-crud-api.herokuapp.com' })


// document.getElementById("postWallE").onclick = () => {

//     const characterInfo = {
//         name: 'Buñuelo el perro',
//         occupation: 'Waste Allocation Robot',
//         weapon: 'Pedos'
//     }

//     axiosApp.post('characters', characterInfo)
//         .then(response => {
//             console.log(response)
//             const character = response.data
//             const details = `<li>Nombre: ${character.name}<br>Trabajo: ${character.occupation}<br>Arma: ${character.weapon}</li>`
//             document.querySelector('#charactersList').innerHTML += details
//         })
//         .catch(error => console.log('Oh No! Error is: ', error))
// }


const inputs = document.querySelectorAll('input')

document.querySelector('#characterForm').onsubmit = e => {

    e.preventDefault()

    const characterInfo = {
        name: inputs[0].value,
        occupation: inputs[1].value,
        weapon: inputs[2].value
    }

    axiosApp.post('/characters', characterInfo)
        .then(response => {
            console.log('La respuesta del servidor es', response)
            const character = response.data
            const details = `<li>Nombre: ${character.name}<br>Trabajo: ${character.occupation}<br>Arma: ${character.weapon}</li>`
            document.querySelector('#charactersList').innerHTML += details
        })
        .catch(error => console.log('Oh No! Error is: ', error))
}



// Get character info for edit purposes
document.querySelector('#getButton').onclick = () => {

    const caharacterId = document.querySelector('#theCharId').value
    axiosApp.get('/characters/' + caharacterId)
        .then(response => {

            console.log('el person es', response)

            inputs[4].value = response.data.name
            inputs[5].value = response.data.occupation
            inputs[6].value = response.data.weapon
            inputs[7].value = response.data.id
        })
        .catch(err => console.log('Oh No! Error is: ', err))
}


document.getElementById('updateForm').onsubmit = e => {

    e.preventDefault()

    const characterInfo = {
        name: inputs[4].value,
        occupation: inputs[5].value,
        weapon: inputs[6].value
    }

    const caharacterId = inputs[7].value

    axiosApp.put('/characters/' + caharacterId, characterInfo)
        .then(() => {
            console.log('PERSONAJE ACTUALZADO')
            document.getElementById('updateForm').reset()

        })
        .catch(err => console.log('Oh No! Error is: ', err))
}