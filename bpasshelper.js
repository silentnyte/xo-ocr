var suggestionContainer = document.getElementById("suggestions");

document.getElementById("name").addEventListener("input", getSuggestions);
document.getElementById("level").addEventListener("click", getSuggestions);

function getSuggestions() {
  if (document.getElementById("name").value != "") {
    let results = bpLevels.filter(x => x.Name.toLowerCase().includes(document.getElementById("name").value.toLowerCase()));
    if (results !== undefined){
      let resultString = "";
      let level = 0;
      let levelType = "Base";
      results.forEach(element => {
        level = element.Level;
        levelType = element.BP;
        resultString += element.Name + " - " + element.Level + " - " + element.BP + "<br />";
      });
      if(document.getElementById("levelType").value == "") {
        document.getElementById("level").value = level;
        document.getElementById("levelType").value = levelType;
      }
      suggestionContainer.innerHTML = "Suggestions: </br>" + resultString;
    } else {
      suggestionContainer.innerHTML = "";
    }
  }
};

var bpLevels = [
 {
   "Name": "Summator",
   "Level": 1,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Maja Lindholm",
   "Level": 1,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Summator",
   "Level": 2,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Corner railing",
   "Level": 3,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Yellow gloss",
   "Level": 4,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Small digger side",
   "Level": 5,
   "BP": "BP01-Founders"
 },
 {
   "Name": "100 coins",
   "Level": 6,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Sloped platform",
   "Level": 7,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Array",
   "Level": 8,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Array",
   "Level": 9,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Small platform",
   "Level": 10,
   "BP": "BP01-Founders"
 },
 {
   "Name": "CK Loader",
   "Level": 11,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Corrosive",
   "Level": 12,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Railing",
   "Level": 13,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Large platform",
   "Level": 14,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Array ST",
   "Level": 15,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Array ST",
   "Level": 16,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Service ladder",
   "Level": 17,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Digger side",
   "Level": 18,
   "BP": "BP01-Founders"
 },
 {
   "Name": "100 coins",
   "Level": 19,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Physical hazard",
   "Level": 20,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Digger hull",
   "Level": 20,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Blockchain",
   "Level": 21,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Blockchain' plasma cutter blueprint.",
   "Level": 22,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Cold storage",
   "Level": 23,
   "BP": "BP01-Founders"
 },
 {
   "Name": "New background, new logo",
   "Level": 24,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Small digger side",
   "Level": 25,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Flammable solid",
   "Level": 26,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Sloped platform",
   "Level": 27,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Verifier",
   "Level": 28,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Verifier' radar blueprint.",
   "Level": 29,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Cold Exhaust",
   "Level": 30,
   "BP": "BP01-Founders"
 },
 {
   "Name": "External tank",
   "Level": 31,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Small platform",
   "Level": 32,
   "BP": "BP01-Founders"
 },
 {
   "Name": "100 coins",
   "Level": 33,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Large platform",
   "Level": 34,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Bigram",
   "Level": 35,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Bigram' mechanical leg blueprint.",
   "Level": 36,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Exhaust system",
   "Level": 37,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Yellow grid",
   "Level": 38,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Digger side",
   "Level": 39,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Road work ahead",
   "Level": 40,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Traffic warning",
   "Level": 41,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Digger hull",
   "Level": 41,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Omnibox",
   "Level": 42,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Omnibox' cabin blueprint.",
   "Level": 43,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Chief engineer",
   "Level": 44,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Flasher lamp",
   "Level": 45,
   "BP": "BP01-Founders"
 },
 {
   "Name": "CK Reach stacker",
   "Level": 46,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane side right",
   "Level": 47,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane side left",
   "Level": 47,
   "BP": "BP01-Founders"
 },
 {
   "Name": "100 coins",
   "Level": 48,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane hull right",
   "Level": 49,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane hull left",
   "Level": 49,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Trigger",
   "Level": 50,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Trigger' laser drill blueprint.",
   "Level": 51,
   "BP": "BP01-Founders"
 },
 {
   "Name": "CK Digger",
   "Level": 52,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Dark chrome",
   "Level": 53,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Side mirror left",
   "Level": 54,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Side mirror right",
   "Level": 54,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane plug right",
   "Level": 55,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane plug left",
   "Level": 55,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Do not block",
   "Level": 56,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane side right",
   "Level": 57,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane side left",
   "Level": 57,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Assembler",
   "Level": 58,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Assembler' electric gun blueprint.",
   "Level": 59,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Roadwork",
   "Level": 60,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Portrait of Torben Lindholm.",
   "Level": 61,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Alarm light",
   "Level": 62,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane hull right",
   "Level": 63,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane hull left",
   "Level": 63,
   "BP": "BP01-Founders"
 },
 {
   "Name": "100 coins",
   "Level": 64,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane plug right",
   "Level": 65,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane plug left",
   "Level": 65,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Detour",
   "Level": 66,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Bigram",
   "Level": 67,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane hull right",
   "Level": 68,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane hull left",
   "Level": 68,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Portrait of Eva Lindholm.",
   "Level": 69,
   "BP": "BP01-Founders"
 },
 {
   "Name": "LED Matrix",
   "Level": 70,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane side right",
   "Level": 71,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane side left",
   "Level": 71,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Founders only",
   "Level": 72,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane plug right",
   "Level": 73,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Crane plug left",
   "Level": 73,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Annihilator' drone blueprint.",
   "Level": 74,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Flashing beacon",
   "Level": 75,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Annihilator",
   "Level": 75,
   "BP": "BP01-Founders"
 },
 {
   "Name": "Pyralid",
   "Level": 1,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Surtr",
   "Level": 1,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Pyralid",
   "Level": 2,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Aura",
   "Level": 3,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Hangman",
   "Level": 4,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Bus panel",
   "Level": 5,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Call of the Flame",
   "Level": 6,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Minivan panel",
   "Level": 7,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Left firebrand",
   "Level": 8,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Right firebrand",
   "Level": 8,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Small thorn",
   "Level": 9,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "New logo",
   "Level": 10,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Medium thorn",
   "Level": 11,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Flayer",
   "Level": 12,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "100 in-game coins",
   "Level": 13,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Aura",
   "Level": 14,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Bus panel",
   "Level": 15,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Torch",
   "Level": 16,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Flayer",
   "Level": 17,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Sport",
   "Level": 18,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Large thorn",
   "Level": 19,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Chimney pipe",
   "Level": 20,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Minivan panel",
   "Level": 21,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Griffon",
   "Level": 22,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Griffon",
   "Level": 23,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Tachyon",
   "Level": 24,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Explorer",
   "Level": 25,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Reflector",
   "Level": 26,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "New background",
   "Level": 27,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Screener",
   "Level": 28,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "100 in-game coins",
   "Level": 29,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Small assembly section",
   "Level": 30,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Gravastar",
   "Level": 31,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Gravastar",
   "Level": 32,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Exhaust module",
   "Level": 33,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Large assembly section",
   "Level": 34,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Lightning strike",
   "Level": 35,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Reflector",
   "Level": 36,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "New logo",
   "Level": 37,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Cutter",
   "Level": 38,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "100 in-game coins",
   "Level": 39,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Screener",
   "Level": 40,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "New Dawn",
   "Level": 41,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Exhaust module",
   "Level": 42,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Small assembly section",
   "Level": 43,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "LED lights",
   "Level": 44,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Cutter",
   "Level": 45,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Solar XXV",
   "Level": 46,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Large assembly section",
   "Level": 47,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "100 in-game coins",
   "Level": 48,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Nova",
   "Level": 49,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Nova",
   "Level": 50,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Sigurd",
   "Level": 51,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Military truck fender left",
   "Level": 52,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Military truck fender right",
   "Level": 52,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "New background",
   "Level": 53,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Loader",
   "Level": 54,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "APC bumper right",
   "Level": 55,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "APC bumper left",
   "Level": 55,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Whirl",
   "Level": 56,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Whirl",
   "Level": 57,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Military truck fender left",
   "Level": 58,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Military truck fender right",
   "Level": 58,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "New logo",
   "Level": 59,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Small APC panel",
   "Level": 60,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Large APC panel",
   "Level": 61,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "100 in-game coins",
   "Level": 62,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Flail left",
   "Level": 63,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Flail right",
   "Level": 63,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Wolf howl",
   "Level": 64,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Check your resistance",
   "Level": 65,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "APC bumper right",
   "Level": 66,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "APC bumper left",
   "Level": 66,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Charger",
   "Level": 67,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Small APC panel",
   "Level": 68,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Tomahawk",
   "Level": 69,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Large APC panel",
   "Level": 70,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "100 in-game coins",
   "Level": 71,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Grilled lamp left",
   "Level": 72,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Grilled lamp right",
   "Level": 72,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Cohort",
   "Level": 73,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Cohort",
   "Level": 74,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Doomsday cars",
   "Level": 75,
   "BP": "BP02-Doomsday Cars"
 },
 {
   "Name": "Park Gate",
   "Level": 1,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Caligari",
   "Level": 1,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "A new stamp that displays your current level in the event.",
   "Level": 2,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Background for profile personalization",
   "Level": 3,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Scavenger Barricade",
   "Level": 4,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 5,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Steel Ball",
   "Level": 6,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Hermit",
   "Level": 7,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 8,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 9,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "New stamp",
   "Level": 10,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Red",
   "Level": 11,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Military van",
   "Level": 12,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 13,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 14,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "White horse",
   "Level": 15,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Hermit",
   "Level": 16,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Amusement container.",
   "Level": 17,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 18,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "New stamp",
   "Level": 19,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Ethereal",
   "Level": 20,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Mysterious Cube",
   "Level": 21,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 22,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 23,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "White nights",
   "Level": 24,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Hermit",
   "Level": 25,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 26,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 27,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "New stamp",
   "Level": 28,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Training armoured car",
   "Level": 29,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Large pin",
   "Level": 30,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 31,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 32,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Circus tent",
   "Level": 33,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Hermit",
   "Level": 34,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Amusement container.",
   "Level": 35,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 36,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "New background",
   "Level": 37,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Green",
   "Level": 38,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Training race car",
   "Level": 39,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 40,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 41,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Stardome",
   "Level": 42,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Nest",
   "Level": 43,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 44,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 45,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "New background",
   "Level": 46,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Straw",
   "Level": 47,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Target",
   "Level": 48,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 49,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 50,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Ruby pattern",
   "Level": 51,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Nest",
   "Level": 52,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Amusement container.",
   "Level": 53,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 54,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Pumpjack",
   "Level": 55,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Snowy",
   "Level": 56,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Slanted target",
   "Level": 57,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 58,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 59,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Warm sweater",
   "Level": 60,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Beholder",
   "Level": 61,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 62,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "125 pts. of building materials.",
   "Level": 63,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Gazholder",
   "Level": 64,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Fiery",
   "Level": 65,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Dynamometer",
   "Level": 66,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Builder's container.",
   "Level": 67,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "100 in-game coins",
   "Level": 68,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Light tile",
   "Level": 69,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Beholder' cabin recipe.",
   "Level": 70,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Amusement container.",
   "Level": 71,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "300 pts. of building materials.",
   "Level": 72,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Absorption sphere",
   "Level": 73,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Ferris wheel",
   "Level": 74,
   "BP": "BP03-Amusement Park"
 },
 {
   "Name": "Tempura",
   "Level": 1,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Nobuko",
   "Level": 1,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "A new stamp that displays your current level in the event.",
   "Level": 2,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Noppera-bo",
   "Level": 3,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Mengu bumper.",
   "Level": 4,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "New background",
   "Level": 5,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "100 in-game coins",
   "Level": 6,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Short orange lamp",
   "Level": 7,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Tempura",
   "Level": 8,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Camber",
   "Level": 9,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Aggression",
   "Level": 10,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Camber",
   "Level": 11,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Left sode",
   "Level": 12,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Right sode",
   "Level": 12,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Way of the samurai",
   "Level": 13,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Camber ST",
   "Level": 14,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Tanko",
   "Level": 15,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Camber ST",
   "Level": 16,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Yaoguai",
   "Level": 17,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Nodowa",
   "Level": 18,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Try to keep up!",
   "Level": 19,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Fukigayeshi",
   "Level": 20,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Left kusazuri",
   "Level": 21,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Right kusazuri",
   "Level": 21,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Hyakutake",
   "Level": 22,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "100 in-game coins",
   "Level": 23,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Yaoguai",
   "Level": 24,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Enlightenment",
   "Level": 25,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Quick start",
   "Level": 26,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "New logo",
   "Level": 27,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Left kote",
   "Level": 28,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Right kote",
   "Level": 28,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Don't blink!",
   "Level": 29,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Sikoro",
   "Level": 30,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Kuwagata",
   "Level": 31,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Enlightenment",
   "Level": 32,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Jannabi",
   "Level": 33,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Haidate",
   "Level": 34,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Raiju",
   "Level": 35,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "New background",
   "Level": 36,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Haraate",
   "Level": 37,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Orange lamp",
   "Level": 38,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Shojo",
   "Level": 39,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "100 in-game coins",
   "Level": 40,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Jannabi",
   "Level": 41,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Omni",
   "Level": 42,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Mempo",
   "Level": 43,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Oni",
   "Level": 44,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Tranquility",
   "Level": 45,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Left kohire",
   "Level": 46,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Right kohire",
   "Level": 46,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Jigoku",
   "Level": 47,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Long orange lamp",
   "Level": 48,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Omni",
   "Level": 49,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Kaiju",
   "Level": 50,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Bang-bang!",
   "Level": 51,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Engine roar",
   "Level": 52,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Left suneate",
   "Level": 53,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Right suneate",
   "Level": 53,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Lollybomb",
   "Level": 54,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Uncertain world",
   "Level": 55,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "100 in-game coins",
   "Level": 56,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Kaiju",
   "Level": 57,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Jubokko",
   "Level": 58,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "AE86",
   "Level": 59,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "New background",
   "Level": 60,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Gessan",
   "Level": 61,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Ra-ta-ta-ta!",
   "Level": 62,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Feng shui",
   "Level": 63,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Wakidate",
   "Level": 64,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "200 in-game coins",
   "Level": 65,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Jubokko",
   "Level": 66,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Yokozuna",
   "Level": 67,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Sea spirit",
   "Level": 68,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "New logo",
   "Level": 69,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Left sendan",
   "Level": 70,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Right sendan",
   "Level": 70,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Demon of the east",
   "Level": 71,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Corporate style",
   "Level": 72,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "400 in-game coins",
   "Level": 73,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Ichiro",
   "Level": 74,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Sakura",
   "Level": 75,
   "BP": "BP04-Syndicate"
 },
 {
   "Name": "Yokozuna",
   "Level": 75,
   "BP": "BP04-Syndicate"
 }
];