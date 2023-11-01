import { describe, expect, it } from 'vitest'
import { query } from '../plugin/src/request'

describe('should', () => {
  it('query for npm', async () => {
    const result = await query('https://www.npmjs.com/search?q=CodeGenius')
    expect(result && result[0]).toMatchInlineSnapshot(`
      {
        "description": "基于 CodeGenius 的 Clear 插件",
        "title": "@codegenius/clear-plugin",
        "url": "https://www.npmjs.com/package/@codegenius/clear-plugin",
      }
    `)
  })
  it('query for gitee', async () => {
    const result = await query('https://search.gitee.com?q=vue&type=repository')
    expect(result && result[0]).toMatchInlineSnapshot(`
      {
        "description": "vue",
        "title": "Layui/layui-vue",
        "url": "https://gitee.com/layui/layui-vue?_from=gitee_search",
      }
    `)
  })
  it('query for mdn', async () => {
    const result = await query('https://developer.mozilla.org/api/v1/search?q=worker&locale=zh-CN')
    expect(result).toMatchInlineSnapshot('[]')
  })
  it('query for linuxcool', async () => {
    const result = await query('https://www.linuxcool.com/rm')
    expect(result && result[0]).toMatchInlineSnapshot(`
      {
        "description": "rm命令来自英文单词“remove”的缩写，中文译为“消除”，其功能是用于删除文件或目录，一次可以删除多个文件，或递归删除目录及其内的所有子文件。",
        "title": "rm命令 – 删除文件或目录",
        "url": "https://www.linuxcool.com/rm",
      }
    `)
  })
  it('query for juejin', async () => {
    const result = await query('https://api.juejin.cn/search_api/v1/search?query=vuejs')
    expect(result).toMatchInlineSnapshot('[]')
  })
})
