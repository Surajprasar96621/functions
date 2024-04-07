function createUserData(names, ages) {
    const userData = [];
    for (let i = 0; i < names.length; i++) {
        userData.push({ name: names[i], age: ages[i] });
    }
    return userData;
}

function printUsersAbove30(userData) {
    for (const user of userData) {
        if (user.age > 30) {
            console.log(user.name);
        }
    }
}

const names = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
const ages = [32, 30, 26, 28, 44];

const userData = createUserData(names, ages);
printUsersAbove30(userData);
