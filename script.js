
function setDate() {
    const now = new Date();

    const secondHand = document.querySelector('.second-hand');
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (secondsDegrees > 443) {
        secondHand.style.transition = 'none';
    }
    
    const minHand = document.querySelector('.min-hand');
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg`;
    
    const hourHand = document.querySelector('.hour-hand');
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);