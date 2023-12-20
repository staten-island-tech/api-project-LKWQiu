import '../css/style.css'

const DomSelectors = {
    apps : document.getElementById("app"),
    authInput: document.getElementById("AuthInput"),
    submit: document.getElementById("submit"),
    form1 : document.getElementById("form1"),
};

const authorname = "clare"
const URL = `https://openlibrary.org/search.json?author=${authorname}&sort=new`

/* function callVals(){
    const authornames = DomSelectors.authInput.value;

    return{
        authorname: authornames,
    };
};

DomSelectors.form1.addEventListener("submit", function(event){
    event.preventDefault();
    console.log(callVals)
    console.log("duhrrr")

});
 */


function BookPrint(book){
    const BookCard = `
    <div class="BookCards">
        <p>Novel: ${book.title}</p>
        <p>Author: ${book.author_name}</p>
        <p>Publish Date: ${book.publish_date}</p>
    </div>`;
    document.getElementById("app").insertAdjacentHTML("beforeend", BookCard);
};

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
};

getData(URL);

 

