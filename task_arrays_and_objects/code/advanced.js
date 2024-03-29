/**
 * These tasks are more complicated! Using combinations of arrays and objects is 
 * very common, here you will need to combine what you know about both to complete 
 * the tasks.*/


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

england = unitedKingdom[1];
england.touristAttractions = ["Stonehenge", "Big Ben", "Cliffs of Dover"];

//console.log(england);
//console.log(unitedKingdom);


/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom[2];
wales.capital = "Cardiff";


//console.log(wales);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */
northernIreland = unitedKingdom[3];
northernIrelandKeys = Object.keys(northernIreland);

// console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the 
 * biggest, smallest or somewhere in the middle.*/

 scotland = unitedKingdom[0];
scotlandIsBiggest = false;
scotlandIsSmallest = false; 
scotlandIsMiddle = false;

 if (scotland.population > england.population && scotland.population && wales.population && scotland.population > northernIreland.population){
    scotlandIsBiggest = true; 
    console.log("It's " + scotlandIsBiggest + "that Scotland is biggest" );
 } else if (england.population > scotland.population && wales.population > scotland.population && northernIreland.population > scotland.population){
    scotlandIsSmallest = true; 
    console.log("It's " + scotlandIsSmallest + "that Scotland is smallest" );
 } else {
     console.log("Scotland is neither biggest or smallest, it is somewhere in-between");
 }


 // this exercise has been finished and answers checked 