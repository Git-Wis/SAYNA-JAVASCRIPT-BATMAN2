//recupere les donner de l'API 
const popup = document.querySelector(".popup")

fetch('https://batman-api.sayna.space/questions')
//fetch('../Scripts/question_reponse.json')//pour travaillier en local
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
        //Recupere tout les quizs 
        const Start = document.querySelector(".Demarrer")
        const quiz = document.querySelector(".quiz")
        const quiz1 = document.querySelector(".quiz1")
        const quiz15 = document.querySelector(".quiz15")

        let truth = 0
        let resultNB

        //ajouter un evenement clique sur le bouton demarre
        Start.addEventListener('click',()=>{
            quiz.style.display =  "none"
            quiz1.style.display =  "block"
        })

        //calcule du score du quiz
        let i = 0
        let bt = document.querySelectorAll('.bt')
        //parcourir tout les bouton suivant du quiz une par une 
        for (buttton of bt){
          //evenement sur le bouton suivant  sur le quiz
          buttton.addEventListener('click',()=>{
            if  (i === 14){
              //popUp  afficher le resultat final du quiz
              ResultatFinal(truth)
            }else{
              const quest = document.querySelector(`.quiz${i+1} .txt h4`)
              const reponse = document.querySelectorAll(`.quiz${i+1} .checkbox`)
              console.log(quest.textContent)
              //le question dans l'api
              console.log(question[i].question)
              let j = 0
              for(const value of reponse) {
                if(value.checked){
                  console.log(value.nextElementSibling.textContent)
                  if(question[i].response[j].isGood === true){
                    console.log(question[i].response[j])
                    
                  }
                  
                  
                }else{
                  console.log(`${value.nextElementSibling.textContent} not checked!!!`)
                  if(question[i].response[j].isGood === false){
                    console.log(question[i].response[j])
                    
                  }
                }
                j++
                
              }
              if(i<14){
                document.querySelector(`.quiz${i+1}`).style.display = "none"
                document.querySelector(`.quiz${i+2}`).style.display = "block"
                i++
                truth++//test
              }
            }

          })
        }

        document.querySelector('.pupup-btn').addEventListener('click',()=>{
          startfadeOutElement()
          setTimeout(()=>{
            popup.style.display = 'none'
            
          },5000)
          quiz1.style.display =  "block"
          quiz15.style.display =  "none"
        })

        
  }

  function ResultatFinal(score){
    const popup_titre = document.querySelector('.popup-container h1')
    const popup_container = document.querySelector('.popup-container p')
    //Resultat quand le score est inferieur ou egale 5
    if(score <= 5){
      popup_titre.textContent = `${score}/15 C'EST PAS TOUT A FAIT CA ...`
      resultNB = ` Oula! heureusement que le Riddle est sous le verous... il 
                  faut que vous repassiez les films,cette fois en enlevant peut-etre
                  le masque qui vous a bloquer la vue ! Aller, rien est perdu !`
      
    }
    //Resultat quand le score est inferieur ou egale 10
    else if(score <=10){ 
      popup_titre.textContent = `${score}/15 PAS MAL!`
      resultNB = `Encore un peu d'entrainement avec le chevallier Noir vous
                serait benefique,mais vous pouvez mrcher la tete haut vos connaissance sont
                la,A vous de les consolider,foncez Gotham est votre terain de chasse`
    }
    //Resultat quand le score est inferieur ou egale 15
    else if(score <=15){
      popup_titre.textContent = `${score}/15 BRAVO!`
      resultNB = `Vous ete veritablement un super fan de l'univer de Batman!
                Comics,films,rien ne vous echappe. Bruce Wayne a de quoi etre fier,
                Gothamm est en paix et Batman peux prendre sa retraite,vous veilliez au grains!`
    }
    popup_container.textContent = resultNB
    popup.style.display = 'block'
  
  }
