setInterval(()=>{
    let d = new Date();
    console.log(d);
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let hRotation = 30*hour + minutes/2;
    let mRotation = 6*minutes + (1/10)*seconds;
    let sRotation = 6*seconds;
    let hourHand = document.getElementById('hourHand');
    let minuteHand = document.getElementById('minuteHand');
    let secondHand = document.getElementById('secondHand');

    hourHand.style.transform=`rotate(${hRotation}deg)`;
    minuteHand.style.transform=`rotate(${mRotation}deg)`;
    secondHand.style.transform=`rotate(${sRotation}deg)`;

},1000);