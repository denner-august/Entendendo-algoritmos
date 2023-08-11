console.clear()

console.time()
function buscaBi(lista,  item){
 let baixo = 0
 let alto = lista.length -1
  let c = 0


 while( baixo <= alto){
   let meio = Math.floor((baixo + alto) / 2)
  let chute = lista[meio]
  

  if(chute == item){
    console.log(c);
    console.log(meio);
    console.log(chute);
    return meio
  }

  if(chute > item){
    c++
   alto = meio -1
  }
    
  if(chute < item){
    c++
    baixo = meio + 1
  }
 }
}

function gera(){
  let arr = []
  for (let index = 0; index < 240000; index++) {
    arr.push(index)
  }

  return arr
}

buscaBi(gera(),239999)
console.timeEnd()