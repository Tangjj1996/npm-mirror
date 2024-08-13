const userAgent = process.env.npm_config_user_agent || ""

export const isPNPM = () => {
  return userAgent.includes("pnpm")
}

export const isYarn = () => {
  return userAgent.includes("yarn")
}

export const isNPM = () => {
  return userAgent.includes("npm") && !isPNPM() && !isYarn()
}
