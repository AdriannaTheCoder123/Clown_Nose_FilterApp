noseX = 0;
noseY = 0;

function preload() {
 clown_nose = loadImage ('https://i.postimg.cc/hvrvfT5K/clown-nose.png');
}

function setup() {
  canvas = createCanvas(320, 320);
  canvas.center();
  video = createCapture(VIDEO)
  video.size(320, 320);
  video.hide();

   poseNet = ml5.poseNet (video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
   if(results.length > 0)  {
      console.log(results);
      noseX = results[0].pose.nose.x - 15;
      noseY = results[0].pose.nose.y - 10;
      console.log("nose x = " + noseX);
      console.log("nose y = " + noseY);
   }
}

function modelLoaded() {
  console.log('Posenet is Ready');
}

function draw() {
 image(video, 0, 0, 320, 320);
 image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot() {
   save('myFilterImage.png');
}