const {readFile} = require('fs/promises');



/* const getText = (pathfile) =>{
    return new Promise((resolve, reject) => {
        readFile(pathfile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    })
} */

//getText('./Practica/data/Notas.txt')
//    .then(result => console.log(result))
//    .catch(error => console.log(error))
async function read(){
    try {        
        const result = await readFile('./Practica/data/Notas.txt')
        const result2 = await readFile('./Practica/data/second.txt')
        console.log(result.toString())
        console.log(result2.toString())
    } catch (e) {
        console.log(e);
    }
}
read()