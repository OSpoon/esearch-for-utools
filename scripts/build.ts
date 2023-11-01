import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'

import { createPackage } from 'asar'
import gzip from 'node-gzip'

const root = cwd()

async function syncVersion() {
  const { version } = await import('../package.json')
  const pluginJSON = await import('../plugin/plugin.json')
  pluginJSON.default.version = version
  writeFileSync(join(root, 'plugin/plugin.json'), JSON.stringify(pluginJSON.default, null, 2))
  return pluginJSON
}

async function starter() {
  const { pluginName, version } = await syncVersion()

  // 1. asar 打包
  const asarDest = join(root, 'output', `${pluginName}-${version}.asar`)
  await createPackage(join(root, 'plugin'), asarDest)

  // 2. 压缩
  const upx = join(root, 'output', `${pluginName}-${version}.upx`)
  const compressed = await gzip.gzip(readFileSync(asarDest))
  writeFileSync(upx, compressed)

  console.log('upx build done.')
}

starter()
