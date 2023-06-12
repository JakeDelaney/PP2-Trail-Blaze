# Trail Blaze
Introducing Trail Blaze, an interactive front-end website built with HTML, CSS, and JavaScript. This quiz game consists of 15 multiple-choice questions that will put your geography knowledge to the test. 

Explore a variety of topics, including world locations, landmarks, and cultures, as you make your way through the game. Challenge yourself to improve your geographic expertise and enjoy the thrill of discovery with Trail Blaze!

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/59eecd6e-b722-4823-b30c-e703d6efb8d2)

<br>

## Table of Contents
 * User Experience (UX)
 * Features
 * Design
 * Technologies Used
 * Testing
 * Deployment
 * Credits

<br>

## User Experience (UX)
* **First Time Visitor Goals**
  * As a first time visitor, I want the purpose of the site, and the rules of the quiz, to be apparent after the content has loaded.
  * As a first time visitor, I want the ability to test my knowledge of geography, culture, and world location through an interactive quiz.
  * As a first time visitor, I want to receive both positive and negative feedback in regards to the answers that I select.
  * As a first time visitor, I want to seamlessly navigate through the quiz by using intuitive controls and calls to action.

* **Returning Visitor Goals**
  * As a returning visitor, I want the quiz to display the questions in a randomized order to keep the experience fresh and fun. 
  * As a returning visitor, I want my score to be tracked and tallied, so I can compare my progress with previous quiz attempts.

* **Frequent User**
  * As a frequent user, I want to improve my knowledge of geography, culture, and world locations though repeated quizing.
  * As a frequent user, I would like the quiz to demonstrate reponsive design, and allow me to play the quiz on different device viewports.

<br>

## Features
### Welcome section

The welcome section provides the user with a brief background on the quiz, and an explanation of the quiz rules. A call to action button is displayed as the bottom the welcome section. When the user clicks this button, the quiz will begin.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/e4bd4d58-616e-47ec-9487-5eec3d6daf10)

<br>

### Game section
The game section is the main content of the quiz. Here the user is presented with a randomly picked question and four possible answers. Once the user has made a choice, the correct answer will highlight green, while the incorrect answers will highlight red.

Two counters are also displayed here. One counter tracks the current question index, while the other counter keeps track of amount of questions the user has answered correctly.

If the user wishes to restart the quiz at any point, they can navigate to and click the 'Reset' button. This will take the user back to the welcome section.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/0119faa0-9458-4dd7-bc53-ceed2d552e12)

<br>

### Final score section
The final score section marks the end of the quiz. This section becomes visible to the user once 15 questions have been pulled from the question array. Here the user receives their final score tally that marks the total amount of questions that they have answered correctly.

A call to action button is displayed at the bottom, selecting "Return to start!" button will reload the quiz and return the user to the welcome section.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/6aee3c72-097e-4957-b14b-4448becd8f8d)

<br>

### Future features to implement
* An audio file that plays when the user selects either the correct, or incorrect answer.
* An option for the user to select the difficulty of the quiz. This will alter both the length of the quiz, and the complexity of the questions.
* An input section for a username. This username would be referenced at different points throughout the quiz.
* Once the user has selected a possible answer, an included Google Maps API would display the location of the item within the correct answer property.
* Toggable background music to accompany the user as they progress throughout the quiz

<br>

## Design
### Background image
The background image that was selected is an animated 2D landscape of a forest trail. This image was chosen as it playful and vibrant, it elicits a positive emotional reponse, and sets the tone of the quiz the user is about to play.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/0fd3461b-56c3-43dc-ae70-a19b8f178438)

<br>
 
### Color Scheme
For the color scheme, I opted for a jungle inspired aesthetic that would fit the overall theme of the quiz (discovery/exploration.) The colors within this palette contrast each other well, and also compliment the background image of the quiz.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/bac28348-6c35-4e16-bde6-00f58069369d)

<br>

### Typography
The font styles that I selected were Mulish (headings) and Convergence (paragraphs, spans, lists.) Both of these font styles were selected as they are playful, elegant, and suit each other well.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/c3df88fb-c6c5-4c89-9a0d-fffb364def9f)

<br>

### Wireframes
Below are the wireframes that were created for the game section of the quiz. The final quiz layout differs slightly compared to the initial wireframe design. These changes were a result of time constraints.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/8b989e4e-a3b1-4aea-8eee-54e3d9ed7c65)
![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/c02230c7-a0f6-4f14-b53d-704487822254)
![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/482f117b-77fb-4f13-abb2-17f1895015c1)

<br>

## Testing
### Site functionality
The below tests were carried out to verify the functionality of the quiz. All tests carried out received a passing grade, and all quiz functions have been confirmed as working.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/3becb724-a08d-4f28-820d-2516250fcd37)

<br>

### W3C HTML Validator testing
The index.html document of the quiz was validated through the W3C HTML Validator. During this test, no outstanding issues were found.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/9ee79531-48ef-42ec-98d5-0a9eb14bc86c)

<br>

### W3C CSS Validator Testing
The style.css file of the quiz was validated through the W3C CSS Validator. During this test, no outstanding issues were found.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/598954cc-15e2-4fc5-8528-0e16671bbde8)

<br>

### JShint JS Validator Testing
The script.js file of the quiz was validated through the JShint Js Validator. During this test, no outstanding issues were found.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/0eca19d3-6651-47d8-b212-44912affcc03)

<br>

### Lighthouse report
To verify if the quiz design has adhered to best practices during its development, lighthouse reports using chrome dev tools were generated. Both the mobile and desktop variants of the site ranked high across all metrics.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/f26f6712-2b1f-4287-9d9e-e4aee31aa428)

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/23b0fead-7267-494f-bd73-c95b474cc2d4)

<br>

### Identified bugs
Multiple bugs were recorded during the development of the quiz. A record of these bugs can be found in the below table.

![image](https://github.com/JakeDelaney/PP2-Trail-Blaze/assets/76518393/6d5df184-f8d4-4d15-b07b-41bca1f02ce4)

<br>

## Deployment
### How to deploy this site
* Navigate to the Settings menu from within the desired Github repository.
* Select Pages from the 'Code and automation' tab.
* Choose Source > Deploy from a branch.
* Then choose Branch > Main and click save.
* Wait a few minutes for the page to build. It can then be accessed from the desired repository under the tab "Environments."

### How to clone this site
* Navigate to the main page of the desired repository.
* Click the "Code" option above the list of files.
* Copy the repository URL, and then open up Git Bash.
* Change the current working directory to a location for the cloned directory.
* Enter the command 'git clone' and paste the copied URL.
* Press enter to create a local clone.

<br>
 
 ## Credits
 ### Technologies Used
* HTML
* CSS
* JavaScript
     
 ### Code
Love Maths project for help with initial design and guidance
* For help with array shuffling - https://bost.ocks.org/mike/shuffle/
* For help with quiz logic and design - https://www.youtube.com/playlist?list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF
 
 ### Applications
* Balsamiq Wireframes for help with initial site mockups.
* Gitpod for the development environment.
* Git for version control.
* Github for file and website hosting.
* FontAwesome for element icons.
* CloudConvert for png/jpeg to WEBP conversion
* FontJoy for font pairings.
* Coolors for palette colour generation.

 ### Media 
* Freepik for background imagery
 
 ### Acknowledgements
* My tutor Derek McCaudley for guidance during the project.
