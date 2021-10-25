const linksSociamMedia = {
  github: 'Jrp1m3n7a',
  youtube: 'channel/UCtcVKjdz2ps0w3yxDcOK46A',
  facebook: 'junior.pimenta.92',
  twitter: 'juniorpimenta',
  instagram: 'jun1orp1m3n7a'
}

function changeSociaMLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSociamMedia[social]}`
   
  }
}
changeSociaMLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSociamMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      imgUser.src = data.avatar_url
      gitUser.textContent = data.login
    })
}

getGitHubProfileInfos()
