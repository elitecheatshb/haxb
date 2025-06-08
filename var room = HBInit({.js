var room = HBInit({
  roomName: "HAXBALL CHEATS",
  maxPlayers: 12,
  public: true,
  noPlayer: true
});

let welcomeMessage = "CHEATS WEBSITE";
let linkToSend = "https://elitecheatshb.github.io/haxb/"; // <- Tutaj wstaw swój link

room.onPlayerJoin = function(player) {
  room.sendAnnouncement(welcomeMessage, player.id, 0x00FF00, "bold", 2);
  room.sendPrivateAnnouncement("Sprawdź to: " + linkToSend, player.id, 0xFFAA00, "normal", 1);
}
