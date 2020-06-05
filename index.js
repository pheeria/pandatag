const { Octokit } = require('@octokit/rest')

const octokit = new Octokit({
  auth: 'db688105a827bc669da83cd5e10f8ead66b025cb',
})

async function run() {
  const { data } = await octokit.repos.listCommits({
    owner: 'deliveryhero',
    repo: 'pd-microfrontend',
    per_page: 5,
  })

  // console.log(data[0].commit.message.split('\n')[0].slice(0, -7))

  data.forEach((d) => console.log(d.commit.message.split('\n')[0].slice(0, -7)))
}

run()
