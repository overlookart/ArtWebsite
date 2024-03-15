import { db, Comment, } from "astro:db";

export default async function(){
    await db.insert(Comment).values([
        { authorId: 1, content: 'Hope you like Astro DB!' },
        { authorId: 2, content: 'Enjoy!'},
    ]);
}