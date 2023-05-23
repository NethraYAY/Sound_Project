var dog = 0;
var cat = 0;
var sheep = 0;
var duck = 0;
var listening = 0;

function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/51wulk2YP/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat + ' Detected Sheep - '+ sheep + ' Detected Duck - '+duck+ ' Detected Background Noise - '+listening;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal_image');

    if (results[0].label == "Barking") {
      img.src = 'dog.png';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'Cat.png';
      cat = cat + 1;
    } else if (results[0].label == "Quacking") {
      img.src = 'Duck.png';
      duck = duck+1;
    } else if (results[0].label == "Bleeting") {
      img.src = 'Sheep.png';
      sheep = sheep+1;
    } else if (results[0].label == "Listening") {
      img.src = 'ear.png';
      listening = listening+1;
    }

  }
}
