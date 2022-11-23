const config = require('./config')

function print() {
  console.log([...arguments].join())
}

class App extends require('./abstractapp') {
  constructor() {
    super(config)

    this.connect()
  }

  getCredentials() {
    return {
      key: config.key,
      password: config.password
    }
  }

  onAIAUCHE2(msg) {
    this.sendAIAIUCHE2(config.key, msg.from)
  }

  onPlay(msg) {
    print('playing ...', msg.timestamp)
    this.sendBall(config.key, msg.from)
  }

  onAccess(granted) {
    print(granted ? 'granted ...' : 'denied ...')
    this.sendBall(config.key, config.peer)
  }

  onAccessing() {
    print('accessing ...')
  }
}

new App()
