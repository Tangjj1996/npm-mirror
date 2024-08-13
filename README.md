# Mirror

> 快速设置 npmrc 镜像环境，支持生成 .npmrc 和 mirror.sh

|文件名|作用|说明|
|--|--|--|
|.npmrc|npm(yarn、pnpm) 当前目录的下载地址|配合 npm script 使用|
|mirror.sh|手动设置当前终端的下载地址|终端中使用|

## 参数说明
|命令|说明|
|--|--|
|run|在终端中静默直接运行，自动判断当前使用的包管理器（优先 pnpm -> yarn -> npm）|
|gen -n --npmrc|生成 .npmrc 文件|
|gen -m --mirror|生成 mirror.sh 文件|
|clean|重置|