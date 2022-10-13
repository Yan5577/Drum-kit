const input = document.querySelectorAll('.fa-drum');
  input.forEach( (eachBtn) => { 
   eachBtn.addEventListener('click', () => {
    const drumAudio = document.querySelector(`audio[data-drumsound="${eachBtn.dataset.drumsound}"]`);
    drumAudio.play();
    console.dir(eachBtn.dataset)
}) 
}) 





// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (name == 'A'|| name == 'a') {
       var x1 = document.getElementById("myAudio1");
        x1.play();
    }
     
     if (name == 'S' || name == 's') {
       var x2 = document.getElementById("myAudio2");
        x2.play();
    }

    if (name == 'D' || name == 'd') {
        var x2 = document.getElementById("myAudio3");
         x2.play();
     }

     if (name == 'F' || name == 'f') {
        var x2 = document.getElementById("myAudio4");
         x2.play();
     }

     if (name == 'G' || name == 'g') {
        var x2 = document.getElementById("myAudio5");
         x2.play();
     }

     if (name == 'H' || name == 'h') {
        var x2 = document.getElementById("myAudio6");
         x2.play();
     }

    });

