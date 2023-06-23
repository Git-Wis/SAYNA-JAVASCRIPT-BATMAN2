//recupere les donner de l'API 
const popup = document.querySelector(".popup")

//fetch('https://batman-api.sayna.space/questions')
fetch('../Scripts/question_reponse.json')//pour travaillier en local
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
        const start = document.querySelector(".Demarrer")
        const quiz = document.querySelector(".quiz")
        const quiz1 = document.querySelector(".quiz1")
        const quiz12 = document.querySelector(".quiz12")

        //calcule du score du quiz
        let truth = 0
        let resultNB
        let firstBt = true

        
        let bt = document.querySelectorAll('.bt')
        console.log(bt)///test
        //parcourir tout les bouton suivant du quiz une par une 

        for (let i = 0; i < question.length+1; i++){
          //evenement sur le bouton suivant  sur le quiz
          bt[i].addEventListener('click',()=>{
            if  (i === (question.length)){
              //popUp  afficher le resultat final du quiz
              ResultatFinal(truth)
            }else{
              const quest = document.querySelector(`.quiz${i+1} .txt h4`)
              const text = document.querySelector(`.quiz${i+1} .txt .ans`)
              
              //ajouter les question et reponse possible dans le quiz
              let j = 0

              showCheckAnswer(quest,text,question[i])


              const reponse = document.querySelectorAll(`.quiz${i} .checkbox`)
              console.clear()
              if(!firstBt){
                for(const value of reponse) {
                if(value.checked){
                  
                  console.log(value.nextElementSibling.textContent)
                  if(question[i-1].response[j].isGood === false){
                    console.log("votre reponse est faux ")
                    break
                  }else{
                    console.log(question[i-1].response[j])
                    truth++//test
                  }
                  
                  
                }else{
                  console.log(`${value.nextElementSibling.textContent} not checked!!!`)
                  if(question[i-1].response[j].isGood === false){
                    console.log(question[i-1].response[j])
                    
                  }
                }
                j++
                
              }
              }
              if(i<(question.length)){
                if(firstBt){
                  quiz.style.display =  "none"
                  document.querySelector(`.quiz${1}`).style.display = "block"
                }else{
                  document.querySelector(`.quiz${i}`).style.display = "none"
                  document.querySelector(`.quiz${i+1}`).style.display = "block"
                }

                
                i++
                
                firstBt = false
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
          quiz12.style.display =  "none"
        })

          
        
        
        
  }
  
  function showCheckAnswer(quest, text, question) {
    // Efface le contenu précédent de la zone de texte
    text.innerHTML = "";
  
    // Affiche la question
    quest.textContent = question.question;
  
    // Parcours les réponses et les ajoute au quiz
    for (const response of question.response) {
      const answer = document.createElement("div");
      answer.classList.add("answer");
  
      const inputCheckbox = document.createElement("input");
      inputCheckbox.setAttribute("type", "checkbox");
      inputCheckbox.classList.add("checkbox");
  
      const textCheckbox = document.createElement("p");
      textCheckbox.textContent = response.text;
  
      answer.appendChild(inputCheckbox);
      answer.appendChild(textCheckbox);
      text.appendChild(answer);
    }
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
