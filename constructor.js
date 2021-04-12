// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.
// ===
//
// class Computer {
//     constructor(ram, cpu, model, switchOnButton) {
//         this.ram = ram;
//         this.cpu = cpu;
//         this.model = model
//         this.switchOnButton = switchOnButton;
//     }
// }
//
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
//
// class Laptop extends Computer {
//     constructor(ram, cpu, model, switchOnButton, inch, battery) {
//         super(ram, cpu, model, switchOnButton);
//         this.inch = inch;
//         this.battery = Math.round(this.cpu / (this.inch * this.ram))
//     }
// }
//
// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
//
// class UltraBook extends Laptop {
//     constructor(ram, cpu, model, switchOnButton, inch, battery, weight) {
//         super(ram, cpu, model, switchOnButton, inch, battery);
//         this.weight = weight || 'No weight';
//         weight > 2 ? console.log('Battery will work less then 4 hour') : weight === weight;
//     }
// }
//
//
// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
//
// class BasePc extends Computer {
//     constructor(ram, cpu, model, switchOnButton, gameLauncher, fpsCount) {
//         super(ram, cpu, model, switchOnButton);
//     this.gameLauncher = gameLauncher
//     this.fpsCount = fpsCount
//         this.fpsCount = Math.round(this.cpu / this.ram)
// console.log(`U r playing "Doom" with`, this.fpsCount, `FPS`)
//     }
// }



