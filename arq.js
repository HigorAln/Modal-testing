modal = true;
document.getElementById('menu').addEventListener('click',function(){
    if(modal){
        document.getElementById('meuModal').style.visibility='visible'
        document.getElementById('menu').innerHTML = "menu_open"
        modal=false
    }else{
        document.getElementById('meuModal').style.visibility='hidden'
        document.getElementById('menu').innerHTML = "menu"
        modal=true;
    }
})


const selecionado = document.querySelector("#selecionado");

selecionado.addEventListener("change", (el) => {
  if (selecionado.checked) {
    /* document.body.style.backgroundColor="#000" */
  }else{
    /* document.body.style.backgroundColor="#fff" */
  }
});

selecionado.dispatchEvent(new Event("change"));