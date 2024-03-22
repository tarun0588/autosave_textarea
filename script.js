let text = document.getElementById("text");
text.addEventListener('input',(e)=>{
    let value = e.target.value;
    localStorage.setItem('text',value);
})
function  getText(){
    text.value = localStorage.getItem( 'text' );
}
getText();