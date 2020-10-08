const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement('span')
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
}

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", inputButton)

function inputButton(){
    const emojiInput = document.getElementById("emoji-input")

//empty string evaluates to false so instead of: if (emojiInput.value !== '') we can:
    if (emojiInput.value)  {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ''

    }
   
}