function Iniciar()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/UvfdmCeMA/model.json', modelReady);
}
function modelReady()
{
  classifier.classify(gotResults);
}
function gotResults(error,results){
  if(error){
console.error(error);}
else{
console.log(results);
random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
document.getElementById("nc").innerHTML =results[0].label;
document.getElementById("nc").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
document.getElementById("precisión").innerHTML = (results[0].confidence*100).toFixed(2)+"%";
document.getElementById("precisión").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
img = document.getElementById ("sf");

if(results[0].label=="Ruido de fondo")
{
  img.src="https://i.gifer.com/IubQ.gif";
}
else if(results[0].label=="perro")
  {
    img.src="https://i.gifer.com/GBkN.gif";
  }
else if(results[0].label=="gato")
    {
      img.src="https://i.pinimg.com/originals/c6/48/a4/c648a49df19a9ff7c7d0cc3c2fb2646d.gif";
    }
    else if(results[0].label=="elefante")
      {
        img.src="https://i.gifer.com/origin/16/16fd6202dff970bffc7b8bf0a06de491_w200.gif";
      }
      else if(results[0].label=="pajaro")
        {
          img.src="https://i.pinimg.com/originals/a4/e4/c9/a4e4c91770a82b2bdffb369b031e0b21.gif";
        }
        else
          {
            img.src="https://i.pinimg.com/originals/05/8b/a0/058ba0930eabe03ed513fdd71c60bde5.gif";
          }
        }}
