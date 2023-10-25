function getRandomFloat(min, max) {
    return Math.random() * (max - min + 1) + min;
}
function fetching_data(){
    const randomValue = getRandomFloat(0, 200);
    const url = `https://api.adviceslip.com/advice/${randomValue}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById("message");
            dataContainer.textContent = data.slip.advice;
        })
        .catch(error => console.error('Error:', error));
}
fetching_data();
setInterval(()=>{
    fetching_data();
    },5000);

