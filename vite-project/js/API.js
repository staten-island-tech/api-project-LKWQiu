const DOMSelectors = {
    form1: document.getElementById("form1"),
    PlayerName: document.getElementById("PlayerName"),
    PlayerTag: document.getElementById("PlayerTag"),
    app: document.getElementById("app")
}
const APIkey = "RGAPI-2df9e548-9c44-4869-b8e3-53e91bb7aacd"
const PlayerNameURL = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${PlayerName}/${PlayerTag}?api_key=${APIkey}`

function callvalue(){
    const callPlayerName = DOMselectors.PlayerName.value;
    const callPlayerTag = DOMselectors.PlayerTag.value;

    return{
        Name: callPlayerName,
        Tag: callPlayerTag,
    }
}

DOMSelectors.form1.addEventListener("submit", function(){
    console("button")
  async function getData(PlayerNameURL){
    try {
        const response = await fetch(PlayerNameURL);
        if(response.status != 200) {
            console.log("works");
        }
        console.log(response)
        const data = await response.json();
    } catch (error) {
        console.log("no workie")
    }
}
getData(PlayerNameURL);

});


