import '../css/style.css'

const DomSelectors = {
    apps : document.getElementById("app"),
    authInput: document.getElementById("AuthInput"),
    BookInput: document.getElementById("BookInput"),
    submit: document.getElementById("submit"),
    submit2: document.getElementById("submit2"),
    remove: document.getElementById("remove"),
    form1 : document.getElementById("form1"),
    form2 : document.getElementById("form2"),
};


/* DomSelectors.form1.addEventListener("submit", function(event){
    event.preventDefault();

    const authorname = DomSelectors.authInput.value;
    const URL = `https://openlibrary.org/search.json?author=${authorname}&sort=new`
    console.log(URL)

    console.log("duhrrr")

    function clearParent() {
        DomSelectors.apps.innerHTML = "";
    };
    clearParent()

    function BookPrint(book){
        const BookCard = `
        <div class="BookCards">
            <p>Novel: ${book.title}</p>
            <p>Author: ${book.author_name}</p>
            <p>Publish Date: ${book.publish_date}</p>
            <p>Publisher: ${book.publisher}</p>

            <a href="https://openlibrary.org/${book.key}" target="_blank">Read More</a>  
        </div>`;
        document.getElementById("app").insertAdjacentHTML("beforeend", BookCard);
        // div in a div = wtv
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
}); */

DomSelectors.form2.addEventListener("submit2", function(event){
event.preventDefault();

    const bookname = DomSelectors.BookInput.value;
    const URL = `https://openlibrary.org/search.json?q=${bookname}`
    console.log(URL)

    console.log("duhrrr2")

//dom manipulate cards
 
    async function getData(URL){
        try {
            const response = await fetch(URL);
            if(response.status != 200) {
                console.log("works")
            }
            const data = await response.json();
            console.log(data)

    
        } catch (error) {
            console.log("No work");
        }
    };
    
    getData(URL);
});