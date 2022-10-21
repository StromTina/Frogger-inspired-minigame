import { Entity } from './entity.js';

export class Player extends Entity {
    constructor(position) {
        super(position);

        this.width = 27;
        this.height = 27;
        this.lives = ['💗','💗','💗'];
        this.left = false;
        this.right = false;
        this.up = false;
        this.down = false;
    }
 
    tick(game) {
        if (this.left) {
            this.position.x -= 100 * game.deltaTime;
        } else if (this.right) {
            this.position.x += 100 * game.deltaTime;
        } else if (this.up) {
            this.position.y -= 100 * game.deltaTime;
        } else if (this.down) {
            this.position.y += 100 * game.deltaTime;
        }

        if (this.position.x < this.width / 2) {
            this.position.x = this.width / 2;
        } else if (this.position.x > game.canvas.width - (this.width / 2)) {
            this.position.x = game.canvas.width - (this.width / 2);
        }

        if (this.position.y < this.height / 2) {
            this.position.y = this.height / 2;
        } else if (this.position.y > game.canvas.height - (this.height / 2)) {
            this.position.y = game.canvas.height - (this.height / 2);
        }
    }
    
    draw(game) {
        game.context.fillStyle = 'rgb(205, 200, 200)'
        game.context.fillRect(this.position.x - this.width / 2, this.position.y - this.height / 2, this.width, this.height);
        game.context.font = '35px serif';
        game.context.fillText('🐸', this.position.x, this.position.y + 3)
    }
}