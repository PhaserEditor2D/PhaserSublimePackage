function Level() {

}

Level.prototype = Object.create(Phaser.State.prototype);
Level.prototype.constructor = Level;

Level.prototype.create = function () {
	var ball = this.add.sprite(10, 10, "ball");
	this.add.audio("pepe", 10);	
	this.game.camera.shake(
};