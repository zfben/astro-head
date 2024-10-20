const exec = require('node:child_process').execSync
const version = require('./package.json').version

function run(cmd) {
  console.log(cmd)
  exec(cmd, { stdio: 'inherit' })
}

run(`npm run build`)

run(
`npm publish --access public`
)

run(`git commit -am 'release ${version}'`)

run(`git tag v${version}`)

run('git push && git push --tags')
