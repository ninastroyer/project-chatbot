// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const form = document.getElementById('name-form');
const inputValue = document.getElementById('name-input');
const inputWrapper = document.getElementById('input-wrapper');


// If you need any global variables that you can use across different functions, declare them here:
let currentQuestion = 0;
let yourName = "";
let country = "";

// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML +=  `
    <section class="user-msg">
      <div class="bubble user-bubble">
        <p>${message}</p>
      </div>
      <img src="assets/user.png" alt="user bot" />  
    </section>`

    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML +=  `
    <section class="bot-msg">
    <img src="assets/bot.png" alt="chat bot" /> 
      <div class="bubble bot-bubble">
        <p>${message}</p>
      </div> 
    </section>`
  }
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight;
};

// Starts here
const greetUser = () => {
  // here we call the function showMessage, that we declared earlier with the argument "Hello there, What's your name?" for message, and the argument "bot" for sender
  showMessage("Welcome to your experience, what's your name?", "bot");
};

//Bot asks wich kind of activity
  const activityQuestion = () => {
    showMessage(`Nice to meet you ${yourName}! Which activity do you want to book?`, 'bot');
    inputWrapper.innerHTML = //add three activity buttons
    `<button id="kayak-btn" type="submit">Kayaking</button>
    <button id="dive-btn" type="submit">Diving</button>
    <button id="climb-btn" type="submit">Climbing</button>`;
    //activity buttons should show up here
  document.getElementById('kayak-btn')
.addEventListener('click', () => handleActivityQuestion('Kayaking'));
document.getElementById('dive-btn')
.addEventListener('click', () => handleActivityQuestion('Diving'));
document.getElementById('climb-btn')
.addEventListener('click', () => handleActivityQuestion('Climbing'));
   };

  
//Bot asks where the activity should take place
const whereQuestion = () => {
    showMessage(`Where do you want to go on your adventure?`, 'bot');
inputWrapper.innerHTML = //add three where buttons
`<button id="bali-btn" type="submit">Bali</button>
<button id="iceland-btn" type="submit">Iceland</button>
<button id="hawaii-btn" type="submit">Hawaii</button>`;
//where buttons should show up here
document.getElementById('bali-btn')
.addEventListener('click', () => handleWhereQuestion('Bali'));
document.getElementById('iceland-btn')
.addEventListener('click', () => handleWhereQuestion('Iceland'));
document.getElementById('hawaii-btn')
.addEventListener('click', () => handleWhereQuestion('Hawaii'));
};

//OLD
//Orderconfirmation. last message yes or no
// const orderConfirmation = () => {
//   showMessage(`Greate choice, Would you like to make a booking?`, "bot");
//   inputWrapper.innerHTML = //add two choice buttons
//   `<button id="yes" value="yes">Yes please!</button>
//   <button id="no" value="no">No thanks!</button>`;
// //yes or no buttons should show here
//   document.getElementById('yes')
//   .addEventListener('click', () => handleOrderConfirmation('Yes please!'));
//   document.getElementById('no')
//   .addEventListener('click', () => handleOrderConfirmation('No thanks!'));
// };

const orderConfirmation = () => {
  showMessage(`Great choice, Would you like to make a booking?`, "bot");
  inputWrapper.innerHTML = 
  `<button id="yes" value="yes">Yes please!</button>
  <button id="no" value="no">No thanks!</button>`;

  document.getElementById('yes')
  .addEventListener('click', () => {
    handleOrderConfirmation('Yes please!');
    showMessage(`Awesome! Your booking has been confirmed!`, "bot");
  });

  document.getElementById('no')
  .addEventListener('click', () => {
    handleOrderConfirmation('No thanks!');
    showMessage(`No problem, let me know if you change your mind.`, "bot");
  });
};


//Thank you! Have a great day!!
const lastMessage = () => {
    showMessage(`Thank you, have a great day!`, 'bot');
  inputWrapper.innerHTML =``;
};

const handleInput = (event) => {
event.preventDefault()
currentQuestion++
if (currentQuestion === 1) {
  handleUserName();
} else if (currentQuestion === 2) {
  handleActivityQuestion ();
} else if (currentQuestion === 3) {
handleWhereQuestion ();
} else {
  handleOrderConfirmation();
}
};

const handleUserName = () => {
  yourName = inputValue.value;
  showMessage(`My name is ${yourName}`, 'user');
  inputValue.value = ``;
  setTimeout(activityQuestion, 1000);
};

const handleActivityQuestion = (activity) => {
  yourName = inputValue.value;
  showMessage(`I would like to go ${activity}`, 'user');
  inputValue.value = ``;
  setTimeout(whereQuestion, 1000);
};

const handleWhereQuestion = (country) => {
  yourName = inputValue.value;
  showMessage(`I want to go to ${country}`, 'user');
  inputValue.value = ``;
  setTimeout(orderConfirmation, 1000);
};

//OLD
// const handleOrderConfirmation = choice => {
//   if (choice === "Yes please!") {
//     showMessage(`Great! Let's move forward with the booking process.`, "bot");
//   } else if (choice === "No thanks!") {
//     showMessage(`Okay, no problem. Have a great day!`, "bot");
//   }
// };

const handleOrderConfirmation = (order) => {
  yourName = inputValue.value;
  showMessage(order, 'user');
  inputValue.value = ``;
  setTimeout(lastMessage, 1000);
};

// Set up your eventlisteners here - 
form.addEventListener('submit', handleInput);


setTimeout(greetUser, 1000);
  // After 1 second the greeting function will be called.

