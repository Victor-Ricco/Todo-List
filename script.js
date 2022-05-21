const newItem = document.getElementById("todoNewItem");
const todoList = document.getElementById("todoList");
const buttons = document.getElementById("features");

//Cria um novo elemento e o envia para a lista
function createTodoElement(item) {
    const todoLabel = document.createElement("label");
    todoLabel.classList.add("todoItem");
    todoLabel.innerHTML = `
        <input type="checkbox">
        <p>${item}</p>
        <input type="button" value="X">
    `;
    document.getElementById("todoList").appendChild(todoLabel);
}

//Escuta o 'Enter' e começa o processo para a adição do texto na lista
newItem.addEventListener('keypress', renderItem = (event) => {
    if (event.key == 'Enter') {
        createTodoElement(event.target.value);
        event.target.value = "";
    }
})

//Escuta o 'click' para remover o item clickado
todoList.addEventListener('click', removeItem = (event) => {
    if (event.target.value == 'X') {
        event.target.parentNode.outerHTML = ""
    }
})

//Escuta o 'click' e remove, ou os intens selecionados, ou remove todos
buttons.addEventListener('click', removeSomeItens = (event) => {
    //Exclui itens selecionados
    if (event.target.value == 'Excluir Selecionados') {
        let selectedItens = [...document.querySelectorAll('input')];
        selectedItens.forEach(function(element) {
            if (element.type == 'checkbox' & element.checked) {
                element.parentNode.outerHTML = "";
            }
        });
    }
    //Excluie todos os itens
    else if (event.target.value == 'Excluir Tudo') {
        let selectedItens = [...document.querySelectorAll('input')];
        selectedItens.forEach(function(element) {
            if (element.type == 'checkbox') {
                element.parentNode.outerHTML = ""
            }
        });
    }
});
