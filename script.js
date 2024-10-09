function fetchAndDisplayText(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            const element = document.getElementById(elementId);
            element.textContent = text;
        })
        .catch(error => {
            console.error("Error fetching text:", error);
        });
}

// Replace with the actual URL of your public file
const text1_url = "https://drive.google.com/file/d/1eOGWICX7pLxCdQmo9mOWl6511AuB_vZ6/view?usp=sharing";
const text2_url = "https://drive.google.com/file/d/1NsIcc3N1dElS6hZ97qA-TAHzGeoJfJBS/view?usp=sharing";
const text3_url = "https://drive.google.com/file/d/1G6fxdJOG_SVv1EQECQrlvmvZnI9Swj1G/view?usp=sharing";
const text4_url = "https://drive.google.com/file/d/1W-bV2wjowcCqtkTUKfHH2He0ZNYKf8Ta/view?usp=sharing";

fetchAndDisplayText(text1_url, "object1");
fetchAndDisplayText(text2_url, "object2");
fetchAndDisplayText(text3_url, "object3");