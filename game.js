import { RedCar, GreenCar, Bus, Leaf, Shamrock } from './obstacle.js';
import { Mosquito, Time } from './bonus.js';
import { Position } from './entity.js';
import { Player } from './player.js';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let width = canvas.width;
let height = canvas.height;
let river = canvas.height / 2;

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.entities = [
            new Player(new Position(canvas.width / 2, canvas.height / 1.03)),
            new RedCar(new Position(width, (height - 50) - (river - 90) * Math.random())),
            new GreenCar(new Position(Math.random() * width, (height - 50) - (river - 90) * Math.random())),
            new Shamrock(new Position(Math.random() * width, (river - 40) * Math.random())),
            new Shamrock(new Position(Math.random() * width, (river - 40) * Math.random())),
            new Shamrock(new Position(Math.random() * width, (river - 40) * Math.random())),
            new Leaf(new Position(Math.random() * width, (river - 40) * Math.random()))
        ];
        this.player = this.entities[0];
        this.deltaTime = 0;
        this.seconds = 0;
        this.color = 'white';
        this.font = '48px serif'
    }

    start() {
        tick();
    }

    showLives() {
        this.context.fillStyle = 'rgb(205, 200, 200)';
        this.context.font = '35px serif';
        this.context.textAlign = 'center';
        this.context.fillText(this.player.lives, this.canvas.width / 1.18, this.canvas.height / 1.05);
        if (this.player.lives.length === 0) {
            alert("GAME OVER \nYour score is " + this.seconds + " points!");
            this.player.lives = ['💗', '💗', '💗'];
            this.seconds = 0;
            this.entities.length = 1;
            this.player.position = new Position(game.canvas.width / 2, game.canvas.height / 1.03);
        }
    }

    showSeconds() {
        this.context.fillStyle = this.color;
        this.context.font = this.font;
        this.context.textAlign = 'center';
        this.context.fillText(this.seconds, this.canvas.width - 50, this.canvas.height - this.canvas.height + 50);

    }
}

export const game = new Game(canvas, context);

let tickCount = 0;
let lastTime = Date.now();

function tick() {
    let currentTime = Date.now();
    game.deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    tickCount++;

    let redCar = new RedCar(new Position(width, (height - 50) - (river - 70) * Math.random()));
    let bus = new Bus(new Position(width, (height - 50) - (river - 70) * Math.random()));
    let greenCar = new GreenCar(new Position(width, (height - 50) - (river - 70) * Math.random()));
    let leaf = new Leaf(new Position(0, (river - 40) * Math.random()));
    let mosquito = new Mosquito(new Position(width, (river - 50) * Math.random()));
    let shamrock = new Shamrock(new Position(width, (river - 50) * Math.random()));
    let time = new Time(new Position((Math.random() * width - 40), (Math.random() * height - 40)));


    context.fillStyle = 'rgb(205, 200, 200)'
    context.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);
    context.fillStyle = 'darkblue';
    context.fillRect(0, 0, canvas.width, canvas.height / 2);

    game.showLives();
    game.showSeconds();


    for (let i = 0; i < game.entities.length; i++) {
        let entity = game.entities[i];

        entity.tick(game);
        entity.draw(game);

        if (entity.position.x < - 20 ||
            entity.position.x > width + 20) {
            game.entities.splice(i, 1);
        }
    }

    if (tickCount % 200 === 0 && game.seconds > 90) {
        game.entities.push(redCar, greenCar);
    } else if (tickCount % 200 === 0 && game.seconds > 120) {
        game.entities.push(redCar, greenCar, bus);
    } else if (tickCount % 200 === 0) {
        game.entities.push(redCar);
    }

    if (tickCount % 300 === 0 && game.seconds > 140) {
        game.entities.push(greenCar, bus, shamrock, greenCar, redCar, leaf);
    } else if (tickCount % 300 === 0 && game.seconds > 120) {
        game.entities.push(greenCar, bus, redCar, leaf);
    } else if (tickCount % 300 === 0) {
        game.entities.push(greenCar)
    }

    if (tickCount % 500 === 0 && game.seconds > 200) {
        game.entities.push(bus, leaf, shamrock, redCar, redCar, greenCar, leaf)
    } else if (tickCount % 500 === 0 && game.seconds > 60) {
        game.entities.push(bus, leaf, shamrock, redCar)
    } else if (tickCount % 500 === 0) {
        game.entities.push(bus, leaf, shamrock);
    }

    if (tickCount % 600 === 0 && game.seconds > 160) {
        game.entities.push(shamrock, mosquito, greenCar, leaf, redCar, bus, redCar, greenCar)
    } else if (tickCount % 600 === 0 && game.seconds > 70) {
        game.entities.push(shamrock, mosquito, greenCar)
    } else if (tickCount % 600 === 0) {
        game.entities.push(shamrock, mosquito);
    }


    if (tickCount % 2000 === 0) {
        game.entities.push(time);
    }

    if (tickCount % 120 === 0) {
        game.seconds++;
    }

    requestAnimationFrame(tick);

}

tick();



