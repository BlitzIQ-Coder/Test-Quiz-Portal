
let cheatAttempts = 0;

function resetQuiz() {
    document.getElementById('quizForm').reset();
    cheatAttempts = 0;
    console.log("Quiz has been reset due to cheating attempts.");
}

function submitQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    
    if (q1 && q2) {
        alert("Quiz submitted!");
    } else {
        alert("Please answer all questions before submitting.");
    }
}

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        cheatAttempts++;
        console.log("Visibility change detected. Cheat attempts: " + cheatAttempts);
        if (cheatAttempts > 0) {
            alert("You Are Cheating! The quiz will reset.");
            resetQuiz();
        }
    }
});

window.onblur = function() {
    cheatAttempts++;
    console.log("Window blur detected. Cheat attempts: " + cheatAttempts);
    if (cheatAttempts > 0) {
        alert("Lol Another Method to Cheat? The quiz will reset.");
        resetQuiz();
    }
};
