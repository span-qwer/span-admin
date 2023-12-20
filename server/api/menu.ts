import fs from 'fs'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const pagesDir = path.resolve(__dirname, '../../pages/admin')

export default defineEventHandler(async event => {
  const files = fs.readdirSync(pagesDir)
  const menu = files.map(file => {
    const [name] = file.split('.')
    return {
      name,
      path: name == 'index' ? '/admin' : '/admin/' + name
    }
  })
  return {
    menu
  }
})
