(function() {

    var game = new Phaser.Game(800, 600, Phaser.AUTO);

    var load_state = require('./states/load_state.js');
    var game_state = require('./states/game_state.js');

    game.state.add('load', load_state);
    game.state.add('game', game_state);

    game.state.start('load');

})();
