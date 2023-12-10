let student = {
	personalData: {
		firstName: 'Ivan',
		lastName: 'Ivanov',
	},
	address: {
		country: 'France',
		city: 'Paris',
	}
}

student.personalData.firstName = 'Serg';

document.write('<b>firstName: </b>', student.personalData.firstName, '<br>');
document.write('<b>lastName: </b>', student.personalData.lastName);