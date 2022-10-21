export function generateRandomColor() {
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    let color;
    if (randomNumber === 1) color = 'red';
    if (randomNumber === 2) color = 'rgb(255, 100, 0)';
    if (randomNumber === 3) color = 'rgb(255, 100, 215)';
    if (randomNumber === 4) color = 'rgb(255, 255, 50)';
    return color;
}