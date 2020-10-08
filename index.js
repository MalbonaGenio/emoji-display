const myEmojis = ["👨‍💻", "⛷", "🍲"]

//renders emojis in the emojiContainer
function renderEmoji(){
    const emojiContainer = document.getElementById("emoji-container")
    emojiContainer.textContent = ''
    
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}
renderEmoji() //first call for rendering emoji on emojiContainer

const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", inputButtonEnd)

function inputButtonEnd(){
    //empty string evaluates to false so instead of: if (emojiInput.value !== '') we can:
    if (emojiInput.value)  {
        myEmojis.push(emojiInput.value)
        emojiInput.value = '' 
        renderEmoji()
    }
}

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", inputButtonBeginning)

function inputButtonBeginning(){
    if (emojiInput.value)  {
        myEmojis.unshift(emojiInput.value) 
        emojiInput.value = '' 
        renderEmoji()
    }
}