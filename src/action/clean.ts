import { execa } from "execa"

export async function clean() {
  try {
    await execa`rm ~/.npmrc`
    await execa`npm cache clean --force`
  } catch (e) {
    console.error(e)
  }
}
