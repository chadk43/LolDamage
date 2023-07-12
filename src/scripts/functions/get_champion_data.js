

// This function is asyncronous, so it returns immediently as a promise
// Oh... I can't use fetch... wtf?
async function fetch_champion_html(champion) {


    const resp = await fetch(`https://leagueoflegends.fandom.com/wiki/${champion}/LoL`);
    const data = await resp.json();
    return data;

}
//Right now these are blocking - gonna want to make this asyncronous by putting it in a function.
const data = fetch_champion_html("Annie");
console.log(data);

//How do I run this? *** CURRENT ***