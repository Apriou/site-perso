import axios from 'axios'

export const getByUrl = (url) => {

    return new Promise((resolve, reject) => {
           axios.get(url)
            .then(data => {
                console.log("data", data);
                const status = data.status;
                resolve(status)
            }).catch(e => {
                console.log('Erreur getting status: ', e)
                //reject('Erreur getting status',e)
                resolve(408)//Je le passe en resolve et en code Timeout pour ne pas bloquer les appels suivants
            })
    })

/*     const response = await axios.get(url)
                        .then((response) => { console.log('axios response', {...response}) })
                        .catch((error) => {
                            console.log('axios error', {...error}) 
                    })
    return response; */
}