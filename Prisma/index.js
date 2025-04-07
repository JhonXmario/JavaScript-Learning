import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
//! Ahora la base de datos es relacional
async function main() {
//* Crear usuario
        const newUser = await prisma.user.create({ // crear un usuario
            data: {
                name: "Asiel",
                email: "asiel@gmail.com"
            }
        })
    

//* Ver usuarios
    //const users = await prisma.user.findMany() // ver todos los datos de la tabla

//* Ver un usuario
    /* const user = await prisma.user.findFirst({ // buscar un dato en especifico por sus valores
        where: {
            OR: [ // los OR, AND llevan corchetes
                {id: 1},
                {email: "maria@gmail.com"} // y los parametros van entre llaves
            ]
        }
    })
    console.log(users);*/


//* Eliminar usuario
    /* try {
        const userDelete = await prisma.user.delete({ // Eliminar un usuario por su id
            where: {
                id: 1
            }
        })
        console.log(userDelete);
    } catch (error) {
        if (error.code === "P2025") {
            console.log('Error: No se pudo encotrar al ususario');
        }
    } */

//* Actualizar usuario
    /* const actu = await prisma.user.update({
        where: {
            id: 3
        },
        data: {
            lastname: "Miguelito",
            name: "Sofhantiel"
        }
    })
    console.log(actu); */

//* Actualizar usuario con upsert (si no existe el usuario, entonces creara uno nuevo)
    /* try {
        const actuCreate = await prisma.user.upsert({
            where:  {
                email: "samuel@gmail.com"
            },
            create: {
                name: "Samuel",
                email: "samuel@gmail.com"
            },
            update: {
                lastname: "Ivarra"
            }
        })
        console.log(actuCreate);
    } catch (error) {
        console.log(error.message);
    } */
}
main()