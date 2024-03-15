import { defineDb, defineTable, column } from 'astro:db';

// 定义数据库表
const Author = defineTable({
    columns: {
        id: column.number({ primaryKey : true }),
        name: column.text()
    }
})

// 表的引用
const Comment = defineTable({
    columns: {
        // authorId: column.number({ references: () => Author.columns.id }),
        authorId: column.number(),
        content: column.text(),
    }
})

// 定义数据库
export default defineDb({
    tables: {
        Comment
    },
})

