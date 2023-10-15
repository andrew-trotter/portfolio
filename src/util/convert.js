import sharp from 'sharp'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(import.meta.url)
const directory = path.resolve(__dirname, '../../../public/images')

async function main() {
  const images = await fs.readdir(directory)

  images.map( async (image) => {
    if ((image.includes('.png') || image.includes('.jpeg'))) {
      const fileName = `${directory}/${image.slice(0, image.indexOf('.'))}`

      await sharp(`${directory}/${image}`)
        .resize(200) // small width
        .toFile(`${fileName}-small.png`)

      await sharp(`${directory}/${image}`)
        .resize(450) //med width
        .toFile(`${fileName}-med.png`)

      await sharp(`${directory}/${image}`)
        .resize(900) //large width
        .toFile(`${fileName}-large.png`)
    }
  })
}

await main()
