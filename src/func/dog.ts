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

export const commonColor = (dogs: Dog[]) => {
    const colorCounts: { [key: string]: number } = {};
    let mostFrequent = "";
    let maxCount = 0;

    dogs.forEach((dog) => {
        const color = dog.color;
        colorCounts[color] = (colorCounts[color] || 0) + 1;

        if (colorCounts[color] > maxCount) {
            mostFrequent = color;
            maxCount = colorCounts[color];
        }
    });

    return mostFrequent;
};
