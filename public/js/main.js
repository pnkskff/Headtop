const deleteText = document.querySelectorAll('.fa-trash')
const thumbText = document.querySelectorAll('.fa-thumbs-up')
const thumbTextDown = document.querySelectorAll('.fa-thumbs-down')

Array.from(deleteText).forEach((element)=>{
    element.addEventListener('click', deleteItem)
})

Array.from(thumbText).forEach((element)=>{
    element.addEventListener('click', addLike)
})

Array.from(thumbTextDown).forEach((element)=>{
    element.addEventListener('click', minusLike)
})

async function deleteItem(){
    const category = this.parentNode.childNodes[1].innerText
    const item = this.parentNode.childNodes[3].innerText
    const answer = this.parentNode.childNodes[5].innerText
    const likes = Number(this.parentNode.childNodes[7].innerText)
    const dislikes = Number(this.parentNode.childNodes[9].innerText)
    try{
        const response = await fetch('deleteItem', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'category': category,
              'item': item,
              'answer': answer
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function addLike(){
    const category = this.parentNode.childNodes[1].innerText
    const item = this.parentNode.childNodes[3].innerText
    const answer = this.parentNode.childNodes[5].innerText
    const likes = Number(this.parentNode.childNodes[7].innerText)
    const dislikes = Number(this.parentNode.childNodes[9].innerText)
    try{
        const response = await fetch('addOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'category': category,
              'item': item,
              'answer': answer,
              'likes': likes,
              'dislikes': dislikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}

async function minusLike(){
    const category = this.parentNode.childNodes[1].innerText
    const item = this.parentNode.childNodes[3].innerText
    const answer = this.parentNode.childNodes[5].innerText
    const likes = Number(this.parentNode.childNodes[7].innerText)
    const dislikes = Number(this.parentNode.childNodes[9].innerText)
    try{
        const response = await fetch('minusOneLike', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              'category': category,
              'item': item,
              'answer': answer,
              'likes': likes,
              'dislikes': dislikes
            })
          })
        const data = await response.json()
        console.log(data)
        location.reload()

    }catch(err){
        console.log(err)
    }
}
