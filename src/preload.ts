import ESearchGitee from './feature/ESearchGitee'
import ESearchJuejin from './feature/ESearchJuejin'
import ESearchLinuxCool from './feature/ESearchLinuxCool'
import ESearchMdn from './feature/ESearchMdn'
import ESearchNpm from './feature/ESearchNpm'

globalThis.exports = {
  // ✅ DOM
  'ESEARCH-NPM': ESearchNpm,
  // ✅ DOM
  'ESEARCH-Gitee': ESearchGitee,
  // ✅ API
  'ESEARCH-Juejin': ESearchJuejin,
  // ✅ DOM
  'ESEARCH-LinuxCool': ESearchLinuxCool,
  // ✅ API
  'ESEARCH-MDN': ESearchMdn,
}
