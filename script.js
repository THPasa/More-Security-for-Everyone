
  // Delayed video appearance

document.addEventListener("DOMContentLoaded", function() {
setTimeout(function() {
      const delayed = document.getElementById("delayed");
      if (delayed) {
          delayed.classList.remove("hidden");
          delayed.classList.add("visible");
      }
  }, 1000); 
});

// Kindof page back button

function backKindOf() {
    window.location.href = "index.html#howSec"; // to back index.html kindof card
};


// Quiz page back button
function quiz(){
    window.location.href = "index.html#quiz";
};

//Quiz answers and score system
let score = 0;
const answered = new Set();
const totalQuestions = document.querySelectorAll('.statement').length;

// add eventlistener
document.querySelectorAll('.statement').forEach((statement, index) => {
  const trueBtn = statement.querySelector('.ans_true');
  const falseBtn = statement.querySelector('.ans_false');
  const trueExp = statement.querySelector('.exp_true');
  const falseExp = statement.querySelector('.exp_false');
  const correctAnswer = (statement.dataset.answer === 'true');

  trueBtn.addEventListener("click", () =>
    handleAnswer(index, true, trueExp, falseExp, correctAnswer, trueBtn, falseBtn)
  );

  falseBtn.addEventListener("click", () =>
    handleAnswer(index, false, trueExp, falseExp, correctAnswer, trueBtn, falseBtn)
  );
});


function handleAnswer(index, selectedIsTrue, trueExp, falseExp, correctAnswer, trueBtn, falseBtn) {
  if (answered.has(index)) return; // if has then stop
  answered.add(index);

  const isCorrect = (selectedIsTrue === correctAnswer);

  // explanations visibiliyt settings
  if (selectedIsTrue) {
    trueExp.style.display = 'block';
    falseExp.style.display = 'none';
  } else {
    falseExp.style.display = 'block';
    trueExp.style.display = 'none';
  }

  if (selectedIsTrue) {
    trueBtn.classList.add("selected-true");
    falseBtn.disabled = true; 
  } else {
    falseBtn.classList.add("selected-false");
    trueBtn.disabled = true;
  }
  
  trueBtn.disabled = true;
  falseBtn.disabled = true;
  
  // add score
  if (isCorrect) {
    score += 6.5;
  }

  // show result
  if (answered.size === totalQuestions) {
    showResult();
  }
}

function showResult() {
  const resultDiv = document.createElement('div');
  
  const roundedScore = Math.floor(score);
  const maxScore = 100;

let feedback="";
if (roundedScore === 97) {
  feedback = `🌟 Bravo! You gave the best answers to all situations. You are highly conscious of safety. But remember: there's no such thing as 'perfect security' so, don't expect a full 100 points.. Always stay alert!`;
} else if (roundedScore <= 30) {
  feedback = `🛡️ There seems to be a serious lack of security awareness. You should be more careful in your daily life and pay more attention to digital and physical security. But don't worry, you are here to learn!`;
} else if (roundedScore <= 50) {
  feedback = `👍 You have a basic level of awareness, but you still miss some risky situations. With a few habit changes, you can get much better at security.`;
} else if (roundedScore <= 79) {
  feedback=`🙂 That's pretty good! You use good judgement in most situations. This shows that you're safety-conscious. However, sometimes small negligence can have big consequences. That's why you must always keep your vigilance level high.`;
} else if(roundedScore <97){
  feedback=`🙂 You have a great level of awareness! You don't overlook details about safety that most people don't realise. Remember though, there is always room for improvement. Stay safe!`
}

// Dom manipulation
  let pTag= document.createElement("p");
  let strongTag= document.createElement("strong");
  let buttonTag= document.createElement("button");

  strongTag.textContent=`Your Score: ${roundedScore}/100`;
  pTag.textContent= feedback;
  buttonTag.textContent = "⟲ Try Again";
  
  buttonTag.addEventListener("click", function(e){
    location.reload();
    window.scrollTo(0,0); // go to top of page
    
  });

  resultDiv.classList.add("quiz-feedbacks");
  strongTag.classList.add("feedbacks-strong");
  buttonTag.classList.add("quiz-resBut");
  document.querySelector('.quiz').appendChild(resultDiv);
  resultDiv.append(strongTag, pTag, buttonTag);
}

//james
  function james(){
    window.location.href = "index.html#james";
  };
  
  document.querySelectorAll('.what_happ, .what_happ_2').forEach(possibilitie => {
    const pos_true = possibilitie.querySelector('.pos_true');
    const pos_false = possibilitie.querySelector('.pos_false');
    const pos_false_2 = possibilitie.querySelector('.pos_false_2');
    
    const pos_exp_true = possibilitie.querySelector('.pos_exp_true');
    const pos_exp_false = possibilitie.querySelector('.pos_exp_false');
    
    const buttons = possibilitie.querySelectorAll('.possibilities button');
    const resetButton = possibilitie.querySelector('.reset_btn');
    
    //add eventlistener
    pos_true.addEventListener('click', () => {
      pos_exp_true.style.display = 'block';
      pos_exp_false.style.display = 'none';
    });
    
    pos_false.addEventListener('click', () => {
      pos_exp_false.style.display = 'block';
      pos_exp_true.style.display = 'none';
    });
    
    pos_false_2.addEventListener('click', () => {
      pos_exp_false.style.display = 'block';
      pos_exp_true.style.display = 'none';
    });
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        //remove from class
        buttons.forEach(b => b.classList.remove('selected_pos_button'));
        
        // add selected class
        button.classList.add('selected_pos_button');
      });
    });
    
    // reset button event
    resetButton.addEventListener('click', () => {
      pos_exp_true.style.display = 'none';
      pos_exp_false.style.display = 'none';
      buttons.forEach(b => b.classList.remove('selected_pos_button'));
    });
  });

  //emma

  function emma(){
    window.location.href = "index.html#emma";
  };
  
  //mail event
  document.addEventListener('DOMContentLoaded', function () {
    const words = document.querySelectorAll('.red_flag');
    const explanation = document.querySelector('.pos_exp_mail');
    let count = 0;
    words.forEach(function (word) {
      word.addEventListener('click', function () {
        word.classList.add('clicked');
        count++;
        if(count === 5){
        explanation.style.display = 'block';
        }
    });
    });
  });
  