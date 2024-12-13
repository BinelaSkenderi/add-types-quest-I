//utöka så alla egenskaper för monstret skrivs ut
import { Monster } from "../type";

export const prettyPrintMonster = (allMonster: Monster[]) => {//export gör funktionen tillgänglig dör import i andra filer om den behövs där.
	//pettyPrintMonster-Funktionsnamnet. (allMonster: Monster[]) Funktions parameter. allMonster är en array av objekt av typen Monster.Varje objetk representerar ett monster med egenskaper som namn, ålder, antal tentakler, antal ögon och om det har vingar eller inte.
	allMonster.forEach((u) => { //(u) parametern som representerar varje monster i arrayen under iterationen. Namn u står för "unit(enhet)".För varje iteration kommer ett nytt monsterobjekt att passeras som argument till denna funktion.
		console.log(
			`Name: ${u.name}, Age: ${u.age}, No. of tentacles: ${u.tentacles}, No. of eyes: ${u.eyes}, Has wings: ${u.hasWings}` //Template string (`${...}`): Används för att sammanfoga strängar och infoga värden från objektet u i strängen.
		);
	});
};

export const averageMonsterAge = (allMonster: Monster[]) => {
	let allAges: number = 0; //Skapar en variabel allAges och initierar den till 0.Denna variabel kommer att användas för att hålla summan av alla monsteråldrar. Den är av typen number
	allMonster.forEach((u) => { //Använder metoden forEach för att iterera över varje monster i arrayen allMonster. För varje iteration får vi tillgång till ett monsterobjekt som tilldelas parametern u. U representerar ett enskilt monster.
		allAges += u.age; //För varje monster (dvs. varje gång forEach körs), adderas monsterets ålder (u.age) till variabeln allAges. Detta gör att allAges successivt ackumulerar summan av alla monsteråldrar.
	});
	//allMonster.length: Ger antalet monster i arrayen allMonster. Det är antalet element i listan och representerar hur många monster vi har.
	//allAges / allMonster.length: Dividerar den totala summan av alla åldrar (allAges) med antalet monster (allMonster.length) för att beräkna medelåldern för alla monster.
	//return: Funktionen returnerar medelåldern som ett resultat.
	return allAges / allMonster.length;
};

export const averageNumberOfTentacles = (allMonster: Monster[]) => {
	let allNumberOfTentacles: number = 0;
	allMonster.forEach((u) => {
		allNumberOfTentacles += u.tentacles;
	})
	return allNumberOfTentacles / allMonster.length;
};

export const numberOfMonstersWithWings = (allMonster: Monster[]) => {
	let monsterWithWings: number = 0;
	allMonster.forEach((u) => {
		if (u.hasWings === true) {
			monsterWithWings += 1;
		}
	});
	return monsterWithWings;
};

export const getAllNoWingedMonster = (allMonster: Monster[]) => {
	let noWingedMonsters: string[] = [];
	allMonster.forEach((u) => {
		if (u.hasWings === false) {
			noWingedMonsters.push(u.name);
		}
	})
	return `Följande monster har inte vingar: ${noWingedMonsters}`;
};
