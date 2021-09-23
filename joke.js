async function generateJoke(){
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            'Accept' : 'application/json'
        }
    })

    const generatedJoke = await response.json()
    alert(generatedJoke.joke)
}