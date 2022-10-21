import { Entity } from "./entity.js";
import { generateRandomColor } from './utility.js';

export class Mosquito extends Entity {
    constructor(position) {
        super(position);

        this.radius = 12;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.font = '25px serif';
        game.context.fillText("🦟", this.position.x, this.position.y);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        this.position.x -= 0.8;

        if (this.isColliding(game) && game.player.lives.length < 5) {
            game.player.lives.push('💗');
            this.position.x = game.canvas.width + 40;
            this.position.y = game.canvas.height + 40;
        }
    }

    isColliding(game) {
        let cdx = Math.abs(this.position.x - game.player.position.x);
        let cdy = Math.abs(this.position.y - game.player.position.y);

        if (cdx > (game.player.width / 2 + this.radius)) { return false; }
        if (cdy > (game.player.height / 2 + this.radius)) { return false; }

        if (cdx <= game.player.width / 2) { return true; }
        if (cdy <= game.player.height / 2) { return true; }

        let distSquared = ((cdx - game.player.width / 2) ** 2) + ((cdy - game.player.height / 2) ** 2);
        return distSquared <= this.radius ** 2;
    }
}


export class Time extends Entity {
    constructor(position) {
        super(position);

        this.radius = 20;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.font = '30px serif';
        game.context.fillText("⏱", this.position.x, this.position.y);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        if (this.isColliding(game)) {           
            game.seconds += 20;
            game.color = generateRandomColor();
            game.font = 'bold 52px serif';

            this.position.x = game.canvas.width + 30;
            this.position.y = game.canvas.height + 30;
        }
    }

    isColliding(game) {
        let cdx = Math.abs(this.position.x - game.player.position.x);
        let cdy = Math.abs(this.position.y - game.player.position.y);

        if (cdx > (game.player.width / 2 + this.radius)) { return false; }
        if (cdy > (game.player.height / 2 + this.radius)) { return false; }

        if (cdx <= game.player.width / 2) { return true; }
        if (cdy <= game.player.height / 2) { return true; }

        let distSquared = ((cdx - game.player.width / 2) ** 2) + ((cdy - game.player.height / 2) ** 2);
        return distSquared <= this.radius ** 2;
    }
}