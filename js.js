let num = 50;

if (num < 49) {
console.log("Неверно!")
} else if (num > 100) {
    console.log("Дохуя")
} else {
    console.log("Верно нах")
}

(num == 50) ? console.log("Верно") : console.log("Неверно!");



switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100: 
        console.log("Дохуя");
        break;
    case num > 80:
        console.log("Многовато");
    case 50:
        console.log("Угадал");
        break;
    default:
        console.log("Что то не то пошло");
        break;
    }