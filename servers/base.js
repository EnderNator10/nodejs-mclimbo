var mc = require('minecraft-protocol');
var server = mc.createServer({
  'online-mode': true,   // optional
  encryption: true,      // optional
  host: '0.0.0.0',       // optional
  port: 25565,           // optional
});
function broadcast(msg){
  var msg = {
    translate: 'chat.type.announcement',
    "with": [
      '§04§l§nSystem',
      msg
    ]
  };
  client.write("chat", { message: JSON.stringify(msg), position: 0 });
}
function msg(teller,msg){
  var msg = {
    translate: 'chat.type.announcement',
    "with": [
      teller,
      msg
    ]
  };
  client.write("chat", { message: JSON.stringify(msg), position: 0 });
}
server.on('login', function(client) {
  client.write('login', {
    entityId: client.id,
    levelType: 'default',
    gameMode: 0,
    dimension: 0,
    difficulty: 2,
    maxPlayers: server.maxPlayers,
    reducedDebugInfo: false
  });
  function broadcast(msg){
    var msg = {
      translate: 'chat.type.announcement',
      "with": [
        '§04§l§nSystem',
        msg
      ]
    };
    client.write("chat", { message: JSON.stringify(msg), position: 0 });
  }
  function msg(teller,msg){
    var msg = {
      translate: 'chat.type.announcement',
      "with": [
        teller,
        msg
      ]
    };
    client.write("chat", { message: JSON.stringify(msg), position: 0 });
  }
  function welcome_msg(){
    var welcome = {
      translate: 'chat.type.announcement',
      "with": [
        '§4§l§nSystem',
        '§6§nWelcome§r§6!'
      ]
    };
    client.write("chat", { message: JSON.stringify(welcome), position: 0 });
  }
  function init(){
    welcome_msg();
  }
  client.write('position', {
    x: 0,
    y: 1.62,
    z: 0,
    yaw: 0,
    pitch: 0,
    flags: 0x00
  });
    init();
});