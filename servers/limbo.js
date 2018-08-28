var mc = require('minecraft-protocol');
var server = mc.createServer({
  'online-mode': false,   // optional
  encryption: true,      // optional
  host: '0.0.0.0',       // optional
  port: 25666,           // optional
});
server.on('login', function(client) {
  client.write('login', {
    entityId: client.id,
    levelType: 'default',
    gameMode: 3,
    dimension: 1,
    difficulty: 2,
    maxPlayers: server.maxPlayers,
    reducedDebugInfo: false
  });
  client.write('position', {
    x: 66,
    y: 666,
    z: 666,
    yaw: 0,
    pitch: 0,
    flags: 0x00
  });
  function broadcast(msg){
    var msg = {
      translate: 'chat.type.announcement',
      "with": [
        '§0§l§nLimbo Gardian',
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
    
    broadcast("§2You have been sended to the §5Server §0§l§nLIMBO")
    broadcast("§4§nALL §2Client Side Packages");
    broadcast("§2have been§4§l§nSUSPENED§4§l!");
    broadcast("§1§l§nChat has been§4§l§nDISABLED!");
  }
  function init(){
    welcome_msg();
  }
  init();
});
server.on('chat', function(client) {
  function broadcast(msg){
    var msg = {
      translate: 'chat.type.announcement',
      "with": [
        '§0§l§nLimbo Gardian',
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
  broadcast("§4Nice try");
});