import { isNPM, isYarn } from './utils'

function main() {
  if (isYarn()) {
    import('./yarn_sh')
    return
  }

  if (isNPM()) {
    import('./npm_sh')
    return
  }
}

main()