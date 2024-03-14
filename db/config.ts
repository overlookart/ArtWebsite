import { defineDb, defineTable, column } from 'astro:db';

// 定义数据库表
const Comment = defineTable({
    columns: {
        author: column.text(),
        body: column.text(),
        likes: column.number(),
        flagged: column.boolean(),
        published: column.date(),
        metadata: column.json(),
    }
})

// 定义数据库
export default defineDb({
    tables: {
        Comment
    },
})

