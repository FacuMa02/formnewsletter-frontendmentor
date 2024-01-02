# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

This project was very useful to put in practice my basic knowledge of HTML, CSS and of course Javascript, in which I am introducing myself. I mainly focused on learning how to manipulate the DOM and create interaction using JS's functions. Being optimistic, I found great solutions that I have added in the code, for some of them I did a research in forums, documentation and websites, but I also used my knowledge that I have achieved in a course. However,in many parts I consider that the syntax is not very clear because of my lack of experience using Javascript. It would be a pleasure if you let me know the mistakes I possibly made.

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [](https://editor.p5js.org/FacuMa02/full/beUUN4qf5)

## My process

I will describe the process in steps, explaining in which one the reason why is in its respective position:

1. Code the HTML file of the main page
2. Add style. In the process I forgot to code the mobile UI first, so I struggled to add media queries.
3. Code the interaction. I split it into two files:
   a. Firstly ![Image Resize](/javascript/img_resize.js) (I could not find a better way to change the image size automatically based on the screen size)
   b. Secondly the ![Submit](/javascript/submit.js), in which there is an If statement that compares the user mail's input with a regular expresion, if the format is OK, it returns the success screen and otherwise, gives a message indicating that the input is not valid.
4. Code the HTML of the success page. This part was quite challenging in order to make the elements of the main page dissapear and show the success message, using the same style. I solved this problem using CSS's classes to show and hide particular elements (as well as keeping the same style everytime). Then, I used Javascript's methods to add and remove this classes according to the condition of If statement.
5. Finally I commented and optimized the code the best I could.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
/*proud of this CSS 
(the color, shadow and transition of the submit button) */
.data button {
  background-color: hsl(234, 29%, 20%);
  color: hsl(0, 0%, 100%);
  border-color: hsl(234, 29%, 20%);
  transition-duration: 0.4s;
}

.data button:hover {
  background-color: hsl(4, 100%, 67%);
  border-color: hsl(4, 100%, 67%);
  cursor: pointer;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

/*class I added to the elements I did not want to show */
.hidden {
  display: none;
}
```

```js
//the interaction based on the if statement
submitBtn.addEventListener("click", () => {
  let format = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

  if (input_mail.value && format.test(input_mail.value)) {
    successMessage.classList.remove("hidden");
    data.classList.add("hidden");
    imgContainer.classList.add("hidden");
    successMessage.children[2].children[0].innerHTML = input_mail.value;
  } else {
    input_mail.classList.add("error");
    notValidInp.classList.remove("hidden");
  }
});
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

Definitely I have to improve at DOM's manipulation using Javascript. I think the amazing upgrade I could give to the code if I know more about JS.

Additionally I should immerse myself into learning good practices. I seriously did my best to programme the whole functionality in a proper way, but I got stuck in the process because I simply did not know any another alternative to improve the code.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- GitHub - [FacuMa02](https://github.com/FacuMa02)
- Frontend Mentor - [@FacuMa02](https://www.frontendmentor.io/profile/FacuMa02)
