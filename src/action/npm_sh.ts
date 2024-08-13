import { execa } from "execa"

async function start() {
  try {
    // 设置 npm registry
    await execa("npm", ["set", "registry", "https://registry.npmmirror.com"])
    console.log("npm registry 已成功设置为 https://registry.npmmirror.com")

    // 设置 node-gyp 编译依赖的 node 源码镜像
    execa`npm set disturl https://npmmirror.com/mirrors/node`
    console.log(
      "node-gyp disturl 已成功设置为 https://npmmirror.com/mirrors/node",
    )

    // 可选设置其他二进制包的镜像
    execa`npm set sass_binary_site https://registry.npmmirror.com/mirrors/node-sass`

    console.log(
      "sass_binary_site 已成功设置为 https://registry.npmmirror.com/mirrors/node-sass",
    )

    execa`npm set electron_mirror https://registry.npmmirror.com/mirrors/electron`
    console.log(
      "electron_mirror 已成功设置为 https://registry.npmmirror.com/mirrors/electron/",
    )

    execa`npm set puppeteer_download_host https://registry.npmmirror.com/mirrors`
    console.log(
      "puppeteer_download_host 已成功设置为 https://registry.npmmirror.com/mirrors",
    )

    execa`npm set chromedriver_cdnurl https://registry.npmmirror.com/mirrors/chromedriver`
    console.log(
      "chromedriver_cdnurl 已成功设置为 https://registry.npmmirror.com/mirrors/chromedriver",
    )

    execa`npm set operadriver_cdnurl https://registry.npmmirror.com/mirrors/operadriver`
    console.log(
      "operadriver_cdnurl 已成功设置为 https://registry.npmmirror.com/mirrors/operadriver",
    )

    execa`npm set phantomjs_cdnurl https://registry.npmmirror.com/mirrors/phantomjs`
    console.log(
      "phantomjs_cdnurl 已成功设置为 https://registry.npmmirror.com/mirrors/phantomjs",
    )

    execa`npm set selenium_cdnurl https://registry.npmmirror.com/mirrors/selenium`
    console.log(
      "selenium_cdnurl 已成功设置为 https://registry.npmmirror.com/mirrors/selenium",
    )

    execa`npm set node_inspector_cdnurl https://registry.npmmirror.com/mirrors/node-inspector`
    console.log(
      "node_inspector_cdnurl 已成功设置为 https://registry.npmmirror.com/mirrors/node-inspector",
    )

    execa`npm set sentrycli_cdnurl https://registry.npmmirror.com/mirrors/sentry-cli`
    console.log(
      "sentrycli_cdnurl 已成功设置为 https://registry.npmmirror.com/mirrors/sentry-cli",
    )

    // 清空缓存
    execa`npm cache clean --force`
    console.log("npm 缓存已成功清空")
  } catch (e) {
    console.error(e)
  }
}

start()
