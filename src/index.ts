import { Command } from "commander"
import { run } from "./action/run"
import { gen } from "./action/gen"
import { clean } from "./action/clean"

const program = new Command()

program.command("run").action(run)

program
  .command("gen")
  .option("-n --npmrc", "生成 .npmrc 文件")
  .option("-m --mirror", "生成 mirror.sh 文件")
  .action(gen)

program.command("clean").action(clean)

// 解析命令行参数
program.parse(process.argv)
