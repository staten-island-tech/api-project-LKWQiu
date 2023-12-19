import '../css/style.css'

const DomSelectors = [
    document.getElementById("app"),
]

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

        data.docs.forEach(data => {
        BookPrint(data)    
        });

    } catch (error) {
        console.log("No work");
    }
}
getData(URL);

function BookPrint(book){
    const BookCard = `
    <div class="BookCards">
        <p>Novel: ${book.title}</p>
        <p>Author: ${book.author_name}</p>
        <p>Publish Date: ${book.publish_date}</p>


    </div>
    `;
    document.getElementById("app").insertAdjacentHTML("beforeend", BookCard);
};

