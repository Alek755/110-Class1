Webcam.set({
    width: 400,
    height: 400,
    image_format: 'png',
    png_quality: 90

});

prediction1 = "";
prediction2 = "";

camera = document.getElementById("camera");

Webcam.attach('#camera');

function capture_image() 
    Webcam.snap(function(data_uri) {
        document.getElementById("taken_photo").innerHTML = "<img id='taken_photo' src="+data_uri+"/>";
    });

console.log("ml5version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json",modelLoaded);

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is" + prediction1;
    speak_data_2 = "And the Second Prediction is" + prediction2;
    var utterthis = new SpeechSynthesisUtterence(speak_data_1 + speak_data_2);
    synth.speak(utterthis);
}