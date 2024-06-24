document.addEventListener('DOMContentLoaded', () => {
    const addQuestionButton = document.getElementById('add-question-button');
    const formContainer = document.getElementById('form-container');

    addQuestionButton.addEventListener('click', addQuestion);

    function addQuestion() {
        // Create a new question container
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');

        // Create a label for the question
        const questionLabel = document.createElement('label');
        questionLabel.textContent = `Question ${formContainer.children.length + 1}:`;

        // Create an input for the question
        const questionInput = document.createElement('input');
        questionInput.type = 'text';
        questionInput.name = `question${formContainer.children.length + 1}`;
        questionInput.placeholder = 'Type your question here';

        // Append the label and input to the question container
        questionContainer.appendChild(questionLabel);
        questionContainer.appendChild(questionInput);

        // Append the question container to the form container
        formContainer.appendChild(questionContainer);
    }
});
