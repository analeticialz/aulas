function addtarefa (tarefas){
    let tarefa = prompt("digite a tarefa")
    tarefas.push(tarefa)
    return tarefas
}

function removertarefa(tarefas){
    let tarefa = prompt("suas tarefas são:"+tarefas + "/n qual você quer remover")
    let index = tarefas.indexof(tarefa)
    tarefas.splice(index, 1)
    return tarefas 
}