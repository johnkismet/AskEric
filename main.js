let questions = ["Who do you sometimes compare yourself to?", "What life lesson did you learn the hard way?", "Do you have any unpopular opinions?", "What would you do differently if you knew nobody would judge you?", "What do you want most?", "Where do you find inspiration?", "What impact do you want to leave on the world?", "What do you have that you cannot live without?", "Would you quit your job if you were given 10 million dollars? (tax free ;) )", "What is your greatest challenge?", "Who do you think of first when you think of success?", "What did you want to be when you grew up?" , "What was the hardest part of the Kenzie curriculum?", "What was your favorite project from Kenzie?", "Are you working on any side projects right now?", "When did you first meet Mike?", "How's life?", "Is cereal soup?", "Can you come up with a new conspiracy on the spot?", "What's the worst smell you've ever smelled?", "Do you have a joke?", "What would be the absolute worst name you could give your child?", "Why is your dog named Marley?", "Can you imagine yourself teaching anything else?", "POP QUIZ! <br> What company developed Javascript", "POP QUIZ! <br> Explain the difference between '===' and '==' like you would to a 5 year old", "POP QUIZ! <br> What are all the looping structures in JavaScript?", "POP QUIZ! <br> What are the pros and cons of functional programming vs object-oriented programming?", "POP QUIZ! <br> What is asynchronous programming, and why is it important in JavaScript?", "What is the most interesting piece of trivia you know?", "What was the worst purchase you’ve ever made?", "What's your biggest tip for us, either Kenzie-related or generally?", "What do you own that a lot of people comment on?", "Where would you like to live?", "What's your favorite website?", "Biggest pet peeve?", "What obscure site do you love?", "You can't save it, you have to spend it in 24 hours, what would you do if I gave you a hundred thousand dollars right now?", "What's your computer wallpaper?", "Tell us something you're passionate about aside from coding", ""]
let used = []

let numberOfQuestions = questions.length
let questionText = document.getElementById('question')

function randomQuestion() {
    let questionNumber = Math.floor(Math.random() * numberOfQuestions)

    questionText.innerHTML = questions[questionNumber]

}


