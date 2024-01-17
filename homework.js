let str = "А роза упала на лапу Азора"
function isPalindrome() {
	let cleanStr = str.toLowerCase().replace(/\s/g, '');
	if (cleanStr === cleanStr.split('').reverse().join('')) {
		console.log(str + " является палиндромом")
	} else {
		console.log(str + " не является палиндромом")
	}
}
isPalindrome();


function isPrimeNumber(number) {
	if (number <= 1) {
		console.log(number + " не является простым числом.");
		return;
	}
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			console.log(number + " не является простым числом.");
			return;
		}
	}
	console.log(number + " является простым числом.");
}
isPrimeNumber(47);


function calculateAge(birthDate) {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	const birthYear = birthDate.getFullYear();
	const birthMonth = birthDate.getMonth();
	const birthDay = birthDate.getDate();

	let age = currentYear - birthYear;

	if ((currentMonth === birthMonth && currentDay < birthDay) || currentMonth < birthMonth) {
		age--;
	}
	console.log(`Возраст: ${age} лет`);
}
let birthDate = new Date(2002, 2, 8);
calculateAge(birthDate);


function isWeekend(date) {
	const dayOfWeek = date.getDay();
	console.log(dayOfWeek);
	if (dayOfWeek === 0 || dayOfWeek === 6) {
		console.log("Введенная дата является выходным днем.");
	} else {
		console.log("Введенная дата не является выходным днем.");
	}
}
const inputDate = new Date(2024, 0, 15); // Год, месяц (начиная с 0), день
isWeekend(inputDate);