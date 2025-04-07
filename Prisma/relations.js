import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const newUser = await prisma.user.create({
        data: {
            name: "Donna",
            email: "donna@gmail.com",
            posts: {
                create: {
                    title: "NodeJS tutorial",
                    content: "Un tutorial de NodeJS"
                }
            }
        }
    })
    console.log(newUser)
    const post = await prisma.posts.findMany()
    console.log(post)

    const users = await prisma.user.findMany({
        include: {
            posts: true
        }
    })
    users.forEach(user => {
        console.log('-------------------------');
        console.log(`User: ${user.name}`);
        console.log(`Email: ${user.email}`);

        user.posts.forEach((posts, i) => {
            console.log(`${i} - ${posts.title}: ${posts.content}`);
        });
    });
    

}
main()