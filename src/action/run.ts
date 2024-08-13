import { isNPM, isPNPM, isYarn } from "../utils"

export function run() {
  if (isPNPM()) {
    return
  }

  if (isYarn()) {
    import("./yarn_sh")
    return
  }

  if (isNPM()) {
    import("./npm_sh")
    return
  }
}
