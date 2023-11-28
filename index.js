const process = require('process');
const { execSync } = require('child_process');

try {
  // 打印 GitHub 环境变量
  console.log(`GITHUB_WORKFLOW: ${process.env.GITHUB_WORKFLOW}`);
  console.log(`GITHUB_RUN_ID: ${process.env.GITHUB_RUN_ID}`);
  console.log(`GITHUB_RUN_NUMBER: ${process.env.GITHUB_RUN_NUMBER}`);
  console.log(`GITHUB_ACTION: ${process.env.GITHUB_ACTION}`);
  console.log(`GITHUB_ACTIONS: ${process.env.GITHUB_ACTIONS}`);
  console.log(`GITHUB_ACTOR: ${process.env.GITHUB_ACTOR}`);
  console.log(`GITHUB_REPOSITORY: ${process.env.GITHUB_REPOSITORY}`);
  console.log(`GITHUB_EVENT_NAME: ${process.env.GITHUB_EVENT_NAME}`);
  console.log(`GITHUB_EVENT_PATH: ${process.env.GITHUB_EVENT_PATH}`);
  console.log(`GITHUB_WORKSPACE: ${process.env.GITHUB_WORKSPACE}`);
  console.log(`GITHUB_SHA: ${process.env.GITHUB_SHA}`);
  console.log(`GITHUB_REF: ${process.env.GITHUB_REF}`);
  console.log(`GITHUB_HEAD_REF: ${process.env.GITHUB_HEAD_REF}`);
  console.log(`GITHUB_BASE_REF: ${process.env.GITHUB_BASE_REF}`);
  console.log(`GITHUB_SERVER_URL: ${process.env.GITHUB_SERVER_URL}`);
  console.log(`GITHUB_API_URL: ${process.env.GITHUB_API_URL}`);
  console.log(`GITHUB_GRAPHQL_URL: ${process.env.GITHUB_GRAPHQL_URL}`);

} catch (error) {
  console.error(`执行错误: ${error}`);
}


 // 打印当前目录的树状结构
  console.log('当前目录的树状结构:');
  const treeOutput = execSync('tree').toString();  // 注意：'tree' 命令需要在运行环境中可用
  console.log(treeOutput);