(function () {
  var Phaser = window.Phaser
  var game = new Phaser.Game(800, 600, Phaser.AUTO)

  var loadState = require('./states/loadState.js')
  var gameState = require('./states/gameState.js')

  game.state.add('load', loadState)
  game.state.add('game', gameState)

  game.state.start('load')
})()
