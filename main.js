//HW3
function signIn() {
    let userName = prompt('What is your name?', 'Put your name');
    if (userName !== null) {
        let firstLetter = userName.charAt(0).toUpperCase();
        let restLetters = userName.slice(1);
        alert(`Hello, ${firstLetter}${restLetters}! How are you?`);
    } else {
        alert('Hello, stranger!');
    }
}
signIn();

function comparison () {
    let result = prompt('Please add a three-digit number.', 'Here');
    if (result === null || isNaN(result) || result.length !== 3) {
        alert('Oops! Try again. Please, add a three-digit number.');
        return;
    }

    let firstDigit = +result[0];
    let secondDigit = +result[1];
    let thirdDigit = +result[2];

    if (firstDigit === secondDigit && secondDigit === thirdDigit) {
        alert('All symbols are the same.');
    } else if (firstDigit === secondDigit
        || firstDigit === thirdDigit
        || secondDigit === thirdDigit) {
        alert('Two symbols are the same.');
    } else {
        alert('All symbols are different.');
    }
}
comparison();

function getUserInfo() {
    const capitalMessage = 'You live in the capital of';
    const cityMessage  = 'You live in the city';
    const cancellationMessage = 'We are sorry, you did not add your';
    const ageMessage = 'Your age is';

    let year = +prompt('What is your year of birth?');
    if (year === 0) {
        alert(`${cancellationMessage} year of birth`);
        return;
    }

    let city = prompt('What city do you live?');
    if (city === null) {
        alert(`${cancellationMessage} city`);
        return;
    }

    let sport = prompt('What is your favourite kind of sport?');
    if (sport === null) {
        alert(`${cancellationMessage} kind of sport`);
        return;
    }

    let firstLetter = city.charAt(0).toUpperCase();
    let restLetters = city.slice(1);
    let currentLocation = `${cityMessage} ${firstLetter}${restLetters}`;
    if (city === 'Kyiv') {
        currentLocation = `${capitalMessage} Ukraine`;
    } else if (city === 'Washington') {
        currentLocation = `${capitalMessage} USA`;
    } else if (city === 'London') {
        currentLocation = `${capitalMessage} GB`;
    }
    alert(`${ageMessage} ${2023-year}. ${currentLocation}.`);
}
getUserInfo();
