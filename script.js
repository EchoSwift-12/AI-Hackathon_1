  // JavaScript Functions

    // Smooth navigation between sections
    function navigateTo(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
      }
  
      // Simple Q&A functionality
      function getAnswer() {
        const question = document.getElementById('question').value;
        const answerBox = document.getElementById('answer');
  
        if (!question.trim()) {
          answerBox.textContent = 'Please type a question!';
          return;
        }
  
        // Example response logic
        answerBox.textContent = `AI says: "Great question! Here's an explanation for '${question}'."`;
      }