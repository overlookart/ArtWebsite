// 从 `astro:content` 导入辅助工具
import { defineCollection } from "astro:content";
import { testSchema } from "./schemas";
// 为每一个集合定义一个 `type` 和 `schema`
const postsCollection = defineCollection({
    type: 'content',
    schema: testSchema
});

const AstroCollection = defineCollection({
    type: 'content',
    schema: testSchema
})
// 导出一个单独的 `collections` 对象来注册你的集合
export const collections = {
  posts: postsCollection,
  Astro: AstroCollection
};