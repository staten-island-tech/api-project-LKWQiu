import '../css/style.css'

const DomSelectors = {
    document.getElementById
}

const authorname = 'dickens'
const URL = `https://openlibrary.org/search.json?author=${authorname}&sort=new`

async function getData(URL){
    try {
        const response = await fetch(URL);
        if(response.status != 200) {
            console.log("works")
        }
        const data = await response.json();
        console.log(data)
        data.forEach(data => {
            BookPrint(data.docs)
        });
        const object = document.querySelector("h1").textContent=data.docs

    } catch (error) {
        console.log("No work");
    }
}
getData(URL);

function BookPrint(book){
    const BookCard = `
    <div class="BookCards">
        <p>Name: ${book.title}</p>
    </div>
    `;
    document.getElementById("app").insertAdjacentHTML("beforeend", BookCard);
};

