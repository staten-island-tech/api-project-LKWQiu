const APIkey = "RGAPI-2df9e548-9c44-4869-b8e3-53e91bb7aacd"

const DOMSelectors = {
    form1: document.getElementById("form1"),
    PlayerName: document.getElementById("PlayerName"),
    PlayerTag: document.getElementById("PlayerTag"),
    app: document.getElementById("app")
}

function callvalue(){
    const callPlayerName = DOMSelectors.PlayerName.value;
    const callPlayerTag = DOMSelectors.PlayerTag.value;

    return{
        Name: callPlayerName,
        Tag: callPlayerTag,
    };
};
function NameUrlGet(x){
    const PlayerNameURL = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${x.PlayerName}/${x.PlayerTag}?api_key=${APIkey}`

}
DOMSelectors.form1.addEventListener("submit", function(event){
    event.preventDefault();
    const namecall = callvalue();
    console.log(namecall);
    const errorfixer = NameUrlGet
    console.log(errorfixer)
    async function getData(errorfixer){
        try {
            const response = await fetch(errorfixer);
            if(response.status != 200) {
                console.log("works");
            }
            console.log(response)
            const data = await response.json();
        } 
        catch (error) {
            console.log("no workie")
        }
    };
    getData()
});





