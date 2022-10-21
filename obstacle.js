import { Entity, Position } from './entity.js'

export class RedCar extends Entity {
    constructor(position) {
        super(position);

        this.radius = 20;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.font = '50px serif';
        game.context.fillText('🚗', this.position.x, this.position.y - 5);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        this.position.x--;

        if (this.isColliding(game)) {
            game.player.lives.shift();
            game.player.position = new Position(game.canvas.width / 2, game.canvas.height / 1.03);
            this.position.x = game.canvas.width + 50;
            this.position.y = game.canvas.height + 50;
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

export class GreenCar extends RedCar {
    constructor(position) {
        super(position);

        this.radius = 28;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.font = '70px serif';
        game.context.fillText("🚙", this.position.x, this.position.y - 8);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        this.position.x -= 0.9;

        if (this.isColliding(game)) {
            game.player.lives.shift();
            game.player.position = new Position(game.canvas.width / 2, game.canvas.height / 1.03);
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

export class Bus extends RedCar {
    constructor(position) {
        super(position);

        this.radius = 35;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.font = '70px serif';
        game.context.fillText("🚌", this.position.x, this.position.y);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        this.position.x -= 0.8;

        if (this.isColliding(game)) {
            game.player.lives.shift();
            game.player.position = new Position(game.canvas.width / 2, game.canvas.height / 1.03);
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

export class Leaf extends Entity {
    constructor(position) {
        super(position);

        this.radius = 32;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);

        game.context.font = '80px serif';
        game.context.fillText("🍃", this.position.x - 10, this.position.y - 10);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        this.position.x += 0.2;

        if (this.isColliding(game)) {
            game.player.lives.shift();
            game.player.position = new Position(game.canvas.width / 2, game.canvas.height / 1.03);
            this.position.x = game.canvas.width + 100;
            this.position.y = game.canvas.height + 100;
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

export class Shamrock extends Leaf {
    constructor(position) {
        super(position);

        this.radius = 40;
    }

    draw(game) {
        game.context.beginPath();
        game.context.fillStyle = 'red'
        game.context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        game.context.font = '80px serif';
        game.context.fillText("🍀", this.position.x, this.position.y + 10);
        game.context.textBaseline = 'middle';
        game.context.closePath();
    }

    tick(game) {
        this.position.x -= 0.3;

        if (this.isColliding(game)) {
            game.player.lives.shift();
            game.player.position = new Position(game.canvas.width / 2, game.canvas.height / 1.03);
            this.position.x = game.canvas.width + 90;
            this.position.y = game.canvas.height + 90;
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