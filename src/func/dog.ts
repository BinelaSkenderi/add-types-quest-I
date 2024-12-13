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

export const commonColor = (d) => { };
