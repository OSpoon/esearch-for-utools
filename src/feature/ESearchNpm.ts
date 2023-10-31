import { query } from '../request'

export default {
  mode: 'list',
  args: {
    search: async (action: any, searchWord: any, callbackSetList: any) => {
      const url = `https://www.npmjs.com/search?q=${searchWord}`
      const result = (await query(url)) || []
      callbackSetList([
        ...result,
        {
          title: '查看更多',
          description: `点击后将访问: ${url}`,
          url,
        },
      ])
    },
    select: (action: any, itemData: { url: any }) => {
      utools.hideMainWindow()
      const url = itemData.url
      utools.shellOpenExternal(url)
    },
    placeholder: 'Search packages',
  },
}
