const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

const createTodo = () => {
    // EX 1
//     if (input.value.trim() === '') {
//         input.value = ''
//         return false
// } else {
//         const div = document.createElement('div')
//         const text = document.createElement('h3')
//         const deleteButton = document.createElement('button')
//         const editButton = document.createElement('button')
//         const reversButton = document.createElement('button')
//         div.setAttribute('class', 'block_text')
//         reversButton.setAttribute('class', 'reverse_button')
//             reversButton.innerHTML = ('REVERSE')
//             const reverse = () => {
//                 const izm = text.innerHTML.split("").reverse().join("")
//                 return izm
//             }
//             reversButton.onclick = () => {
//                 const onclickRevers = reverse()
//                 text.innerHTML = onclickRevers
                
//             }
//         deleteButton.setAttribute('class', 'delete_button')
//             deleteButton.innerHTML = ('DELETE')
//             deleteButton.onclick = () => div.remove()
//         editButton.setAttribute('class', 'edit_button')
//             editButton.innerHTML = ('EDIT')
//             const edit = () => {
//                 const izm = prompt(`Вы вводите изменение в: ${text.innerHTML}`)
//                 return izm
//             }
//             editButton.onclick = () => {
//                 const newText = edit()
//                 if (newText.trim()) {
//                     text.innerHTML = newText
//                 }
//             }
        

//         text.innerHTML = input.value
//         div.append(text, deleteButton, editButton, reversButton)
//         todoList.append(div)


    //EX 2
// const div = document.createElement('div')
// const text = document.createElement('h3')
// div.setAttribute('class', 'block_text')

// const reversText = []
// input.value.split('').forEach((char, index, array) => {
//     reversText.push(array[array.length - 1 -index])
// })

// text.innerHTML = reversText.join('')
// div.append(text)
// todoList.append(div)

    }
    input.value = ''
}
createButton.onclick = () => createTodo()
input.onkeydown = () => {
    if (event.keyCode === 13) createTodo()
}