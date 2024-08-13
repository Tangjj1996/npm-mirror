import fs from "fs-extra"
import path from "path"

export async function gen(options: any) {
  const { npmrc, mirror } = options
  const npmrcPath = path.resolve(__dirname, "../", ".temp", ".npmrc")
  const mirrorPath = path.resolve(__dirname, "../", ".temp", "mirror.sh")
  const curPath = process.cwd()
  const npmrcDest = path.resolve(curPath, ".npmrc")
  const mirrorDest = path.resolve(curPath, "mirror.sh")

  try {
    if (npmrc) {
      await fs.copyFile(npmrcPath, npmrcDest)
    }
    if (mirror) {
      await fs.copyFile(mirrorPath, mirrorDest)
    }
  } catch (e) {
    console.error(e)
  }
}
