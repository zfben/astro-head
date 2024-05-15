const exec = require('node:child_process').execSync
const version = require('./package.json').version

async function run(cmd) {
  console.log(cmd)
  await exec(cmd, { stdio: 'inherit' })
}

async function publish() {
  await run(
    `npm publish --access public`
  )

  await run(`git commit -am 'release ${version}'`)

  await run(`git tag v${version}`)

  await run('git push && git push --tags')
}

publish()
