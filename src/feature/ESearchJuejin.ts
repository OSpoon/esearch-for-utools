import { query } from '../request'

export default {
  mode: 'list',
  args: {
    search: async (action: any, searchWord: any, callbackSetList: any) => {
      const url = `https://api.juejin.cn/search_api/v1/search?query=${searchWord}`
      const result = await query(url, { api: true })
      callbackSetList(result)
    },
    select: (action: any, itemData: { url: any }) => {
      utools.hideMainWindow()
      const url = itemData.url
      utools.shellOpenExternal(url)
    },
    placeholder: '搜索稀土掘金',
  },
}
