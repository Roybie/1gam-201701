var loadState = new window.Phaser.State()

loadState.create = function () {
  this.state.start('game')
}

module.exports = loadState
