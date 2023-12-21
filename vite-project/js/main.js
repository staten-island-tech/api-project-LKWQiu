import '../css/style.css'

const DomSelectors = {
    apps : document.getElementById("app"),
    authInput: document.getElementById("AuthInput"),
    submit: document.getElementById("submit"),
    form1 : document.getElementById("form1"),
};


DomSelectors.form1.addEventListener("submit", function(event){
    event.preventDefault();

    const authorname = DomSelectors.authInput.value;
    const URL = `https://openlibrary.org/search.json?author=${authorname}&sort=new`
    console.log(URL)

    console.log("duhrrr")

    function RemoveCard(event){
        if(event.target.classList.contains("remove")){
            event.target.all(".Novel").remove()
        }
    }

    function BookPrint(book){
        const BookCard = `
        <div class="BookCards">
            <p>Novel: ${book.title}</p>
            <p>Author: ${book.author_name}</p>
            <p>Publish Date: ${book.publish_date}</p>
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

    RemoveCard()
});