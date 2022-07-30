Accept: application/vnd.github.v3+json
const form = document.getElementById("github-form")
form.addEventListener("submit", (event) =>{
    event.preventDefault()

   // event.target[0].value

    fetch(`https://api.github.com/search/users?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {

    response.items.map(item =>{
        const li = document.createElement("li")
        const h2 = document.createElement("h2")
        h2.textContent = item.login

        h2.addEventListener("click", e => showUserRepos(item.login, e))
        const img = document.createElement("img")
        img.src = image.avata_url

        li.append(h2,img)
        userList.append(li)
    })

    })
    form.reset()
})