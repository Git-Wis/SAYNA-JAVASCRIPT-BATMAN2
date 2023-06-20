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

