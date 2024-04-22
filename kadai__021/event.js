const btn=document.getElementById('btn');

const parentlist=document.getElementById('text');

btn.addEventListener('click', () => {
  
  setTimeout(()=>{
    parentlist.textContent='ボタンをクリックしました'
  
  },2000);
  



});


 
