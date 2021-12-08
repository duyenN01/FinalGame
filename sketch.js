'use strict';
let osc;
let waveFormSelect;

function setup() {
  createCanvas(windowWidth, windowHeight);
  osc = new p5.Oscillator('square');

  //a dropdown menu to change osc type
createP('Select waveform: ');
waveFormSelect = createSelect();
  waveFormSelect.position(10,10);
  waveFormSelect.option('sine');
  waveFormSelect.option('sawtooth');
  waveFormSelect.option('square');
  waveFormSelect.option('triangle');
waveFormSelect.changed(setWaveForm);

  //osc.setType('');


  //osc.start();

}

function draw() {
  osc.freq(map(mouseX, 0, width, 60, 1600));

  osc.amp(map(mouseY,0, height, 0, .2 ));


}

function setWaveForm(){
  osc.setType(waveFormSelect.value);
}

function mousePressed (){
  osc.start();

}

// fucntion mouseReleased() {
//
//
// }
