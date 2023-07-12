import fetch from "node-fetch";
import { parse } from "node-html-parser";

// Ah! So the await keyword means that this function will return IMMEDIENTLY
// with a promise. That promise will hold the data I need. Or I can use it freely
// Inside of the function! (easier)
async function fetch_champion_html(champion) {

    const resp = await fetch(`https://leagueoflegends.fandom.com/wiki/${champion}/LoL`);
    const text = await resp.text();

    const data = parse(text);
    console.log(data.querySelector("#Armor_Fizz_lvl").toString());
    console.log(data.querySelector("#Armor_Fizz").toString());

    return;
}
const data = fetch_champion_html("Fizz");

// what should a champion look like?