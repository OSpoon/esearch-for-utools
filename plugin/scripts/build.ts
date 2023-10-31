import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { cwd } from 'node:process'

import { createPackage } from 'asar'
import gzip from 'node-gzip'

async function starter() {
  const { version } = await import('../package.json')
  let pluginJSON = await import('../plugin.json')
  pluginJSON.default.version = version;
  writeFileSync(join("plugin.json"), JSON.stringify(pluginJSON.default, null, 2))
  const { pluginName } = pluginJSON

  // 1. asar 打包
  const asarDest = join('output', `${pluginName}-${version}.asar`)
  await createPackage(cwd(), asarDest)

  // 2. 压缩
  const upx = join('output', `${pluginName}-${version}.upx`)
  const compressed = await gzip.gzip(readFileSync(asarDest))
  writeFileSync(upx, compressed)

  console.log('done.')
}

starter()
