//recupere les donner de l'API 

fetch('https://batman-api.sayna.space/questions')
  .then(response => response.json())
  .then(data => {
    // Traitez les données reçues ici
    StartQuiz(data)
  })
  .catch(error => {
    // Gérez les erreurs éventuelles ici
    console.error('Erreur lors de la récupération des données:', error);
  });


  function StartQuiz(question){
        console.log(question)
        //Recupere tout les quizs 
        const Start = document.querySelector(".Demarrer")
        const quiz = document.querySelector(".quiz")
        const quiz1 = document.querySelector(".quiz1")
        const quiz2 = document.querySelector(".quiz2")
        const quiz3 = document.querySelector(".quiz3")
        const quiz4 = document.querySelector(".quiz4")
        const quiz5 = document.querySelector(".quiz5")
        const quiz6 = document.querySelector(".quiz6")
        const quiz7 = document.querySelector(".quiz7")
        const quiz8 = document.querySelector(".quiz8")
        const quiz9 = document.querySelector(".quiz9")
        const quiz10 = document.querySelector(".quiz10")
        const quiz11 = document.querySelector(".quiz11")
        const quiz12 = document.querySelector(".quiz12")
        const quiz13 = document.querySelector(".quiz13")
        const quiz14 = document.querySelector(".quiz14")
        const quiz15 = document.querySelector(".quiz15")
        const popup = document.querySelector(".popup")

        //ajouter un evenement clique sur le bouton demarre
        Start.addEventListener('click',()=>{
            quiz.style.display =  "none"
            quiz1.style.display =  "block"
        })

        

        //popUp  afficher le resultat final du quiz

        document.querySelector('.bt').addEventListener('click',()=>{
          //premiere niveau de resultat
          let truth = 9
          let resultNB
          const popup_titre = document.querySelector('.popup-container h1')
          const popup_container = document.querySelector('.popup-container p')
          
          if(truth <= 5){
            popup_titre.textContent = `${truth}/15 C'EST PAS TOUT A FAIT CA ...`
            resultNB = ` Oula! heureusement que le Riddle est sous le verous... il 
                        faut que vous repassiez les films,cette fois en enlevant peut-etre
                        le masque qui vous a bloquer la vue ! Aller, rien est perdu !`
            
          }else if(truth <=10){
            popup_titre.textContent = `${truth}/15 PAS MAL!`
            resultNB = `Encore un peu d'entrainement avec le chevallier Noir vous
                      serait benefique,mais vous pouvez mrcher la tete haut vos connaissance sont
                      la,A vous de les consolider,foncez Gotham est votre terain de chasse`
          }else if(truth <=15){
            popup_titre.textContent = `${truth}/15 BRAVO!`
            resultNB = `Vous ete veritablement un super fan de l'univer de Batman!
                      Comics,films,rien ne vous echappe. Bruce Wayne a de quoi etre fier,
                      Gothamm est en paix et Batman peux prendre sa retraite,vous veilliez au grains!`
          }
          popup_container.textContent = resultNB
          popup.style.display = 'block'
          //test 
        const checkbox = document.querySelector('.checkbox')
        if(checkbox.checked){
          console.log(checkbox.nextElementSibling)
        }
        })

        document.querySelector('.pupup-btn').addEventListener('click',()=>{
          startfadeOutElement()
          setTimeout(()=>{
            popup.style.display = 'none'
          },5000)
        })
  }

