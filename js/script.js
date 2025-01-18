
//An alert to tell the user that we are currently booking in person


const getStartedButton = document.querySelector('.get-started');

getStartedButton.addEventListener('click', () => {
    alert('We are currently booking in person!');

    //change the inner text of the button
    
    getStartedButton.innerText = 'See you soon!';

});





