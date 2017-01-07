var load_state = new Phaser.State();

load_state.create = function() {
    this.state.start('game');
};

module.exports = load_state;
