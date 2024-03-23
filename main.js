/*Complète le code ci-dessous*/

    // Récupérer les div qui contiennent les bouton du drumpad dans une constante keys avec querySelectior
let keys= document.querySelectorAll(".key")
    // Récupérer les balises audio qui contiennt les sons dans une constante audios avec querySelectior
let audios= document.querySelectorAll("audio")

    //Récupère l'évènement quand une touche est cliquée 
window.addEventListener('keydown', function(e){
     if (e.repeat) { 
        return 
           }
   
    
    audios.forEach(audio => {
        if ( e.keyCode == audio.getAttribute('data-key'))
            // vérifier si le keyCode de l'argument est égal à l'attribut 'data-key' de l'audio avec la méthode getAttribute()
             { 
            // Décommente la ligne ci-dessous si besoin
            audio.currentTime = 0;

            //Joue le son ici
        audio.play();
        } 
       })
  
    
    keys.forEach(key => {
        if (e.keyCode == key.getAttribute('data-key'))
          { key.classList.add('playing');

           key.addEventListener('transitionend', function(e) {
            //     return
            key.classList.remove('playing')
           })
    }
            })
           })

    
  
  


//Ici on déclare une fonction asynchrone pour lancer un beat

async function beatBox() {
    function simulateKey(key) {
        var boxkey = new Event('keydown',{
            bubbles : true
        });
        boxkey.keyCode = key
        window.dispatchEvent(boxkey)
    }
    function playBeat(time,key){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
            resolve(simulateKey(key));
            },time)
        })
        
    }

    await playBeat(50, 90)
    await playBeat(400, 83)
    await playBeat(50, 67)
    await playBeat(420, 83)
    await playBeat(420, 83)
    await playBeat(420, 83)
    
}








   



