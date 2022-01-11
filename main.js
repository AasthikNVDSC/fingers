Webcam.set({ 
    width:350, 
    height:300,
    image_format:'png',
    png_quality:90 });
    camera = document.getElementById("camera");
       
       Webcam.attach('#camera'); function takeSnapshots() {
            Webcam.snap(function(data_uri){
                 document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">'; 
        }); }
        
        console.log('ml5 version:',ml5.version);
         classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nLXn8rY8N/model.json',modelLoaded);
         function modelLoaded(){ console.log('model loaded!') } 

         function speak(){ 
            synth = window.speechSynthesis; 
            speak_data_1 = "The first prediction is"+prediction_1; 
            speak_data_2 = " AND The second prediction is"+prediction_2; 
 utterThis = new SpeechSynthesisisUtterance(speak_data_1 + speak_data_2); 
synth.speak(utterThis); } 
            
 function check(){
 img = document.getElementById("captured_image");
 classifier.classify(img,gotResult); }
                  
 function gotResult(results,error){ 
    if(error){
       console.error(error);
    }else{
 console.log(results);
 document.getElementById("result_gesture_name_1").innerHTML = results[0].label;
 document.getElementById("result_gesture_name_2").innerHTML = results[1].label;
 prediction_1 = results[0].label;
 prediction_2 = results[1].label; 
  speak()
 if(results[0].label == "super"){
 document.getElementById("update_gesture_1").innerHTML = "&#128076;"; }

 if(results[0].label == "victory"){
 document.getElementById("update_gesture_1").innerHTML = "&#9996;"; }
                                   
 if(results[0].label == "punch"){ 
 document.getElementById("update_gesture_1").innerHTML = "&#128074;"; }
                                   
 if(results[0].label == "thumbs up"){
 document.getElementById("update_gesture_1").innerHTML = "&#128077;"; } 
 
 if(results[0].label == "no"){
    document.getElementById("update_gesture_1").innerHTML = "&#128078;"; } 
     

 if(results[0].label == "wave"){
    document.getElementById("update_gesture_1").innerHTML = "&#9995;"; } 
     
 
 if(results[1].label == "super"){ 
 document.getElementById("update_gesture_2").innerHTML = "&#128076;"; }
                                            
 if(results[1].label == "victory"){ 
 document.getElementById("update_gesture_2").innerHTML = "&#9996;"; }
                                                
 if(results[1].label == "punch"){
 document.getElementById("update_gesture_2").innerHTML = "&#128074;"; }
                                                     
 if(results[1].label == "thumbs up"){ 
 document.getElementById("update_gesture_2").innerHTML = "&#128077;"; } 

 if(results[1].label == "no"){ 
    document.getElementById("update_gesture_2").innerHTML = "&#128078;"; } 
   
    if(results[1].label == "wave"){ 
        document.getElementById("update_gesture_2").innerHTML = "&#9995;"; } 
       
}}