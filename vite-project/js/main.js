import '../css/style.css'

const authorname = 'dickens'
const URL = `https://openlibrary.org/search.json?author=${authorname}&sort=new`

async function getData(URL){
    try {
        const response = await fetch(URL);
        if(response.status != 200) {
            console.log("works")
        }
        console.log(response)
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log("No work");
    }
}
getData(URL);