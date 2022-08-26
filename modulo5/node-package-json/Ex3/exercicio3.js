//3)

const tarefa = process.argv[2];
const listaTarefas = ["lavar roupa", "lavar louça" , "limpar casa"] 
const novaLista = [...listaTarefas, process.argv[2]];
console.table(novaLista)