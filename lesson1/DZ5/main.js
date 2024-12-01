const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

const createTodo = () => {
    if (input.value.trim() === '') {
        input.value = ''
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')
        div.setAttribute('class', 'block_text')

        deleteButton.setAttribute('class', 'delete_button')
            deleteButton.innerHTML = ('DELETE')
            deleteButton.onclick = () => div.remove()
        editButton.setAttribute('class', 'edit_button')
            editButton.innerHTML = ('EDIT')
            const edit = () => {
                const izm = prompt(`Вы вводите изменение в: (${text.innerHTML})`)
                return izm
            }
            editButton.onclick = () => {
                const newText = edit()
                if (newText.trim()) {
                    text.innerHTML = newText
                }
            }
        text.innerHTML = input.value
        div.append(text, deleteButton, editButton)
        todoList.append(div)
        } 
        input.value = ''
    }

createButton.onclick = () => createTodo()
input.onkeydown = () => {
    if (event.keyCode === 13) createTodo()
}