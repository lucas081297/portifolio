const fs = require('fs');
const repos = require('./repos.json')
const file = './src/app/projetos/languages.json'

var languages = []


const fetchLanguages = async(url,id) => {
    try {
        const res = await fetch(url,{
            method: 'GET',
            headers: {
                Authorization: process.env.GITHUB_TOKEN,
                "Content-Type" : "application/json"
            }
        })
        const data = await res.json()
        return languages.push(JSON.stringify({id:id, data: data}))
    } catch (e) {
        console.error(e)
    }
}

async function main() {
    await repos.map(repo => fetchLanguages(repo.languages_url,repo.id))
    fs.writeFile(file,JSON.stringify(languages),(err)=> {
        if(err){
            console.error(err)
        }
        console.log('OK')
    })
}

main()