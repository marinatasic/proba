const toggleCollapse = document.querySelector('.toggleCollapse span');
const nav = document.querySelector('.nav';)


//onclick event on toggle Collapse span tag
toggleCollapse.onclick = () =>{
    nav.classList.toggle("collapse");
}