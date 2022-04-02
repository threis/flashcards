function handleAddFlashCards(event) {

    event.preventDefault()

    const inputFront = document.querySelector('form')
    const front = inputFront.front.value

    const inputBack = document.querySelector('form')
    const back = inputBack.back.value

    fetch("http://localhost:3000/flashcards", {
        method: "POST",
        body: JSON.stringify({
            front,
            back
        }),
        headers: {
            'Content-Type': 'application/json'

        }
    }).then(document.querySelector('form').front.value = '')
        .then(document.querySelector('form').back.value = '')
        .catch(err => console.log(`Error: ${err}`));
}