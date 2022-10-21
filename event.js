import { game } from './game.js'

export function handleKeyDown(event) {
    if (event.repeat) return;

    if (event.key === 'a') {
        game.player.left = true;
    } else if (event.key === 'd') {
        game.player.right = true;
    } else if (event.key === 's') {
        game.player.down = true;
    } else if (event.key === 'w') {
        game.player.up = true;
    }
}

export function handleKeyUp(event) {
    if (event.key === 'a') {
        game.player.left = false;
    } else if (event.key === 'd') {
        game.player.right = false;
    } else if (event.key === 's') {
        game.player.down = false;
    } else if (event.key === 'w') {
        game.player.up = false;
    }
}