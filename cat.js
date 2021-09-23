export function newCat() {
    fetch('https://api.thecatapi.com/v1/images/search').then(response => response.json())
        .then((data) => {
            let catUrl = data[0].url
            document.getElementById('catPic').innerHTML = `<img style='height: 80vh; width: auto;' src=${catUrl}>`;
        });

}