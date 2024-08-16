let display = document.getElementById('display');
let buttons = document.querySelectorAll("button");
let array = Array.from(buttons);
let string = '';
array.forEach(button=>{
  button.addEventListener("click",(e)=>{
    if (e.target.innerHTML == 'AC'){
      string = '';
      display.value = string;
    }else if(e.target.innerHTML == 'DEL'){
      string = string.substring(0, string.length-1);
      display.value = string;
    }else if (e.target.innerHTML == '='){
      string = eval(string);
      display.value = string;
    }else if (e.target.innerHTML == '÷'){
      string += '/';
      display.value = string;
    }else if(e.target.innerHTML == '×'){
      string += '*';
      display.value = string;
    }else{
      string += e.target.innerHTML;
      display.value = string;
    }
  })
})
function changeTheme(){
  const className = 'light';
  if(document.body.classList.contains(className)){
    document.body.classList.remove(className);
    localStorage.removeItem('class');
  }else {
    document.body.classList.add(className);
    localStorage.setItem('class', className);
  }
}
function applyChanges(){
  const classValue = localStorage.getItem('class');
  if(classValue){
    document.body.classList.add(classValue)
  }
}
applyChanges();