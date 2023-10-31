import { query } from '../request'

export default {
  mode: 'list',
  args: {
    search: async (action: any, searchWord: any, callbackSetList: any) => {
      const url = `https://developer.mozilla.org/api/v1/search?q=${searchWord}&locale=zh-CN`
      const result = await query(url, { api: true })
      callbackSetList(result)
    },
    select: (action: any, itemData: { url: any }) => {
      utools.hideMainWindow()
      const url = itemData.url
      utools.shellOpenExternal(url)
    },
    placeholder: 'Resources for Developers, by Developers',
  },
}
