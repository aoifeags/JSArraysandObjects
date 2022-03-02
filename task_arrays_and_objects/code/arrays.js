/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. 
 * Some answers will require you to store the result in a variable, others will need you to inspect the whole array.*/

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

stations.push("London Kings Cross")
//console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
stations.shift()
//console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = stations.length;
// note there is no () at the end of lenght. 
//console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

thirdStation = stations[2];

//console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */
stations.splice(1, 1, "Berwick-Upon-Tweed")
//console.log(stations);
// this worked, but is there a way to do it without having to know the element index was 1?

/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */
stations.splice(4, 1)

//console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 * 
 * NB - SPLICE If greater than the length of the array, start will be set to the length of the array. 
 * If toDelete is 0, in this case, no element will be deleted but the method will behave as an adding function, 
 * adding as many elements as items provided, from the index start.
 */
len = stations.length
stations.splice(3, 0, "Darlington")
//console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */

stoppingAtDurham = stations.includes("Durham");

//console.log(stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

if (stoppingAtDurham){
    console.log("Yay Durham!");
} else {
    console.log("Aww...");
}