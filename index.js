const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", inputButton)

//renders emojis in the emojiContainer
function renderEmoji(){
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
renderEmoji() //first call for rendering emoji on emojiContainer

function inputButton(){
    const emojiInput = document.getElementById("emoji-input")

    //empty string evaluates to false so instead of: if (emojiInput.value !== '') we can:
    if (emojiInput.value)  {
        myEmojis.push(emojiInput.value)
        emojiInput.value = '' //resets input box when submited.
        emojiContainer.textContent = '' // resets emojiContainer
        renderEmoji()
    }
   
}