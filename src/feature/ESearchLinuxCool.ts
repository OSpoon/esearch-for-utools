import { query } from '../request'

export default {
  mode: 'list',
  args: {
    search: async (action: any, searchWord: any, callbackSetList: any) => {
      const url = `https://www.linuxcool.com/${searchWord}`
      const result = await query(url)
      callbackSetList(result)
    },
    select: (action: any, itemData: { url: any }) => {
      utools.hideMainWindow()
      const url = itemData.url
      utools.shellOpenExternal(url)
    },
    placeholder: '请输入一个命令',
  },
}
