let main = document.getElementById("main")
let div_conteudo = document.getElementById("conteudo")
let div_tarefas = document.getElementById("tarefas")
let tarefaDigitada = document.getElementById("tarefaDigitada")
let prioridade = document.getElementById("prioridade")
let btn_adicionar = document.getElementById("btn")
let lista = document.getElementById("lista")

btn_adicionar.addEventListener("click", function(){
    if(tarefaDigitada.value == ""){
        window.alert("Preencha os campos corretamente")

    }
    else if(prioridade.value == "Prioridade da tarefa"){
        window.alert("Preencha os campos corretamente")
    }
    else{
    let item = document.createElement("li")
    item.classList.add("item_Lista")
    let texto = tarefaDigitada.value
    item.innerHTML  = texto
    let excluir = document.createElement("button")
    excluir.classList.add("btnExcluir")
    let img = document.createElement("img")
    img.src = "lixeira.png"
    excluir.appendChild(img)
    item.appendChild(excluir)
    lista.appendChild(item)
    div_tarefas.appendChild(lista)
    tarefaDigitada.value = ""
    excluir.addEventListener("click", function(){
        lista.removeChild(item)
    })
    }
    
})