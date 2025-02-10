const bestowedFortunes = [
    "Today, you will find a coupon for your favorite restaurant.",
    "You can expect your pet to learn a new trick today.",
    "You might lose a match in a competitive game, which in turn will cause your rank to go down",
    "You will maybe make a new friend in public today, it will honestly really depend on your social skills.",
    "Be careful around candy that is solid, the fortune says its a rock.",
    "Momentary distractions, will lead you to not finish your work today.",
    "You will find a new perspective in time, but always stay true to what you think is right.",
    "What a boring day planned for you.",
    "A kind action could lead to some serious reward in the future for you.",
    "There is paper in the pizza."
];

// Function to get a random fortune from the list
function getRandomFortune() {
    const index = Math.floor(Math.random() * bestowedFortunes.length);
    return bestowedFortunes[index];
}

// Event listener for button click
document.getElementById("fortuneButton").addEventListener("click", function() {
    const fortuneMessage = getRandomFortune();
    document.getElementById("fortuneResult").textContent = fortuneMessage;
});
