
const enviar = document.querySelector('.add').addEventListener('click',()=>{
    let conteudo = document.querySelector('.conteudo').value;
    let tarefa = document.querySelector('.to-do');

    const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(conteudo);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', conteudo);
	newTask.setAttribute('id', conteudo);

	taskLabel.setAttribute('for', conteudo);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

    tarefa.appendChild(taskContainer);
});
