// B. Longest Reining Dynasty (5 Pts)

// Given a chronological list of dynasties and their respective end of reign in roman numerals (MCMLXXIX), identify the longest reigning dynasty.

// Implement the functions:

//     longestDynasty() to return the name of the dynasty which reigns the longest in an array of key-value pair dynastyReign

//     convertYear() to translate given year in roman numerals to integer

// Conditions:

//     Starting year is year 1000 (M in roman numerals)

//     The end of reign of one dynasty is the start of reign of another

//     Remove entries with invalid roman numerals (year of end of reign)

//     If passed roman number in convertYear() is invalid, return the word "Invalid" instead of the year

//     If dynastyReign is empty return "No Data"

const dynastyReign = [
    { "San Dynasty": "MXLI" },
    { "Viloria Dynasty": "MCCCIIII" },
    { "Tan Dynasty": "MCCCXCVIII" },
    { "Bon Dynasty": "MCDXLV" },
    { "Maiko Dynasty": "MDCLXIV" },
    { "Paul Dynasty": "MCMXLIX" },
    { "Andre Dynasty": "MMMXICX" }
];

function convertYear(year) {
    const romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };

    const romanNumeralPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (!romanNumeralPattern.test(year)) {
        return "Invalid";
    }

    let result = 0;
    let prevValue = 0;

    for (let i = year.length - 1; i >= 0; i--) {
        const current = romanNumerals[year[i]];
        if (current < prevValue) {
            result -= current;
        } else {
            result += current;
        }
        prevValue = current;
    }

    return result;
}

function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
        return "No Data";
    }

    let longestName = "";
    let longestDuration = -1;

    for (const dynasty of dynastyReign) {
        const name = Object.keys(dynasty)[0];
        const endYear = dynasty[name];

        const year = convertYear(endYear);
        if (year === "Invalid") {
            continue;
        }

        const duration = year - 1000 + 1;

        if (duration > longestDuration) {
            longestDuration = duration;
            longestName = name;
        }
    }
    
    return longestName;
}

console.log(`Longest Reigning Dynasty: ${longestDynasty(dynastyReign)}`);