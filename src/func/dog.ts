import { Dog } from "../type";


export const numberOfColors = (dogs: Dog[]) => {

    let uniqueColors: string[] = [];

    dogs.forEach(dog => {
        if (!uniqueColors.includes(dog.color)) {
            uniqueColors.push(dog.color)
        }

    });
    return uniqueColors.length;
};

//Den här funktionen, commonColor, tar en lista av hundar (dogs)och hittar den vanligaste färgen bland hundarna.Den returnerar färgen som förekommer flest gånger.
export const commonColor = (dogs: Dog[]) => { //colorCounts är tom objekt som ska användas för att hålla koll på hur många gånger varje färg förekommer.
    const colorCounts: { [key: string]: number } = {};//Nycklarna (key) är färger som hundarna har (t.ex. "Brown", "Black"), och värdena (value) är antalet hundar med den färgen.
    let mostFrequent = ""; //en streng som inehålla den vanligaste färgen. Börjar som en tom sträng
    let maxCount = 0; //ett tal som håller reda på det högsta antalet förekomster av en färg. Börja som 0.

    //Gå igenom listan av hundar
    dogs.forEach((dog) => { //funktion använder en forEach-loop för att gå igenom varje hund i listan dogs. Varje hund representeras av variabeln dog.
        const color = dog.color;//hämtar färgen på den aktuella hunden (t.ex"brown") och sparar den i variabeln color.
        colorCounts[color] = (colorCounts[color] || 0) + 1;//hämtar nuvarande värde för färgen i colorCounts. Om färgen inte finns ännu (dvs.colorCounts[color] är undefined), sätts värde till 0. Lägger till 1 för att öka antalet förekomster av färgen.

        //Uppdatera den vanligaste färgen
        if (colorCounts[color] > maxCount) { //kontrollerar om den aktuella färgens antal(coloCounts[color])är större än maxCount.
            mostFrequent = color;//uppdaterar mostFrequent med den aktuella färgen.
            maxCount = colorCounts[color];//uppdaterar maxCount med det nya högsta värdet för förekomster.
        }
    });
    //returnerar den vanligaste färgen
    return mostFrequent;//när alla hundar har gåtts igenom, returnerar funktion färgen som förekommer flesta gånger.
};
