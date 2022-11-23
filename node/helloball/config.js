module.exports = {
  key: 'ACCESS_KEY',
  password: 'PASSWORD',
  peer: 'ACCESS_KEY',

  connection: {
    host: 'http://207.244.254.63:23571',
    option: {
      reconnection: true,
      transports: ["websocket", "polling"]
    }
  }
}