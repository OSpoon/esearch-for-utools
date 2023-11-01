import { describe, expect, it } from 'vitest'
import { query } from '../plugin/src/request'

describe('should', () => {
  it('query for npm', async () => {
    const result = await query('https://www.npmjs.com/search?q=CodeGenius')
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "description": "基于 CodeGenius 的 Clear 插件",
          "title": "@codegenius/clear-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/clear-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Format 插件",
          "title": "@codegenius/format-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/format-plugin",
        },
        {
          "description": "基于 CodeGenius 的 impsort 插件",
          "title": "@codegenius/impsort-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/impsort-plugin",
        },
        {
          "description": "基于 CodeGenius 的 template 插件",
          "title": "@codegenius/template-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/template-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Registry 插件",
          "title": "@codegenius/registry-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/registry-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Depcheck 插件",
          "title": "@codegenius/depcheck-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/depcheck-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Lighthouse 插件",
          "title": "@codegenius/lighthouse-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/lighthouse-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Hooks 插件",
          "title": "@codegenius/hooks-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/hooks-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Quantity 插件",
          "title": "@codegenius/quantity-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/quantity-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Verify 插件",
          "title": "@codegenius/verify-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/verify-plugin",
        },
        {
          "description": "基于 CodeGenius 的 git-user 插件",
          "title": "@codegenius/git-user-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/git-user-plugin",
        },
        {
          "description": "基于 CodeGenius 的 Create 插件",
          "title": "@codegenius/create-plugin",
          "url": "https://www.npmjs.com/package/@codegenius/create-plugin",
        },
        {
          "description": "CodeGenius's command line tools",
          "title": "code-genius",
          "url": "https://www.npmjs.com/package/code-genius",
        },
      ]
    `)
  })
  it('query for gitee', async () => {
    const result = await query('https://search.gitee.com?q=vue&type=repository')
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "description": "vue",
          "title": "Layui/layui-vue",
          "url": "https://gitee.com/layui/layui-vue?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "GavinZhulei/vue-form-making",
          "url": "https://gitee.com/gavinzhulei/vue-form-making?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "CcSimple/vue-plugin-hiprint",
          "url": "https://gitee.com/CcSimple/vue-plugin-hiprint?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "DevUI/vue-devui",
          "url": "https://gitee.com/devui/vue-devui?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "奔跑的面条/vue-big-screen-plugin",
          "url": "https://gitee.com/MTrun/vue-big-screen-plugin?_from=gitee_search",
        },
        {
          "description": "vue",
          "title": "gyy/vue-amap",
          "url": "https://gitee.com/guyangyang/vue-amap?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "zouyaoji/vue-cesium",
          "url": "https://gitee.com/zouyaoji/vue-cesium?_from=gitee_search",
        },
        {
          "description": undefined,
          "title": "pengxiaotian/datav-vue",
          "url": "https://gitee.com/pengxiaotian/datav-vue?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "浙江易网科技股份有限公司/vue-automation",
          "url": "https://gitee.com/eoner/vue-automation?_from=gitee_search",
        },
        {
          "description": "Vue",
          "title": "vdpAdmin/Vue低代码可视化表单",
          "url": "https://gitee.com/vdpadmin/variant-form?_from=gitee_search",
        },
        {
          "description": "vue",
          "title": "xuliangzhan/vxe-table",
          "url": "https://gitee.com/xuliangzhan_admin/vxe-table?_from=gitee_search",
        },
      ]
    `)
  })
  it('query for mdn', async () => {
    const result = await query('https://developer.mozilla.org/api/v1/search?q=worker&locale=zh-CN')
    expect(result).toMatchInlineSnapshot('[]')
  })
  it('query for linuxcool', async () => {
    const result = await query('https://www.linuxcool.com/rm')
    expect(result).toMatchInlineSnapshot(`
      [
        {
          "description": "rm命令来自英文单词“remove”的缩写，中文译为“消除”，其功能是用于删除文件或目录，一次可以删除多个文件，或递归删除目录及其内的所有子文件。",
          "title": "rm命令 – 删除文件或目录",
          "url": "https://www.linuxcool.com/rm",
        },
      ]
    `)
  })
  it('query for juejin', async () => {
    const result = await query('https://api.juejin.cn/search_api/v1/search?query=小鑫同学')
    expect(result).toMatchInlineSnapshot('[]')
  })
})
