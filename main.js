var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 

recognition.onresult = function(event) {

    console.log(event); 
   
   var Content = event.results[0][0].transcript;
   
       document.getElementById("textbox").innerHTML = Content;
       console.log(Content);
       if(Content=="Toma mi selfie")
       {
       console.log("Tomando selfie....");
       speak();//llamar a la funcion
       }
        
   }

   function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Tomando selfie en 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);
    setTimeout(function(){
    take_snapshot();
    },5000)

    
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()  //esta funcion toma la foto
{
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';
});
}

function save()
{
link=document.getElementByIdI("link");
image=document.getElementById("selfie_image").scr;
link.href=image;
link.click();
}