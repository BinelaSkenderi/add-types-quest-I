import { User } from "../type";

export const averageAge = (allUsers: User[]) => {
	let allAges = 0;
	allUsers.forEach((u) => {
		allAges += u.age;
	});
	return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User[]) => {
	let AllHobbies = 0;
	allUsers.forEach((u) => {
		AllHobbies += u.hobby.length;
	});
	return AllHobbies / allUsers.length;
};
