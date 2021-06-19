var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["68ac5e10-dea3-4734-b095-c97aff4f4405","1285981d-c214-4f14-907e-84f9b52dbb3e","f2fb6d75-9c0b-493c-a75c-34800f058169","e8438e64-bfd1-4112-8104-3199fb732b36","a872e3ea-c820-4f6f-923f-08f08d6ac7f2","8da17858-1648-489d-a5dd-291ae3ae8974","93b80d7c-538f-479b-b757-254ca548193e","258ce467-205c-4c89-9a28-c6290e93df74","655f3d04-d155-4e55-9cdc-d7f4397d4309","3ea77d0a-193b-4c2b-9a78-2ee5083b3076"],"propsByKey":{"68ac5e10-dea3-4734-b095-c97aff4f4405":{"name":"background","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ETSaw9hSnAb4Zrah9jylRVk_1Us1qq.c","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/68ac5e10-dea3-4734-b095-c97aff4f4405.png"},"1285981d-c214-4f14-907e-84f9b52dbb3e":{"name":"fireball","sourceUrl":null,"frameSize":{"x":50,"y":86},"frameCount":2,"looping":true,"frameDelay":12,"version":"d2mRw14076xccMYO0u1ku1sW0Vke1Lfj","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":86},"rootRelativePath":"assets/1285981d-c214-4f14-907e-84f9b52dbb3e.png"},"f2fb6d75-9c0b-493c-a75c-34800f058169":{"name":"Fireball_eating","sourceUrl":null,"frameSize":{"x":50,"y":61},"frameCount":2,"looping":true,"frameDelay":12,"version":"yJa0KQWat6L63cqc4Gm3tmXjKeFJDMt4","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":61},"rootRelativePath":"assets/f2fb6d75-9c0b-493c-a75c-34800f058169.png"},"e8438e64-bfd1-4112-8104-3199fb732b36":{"name":"rocket_falling","sourceUrl":null,"frameSize":{"x":75,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"xl1lkocqlyToe1JLiOQjp8dgGXinUMcO","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":68},"rootRelativePath":"assets/e8438e64-bfd1-4112-8104-3199fb732b36.png"},"a872e3ea-c820-4f6f-923f-08f08d6ac7f2":{"name":"rocket","sourceUrl":null,"frameSize":{"x":75,"y":68},"frameCount":1,"looping":true,"frameDelay":12,"version":"ClDFsC6yqx2k0FpD2Bh0zfdbrzdWvBbH","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":75,"y":68},"rootRelativePath":"assets/a872e3ea-c820-4f6f-923f-08f08d6ac7f2.png"},"8da17858-1648-489d-a5dd-291ae3ae8974":{"name":"bigrocket","sourceUrl":null,"frameSize":{"x":100,"y":90},"frameCount":1,"looping":true,"frameDelay":12,"version":"8GhcR.LhW6Ja8H4o7g5LrErsdzTrNVgA","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":90},"rootRelativePath":"assets/8da17858-1648-489d-a5dd-291ae3ae8974.png"},"93b80d7c-538f-479b-b757-254ca548193e":{"name":"play","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"_EyLCk5isBJ6IG2FYG6XcemHaecmMHc.","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/93b80d7c-538f-479b-b757-254ca548193e.png"},"258ce467-205c-4c89-9a28-c6290e93df74":{"name":"info","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"YYhoC.qjEigtG0inFDMlbVIPKNiFULmD","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/258ce467-205c-4c89-9a28-c6290e93df74.png"},"655f3d04-d155-4e55-9cdc-d7f4397d4309":{"name":"back","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"CE2QTGK4L2QGv52_CVgVP7yNQJpaDagM","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/655f3d04-d155-4e55-9cdc-d7f4397d4309.png"},"3ea77d0a-193b-4c2b-9a78-2ee5083b3076":{"name":"restart","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"r.Wr08sza36JEaRnEyMxavRjWnRxfPvM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3ea77d0a-193b-4c2b-9a78-2ee5083b3076.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating variables for player animation and gamestate
var rocketanimation = "rocket";
var gamestate = "start";

//var background1 = createSprite(200,200,400,400);
//background1.setAnimation("background");

//creating asteroid and player sprites
var asteroid1 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid1.setAnimation("fireball");

var asteroid2 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid2.setAnimation("fireball");

var asteroid3 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid3.setAnimation("fireball");

var asteroid4 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid4.setAnimation("fireball");

var asteroid5 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid5.setAnimation("fireball");

var asteroid6 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid6.setAnimation("fireball");

var asteroid7 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid7.setAnimation("fireball");

var asteroid8 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid8.setAnimation("fireball");

var asteroid9 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid9.setAnimation("fireball");

var asteroid10 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid10.setAnimation("fireball");

var asteroid11 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid11.setAnimation("fireball");

var asteroid12 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid12.setAnimation("fireball");

var asteroid13 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid13.setAnimation("fireball");

var asteroid14 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid14.setAnimation("fireball");

var asteroid15 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid15.setAnimation("fireball");

var asteroid16 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid16.setAnimation("fireball");

var asteroid17 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid17.setAnimation("fireball");

var asteroid18 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid18.setAnimation("fireball");

var asteroid19 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid19.setAnimation("fireball");

var asteroid20 = createSprite(randomNumber(30,370), -100, 15,15);
asteroid20.setAnimation("fireball");

var player = createSprite(200, 250, 30, 30);
player.setAnimation(rocketanimation);

var player_falling = createSprite(player.x,player.y,30,30);
player_falling.setAnimation("rocket_falling");
player_falling.visible = false;

var player_show = createSprite(200,200,100,100);
player_show.setAnimation("bigrocket");

//creating button sprites
var playbutton = createSprite(200,300, 100, 100);
playbutton.setAnimation("play");

var infobutton = createSprite(375,200, 30, 30);
infobutton.setAnimation("info");

var backbutton = createSprite(370,30 , 50, 50);
backbutton.setAnimation("back");

var restartbutton = createSprite(200,250 , 50, 50);
restartbutton.setAnimation("restart");

var hearts = 3;
playSound("assets/category_background/progression.mp3",true);

function draw() {
  //settingbgcolor and displayg lives
  background("black");
  if(gamestate === "play"){
   fill("white");
   text("Lives: " + hearts, 20,20); 
  }
  
  //start screen using gamestate
  if(gamestate === "start"){
    textAlign(CENTER);
    fill("orange");
    textSize(20);
    text("Fireball Dodge!",200, 140);
    player_show.visible = true;
    player.visible = false;
    backbutton.visible = false;
  }
  
  //changing gamestate when play button is pressed
  if(mousePressedOver(playbutton) && gamestate === "start"){
    playSound("assets/category_app/app_menu_button_4.mp3");
    gamestate = "play";
    playbutton.visible = false;
    infobutton.visible = false;
    backbutton.visible = true;
    player_show.visible = false;
    player.visible = true;
  }
  
  //giving info if info button is pressed
  if(mousePressedOver(infobutton) && gamestate === "start"){
    playSound("assets/category_app/app_menu_button_4.mp3");
    gamestate = "info";
  }
  
  //showing text messages in gamestate "info"
  if(gamestate === "info"){
    playbutton.visible = false;
    infobutton.visible = false;
    player_show.visible = false;
    backbutton.visible = true;
    textAlign(CENTER);
    fill("blue");
    textSize(30);
    text("Information", 200, 40);
    textSize(17);
    text("You have been assigned", 200, 80);
    text("to explore the unkown in Space.", 200, 110);
    text("You are an astronaut who admires space travel", 200, 140);
    text("Your aim is to dodge incoming firballs", 200, 170);
    text("Good Luck, and don't give up!", 200, 200);
    text("You will be teleported randomly", 200, 230);
    text("and maybe even lose all your lives at once", 200, 260);
    text("to make the game harder", 200, 290);
  }
  
  //giving backbutton when in info gamestate
  if(mousePressedOver(backbutton) && gamestate === "info"){
    playSound("assets/category_app/app_menu_button_4.mp3");
    gamestate = "start";
    playbutton.visible = true;
    infobutton.visible = true;
  }
  
  //resetting lives
  if(mousePressedOver(backbutton)||mousePressedOver(restartbutton)){
    playSound("assets/category_app/app_menu_button_4.mp3");
    hearts = 3;
  }
  
  
  //setting boundaries for restart button
  if(gamestate === "over"){
    restartbutton.visible = true;
  }
  else restartbutton.visible = false;
  
  //using restart button only in when game is over
  if(gamestate === "over" && mousePressedOver(restartbutton)){
    gamestate = "start";
    playbutton.visible = true;
    infobutton.visible = true;
    player_falling.y = player.y;
    reset();
    asteroid1.y = -100;
    asteroid1.x = randomNumber(30,370);
    asteroid2.y = -100;
    asteroid2.x = randomNumber(30,370);
    asteroid3.y = -100;
    asteroid3.x = randomNumber(30,370);
    asteroid4.y = -100;
    asteroid4.x = randomNumber(30,370);
    asteroid5.y = -100;
    asteroid5.x = randomNumber(30,370);
    asteroid6.y = -100;
    asteroid6.x = randomNumber(30,370);
    asteroid7.y = -100;
    asteroid7.x = randomNumber(30,370);
    asteroid8.y = -100;
    asteroid8.x = randomNumber(30,370);
    asteroid9.y = -100;
    asteroid9.x = randomNumber(30,370);
    asteroid10.y = -100;
    asteroid10.x = randomNumber(30,370);
    asteroid11.y = -100;
    asteroid11.x = randomNumber(30,370);
    asteroid12.y = -100;
    asteroid12.x = randomNumber(30,370);
    asteroid13.y = -100;
    asteroid13.x = randomNumber(30,370);
    asteroid14.y = -100;
    asteroid14.x = randomNumber(30,370);
    asteroid15.y = -100;
    asteroid15.x = randomNumber(30,370);
    asteroid16.y = -100;
    asteroid16.x = randomNumber(30,370);
    asteroid17.y = -100;
    asteroid17.x = randomNumber(30,370);
    asteroid18.y = -100;
    asteroid18.x = randomNumber(30,370);
    asteroid19.y = -100;
    asteroid19.x = randomNumber(30,370);
    asteroid20.y = -100;
    asteroid20.x = randomNumber(30,370);
  }
  //giving backbutton when in play gamestate
  if(mousePressedOver(backbutton) && gamestate === "play"){
    playSound("assets/category_app/app_menu_button_4.mp3");
    gamestate = "start";
    playbutton.visible = true;
    infobutton.visible = true;
    reset();
    asteroid1.y = -100;
    asteroid1.x = randomNumber(30,370);
    asteroid2.y = -100;
    asteroid2.x = randomNumber(30,370);
    asteroid3.y = -100;
    asteroid3.x = randomNumber(30,370);
    asteroid4.y = -100;
    asteroid4.x = randomNumber(30,370);
    asteroid5.y = -100;
    asteroid5.x = randomNumber(30,370);
    asteroid6.y = -100;
    asteroid6.x = randomNumber(30,370);
    asteroid7.y = -100;
    asteroid7.x = randomNumber(30,370);
    asteroid8.y = -100;
    asteroid8.x = randomNumber(30,370);
    asteroid9.y = -100;
    asteroid9.x = randomNumber(30,370);
    asteroid10.y = -100;
    asteroid10.x = randomNumber(30,370);
    asteroid11.y = -100;
    asteroid11.x = randomNumber(30,370);
    asteroid12.y = -100;
    asteroid12.x = randomNumber(30,370);
    asteroid13.y = -100;
    asteroid13.x = randomNumber(30,370);
    asteroid14.y = -100;
    asteroid14.x = randomNumber(30,370);
    asteroid15.y = -100;
    asteroid15.x = randomNumber(30,370);
    asteroid16.y = -100;
    asteroid16.x = randomNumber(30,370);
    asteroid17.y = -100;
    asteroid17.x = randomNumber(30,370);
    asteroid18.y = -100;
    asteroid18.x = randomNumber(30,370);
    asteroid19.y = -100;
    asteroid19.x = randomNumber(30,370);
    asteroid20.y = -100;
    asteroid20.x = randomNumber(30,370);
    player_falling.y = player.y;
  }
  
  //making sure player_falling is not visible in start screen
  if(gamestate === "start" || gamestate === "over"){
    player_falling.setVelocity(0,0);
  }
  
  //giving velocities to asteroids with help of if conditions.
  if(gamestate === "play"){
    asteroid1.velocityY = 4;
    if(asteroid1.y > 150){
      asteroid2.velocityY = 4;
    }
    
    if(asteroid2.y > 150){
      asteroid3.velocityY = 4;
    }
    
    if(asteroid3.y > 150){
      asteroid4.velocityY = 4;
    }
    
    if(asteroid4.y > 150){
      asteroid5.velocityY = 4;
    }
    
    if(asteroid5.y > 150){
      asteroid6.velocityY = 4;
      asteroid7.velocityY = 4;
    }
    if(asteroid7.y > 150){
      asteroid8.velocityY = 4;
    }
    
    if(asteroid8.y > 150){
      asteroid9.velocityY = 4;
    }
    
    if(asteroid9.y > 150){
      asteroid10.velocityY = 4;
    }
    
    if(asteroid10.y > 150){
      asteroid11.velocityY = 4;
    }
    
    if(asteroid11.y > 150){
      asteroid12.velocityY = 4;
      asteroid13.velocityY = 4;
    }
    if(asteroid13.y > 150){
      asteroid14.velocityY = 4;
    }
    
    if(asteroid14.y > 150){
      asteroid15.velocityY = 4;
    }
    
    if(asteroid15.y > 150){
      asteroid16.velocityY = 4;
    }
    
    if(asteroid16.y > 150){
      asteroid17.velocityY = 4;
    }
    
    if(asteroid17.y > 150){
      asteroid18.velocityY = 4;
      asteroid19.velocityY = 4;
    }
    if(asteroid19.y > 150){
      asteroid20.velocityY = 4;
    }
  }
  //making the player move using the arrow keys
  if(keyDown("left") && gamestate === "play"){
    player.x = player.x - 3;
  }
  if(keyDown("right") && gamestate === "play"){
    player.x = player.x + 3;
  }
  
  //stopping player from escaping the canvas screen
  createEdgeSprites();
  player.bounciness = 0;
  player.bounceOff(leftEdge);
  player.bounceOff(rightEdge);
  
  //checking if player is touching the asteroids
    if(player.isTouching(asteroid1)|| player.isTouching(asteroid2) || player.isTouching(asteroid3)|| player.isTouching(asteroid4) || player.isTouching(asteroid5) || player.isTouching(asteroid6) || player.isTouching(asteroid7)
    || player.isTouching(asteroid8)|| player.isTouching(asteroid9) || player.isTouching(asteroid10)|| player.isTouching(asteroid11) || player.isTouching(asteroid12) || player.isTouching(asteroid13) || player.isTouching(asteroid14)
    || player.isTouching(asteroid15)|| player.isTouching(asteroid16) || player.isTouching(asteroid17)|| player.isTouching(asteroid18) || player.isTouching(asteroid19) || player.isTouching(asteroid20)){
    if(player.isTouching(asteroid1)){
      asteroid1.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid2)){
      asteroid2.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid3)){
      asteroid3.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid4)){
      asteroid4.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid5)){
      asteroid5.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid6)){
      asteroid6.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid7)){
      asteroid7.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid8)){
      asteroid8.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid9)){
      asteroid9.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid10)){
      asteroid10.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid11)){
      asteroid11.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid12)){
      asteroid12.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid13)){
      asteroid13.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid14)){
      asteroid14.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid15)){
      asteroid15.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid16)){
      asteroid16.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid17)){
      asteroid17.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid18)){
      asteroid18.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid19)){
      asteroid19.setAnimation("Fireball_eating");
    }
    if(player.isTouching(asteroid20)){
      asteroid20.setAnimation("Fireball_eating");
    }
    playSound("assets/category_alerts/vibrant_game_negative_bling_1.mp3");
    hearts = hearts - 1;
    player.y = 1000;
    player.visible = false;
    player_falling.visible = true;
    player_falling.velocityY = 2; 
  }
  
  player_falling.x = player.x;
  if(player_falling.y > 430){
    player_falling.y = 250;
    player.visible = true;
    player_falling.visible = false;
    reset();
  }
  
  if(hearts <= 0){
    gamestate = "over";
    noStroke();
    strokeWeight(2);
    fill("white");
    textAlign(CENTER);
    text("You lose, try Again!",200,50);
    reset();
    player.x = 10000;
    player.y = 10000;
  }
  
  if(hearts > 0 && asteroid20.y > 450){
    gamestate = "over";
    noStroke();
    strokeWeight(2);
    fill("white");
    textAlign(CENTER);
    text("Well done, You win!",200,50);
    reset();
    player.x = 10000;
    player.y = 10000;
  }
  
  if(gamestate === "over"){
    noStroke();
    strokeWeight(30);
    fill("white");
    textAlign(CENTER);
    text("Game Over!",200,30 );
  } 
  
  drawSprites();
  
  function reset(){
    player.setAnimation("rocket");
    player.x = 200;
    player.y = 250;
    asteroid1.setAnimation("fireball");
    asteroid2.setAnimation("fireball");
    asteroid3.setAnimation("fireball");
    asteroid4.setAnimation("fireball");
    asteroid5.setAnimation("fireball");
    asteroid6.setAnimation("fireball");
    asteroid7.setAnimation("fireball");
    asteroid8.setAnimation("fireball");
    asteroid9.setAnimation("fireball");
    asteroid10.setAnimation("fireball");
    asteroid11.setAnimation("fireball");
    asteroid12.setAnimation("fireball");
    asteroid13.setAnimation("fireball");
    asteroid14.setAnimation("fireball");
    asteroid15.setAnimation("fireball");
    asteroid16.setAnimation("fireball");
    asteroid17.setAnimation("fireball");
    asteroid18.setAnimation("fireball");
    asteroid19.setAnimation("fireball");
    asteroid20.setAnimation("fireball");
    if(gamestate === "over" || mouseIsOver(backbutton)){
      asteroid1.setVelocity(0,0);
      asteroid2.setVelocity(0,0);
      asteroid3.setVelocity(0,0);
      asteroid4.setVelocity(0,0);
      asteroid5.setVelocity(0,0);
      asteroid6.setVelocity(0,0);
      asteroid7.setVelocity(0,0);
      asteroid8.setVelocity(0,0);
      asteroid9.setVelocity(0,0);
      asteroid10.setVelocity(0,0);
      asteroid11.setVelocity(0,0);
      asteroid12.setVelocity(0,0);
      asteroid13.setVelocity(0,0);
      asteroid14.setVelocity(0,0);
      asteroid15.setVelocity(0,0);
      asteroid16.setVelocity(0,0);
      asteroid17.setVelocity(0,0);
      asteroid18.setVelocity(0,0);
      asteroid19.setVelocity(0,0);
      asteroid20.setVelocity(0,0);
    }
    player.setVelocity(0,0);
    player.visible = true;
  }
  
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
