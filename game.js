import Phaser from 'phaser';

function preload(){

}

function create(){
    cursors = this.input.keyboard.createCursorKeys();

    
}

function update() {

}

const config ={
    width: 800,
    height: 600,
    scene: {
        preload,
        update,
        create,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false,
        }
    }
    
}

new Phaser.Game(config);