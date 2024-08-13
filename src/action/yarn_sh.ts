import { execa } from "execa"

async function start() {
  try {
    // 设置 yarn registry
    execa`yarn config set registry https://registry.npmmirror.com`
    console.log("yarn registry 已成功设置为 https://registry.npmmirror.com")

    execa`yarn config set disturl https://npmmirror.com/mirrors/node`
    console.log("yarn disturl 已成功设置为 https://registry.npmmirror.com")

    execa`yarn config set sass_binary_site https://registry.npmmirror.com/mirrors/node-sass`
    console.log(
      "yarn sass_binary_site 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set electron_mirror https://registry.npmmirror.com/mirrors/electron`
    console.log(
      "yarn electron_mirror 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set puppeteer_download_host https://registry.npmmirror.com/mirrors`
    console.log(
      "yarn puppeteer_download_host 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set chromedriver_cdnurl https://registry.npmmirror.com/mirrors/chromedriver`
    console.log(
      "yarn chromedriver_cdnurl 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set operadriver_cdnurl https://registry.npmmirror.com/mirrors/operadriver`
    console.log(
      "yarn operadriver_cdnurl 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set phantomjs_cdnurl https://registry.npmmirror.com/mirrors/phantomjs`
    console.log(
      "yarn phantomjs_cdnurl 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set selenium_cdnurl https://registry.npmmirror.com/mirrors/selenium`
    console.log(
      "yarn selenium_cdnurl 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set node_inspector_cdnurl https://registry.npmmirror.com/mirrors/node-inspector`
    console.log(
      "yarn node_inspector_cdnurl 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn config set sentrycli_cdnurl https://registry.npmmirror.com/mirrors/sentry-cli`
    console.log(
      "yarn sentrycli_cdnurl 已成功设置为 https://registry.npmmirror.com",
    )

    execa`yarn cache clean`
    console.log("yarn 缓存已清空")
  } catch (e) {
    console.error(e)
  }
}

start()
