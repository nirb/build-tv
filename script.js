function fetchAndDisplayText(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            const element = document.getElementById(elementId);
            element.textContent = text;
            console.log("got",text)
        })
        .catch(error => {
            console.error("Error fetching text:", error);
        });
}

// Replace with the actual URL of your public file
const text1_url = "https://tv-info.s3.amazonaws.com/text1.txt";
const text2_url = "https://tv-info.s3.amazonaws.com/text1.txt";
const text3_url = "https://tv-info.s3.amazonaws.com/text1.txt";
const text4_url = "https://tv-info.s3.amazonaws.com/text1.txt";

fetchAndDisplayText(text1_url, "object1");
fetchAndDisplayText(text2_url, "object2");
fetchAndDisplayText(text3_url, "object3");
