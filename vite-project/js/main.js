import '../css/style.css'

const DomSelectors = {
    apps : document.getElementById("app"),
    authInput: document.getElementById("AuthInput"),
    submit: document.getElementById("submit"),
    remove: document.getElementById("remove"),
    form1 : document.getElementById("form1"),
};

const URL = `https://openlibrary.org/search.json?author=n/a&sort=new`

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

function BookPrint(book){
    const BookCard = `
    <div class="BookCards">
        <h3>Novel: ${book.title}</h3>
        <p>Author: ${book.author_name}</p>
        <p>Publish Date: ${book.publish_date}</p>
        <a href="https://openlibrary.org/${book.key}" target="_blank">Read More</a>  
    </div>`;
    document.getElementById("app").insertAdjacentHTML("beforeend", BookCard);
    // div in a div = wtv
};

DomSelectors.form1.addEventListener("submit", function(event){
    event.preventDefault();

    const authorname = DomSelectors.authInput.value;
    const URL = `https://openlibrary.org/search.json?author=${authorname}&sort=new`
    console.log(URL)

    console.log("duhrrr")

    function clearParent() {
        DomSelectors.apps.innerHTML = "";
    };
    clearParent()

    
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
});


