const image1=document.getElementById('img-1');
const image2=document.getElementById('img2');
const body=document.getElementById('body');
const container1=document.getElementById('container-1');

image1.addEventListener('click',function(){
    body.style.backgroundColor='hsl(0, 0%, 93%)'
    container1.style.backgroundColor='white';
    container1.style.borderColor='white'
    const brand=document.getElementById('brand');
    brand.style.color='black'
    const link1=document.querySelectorAll('#link');
        link1.forEach(function(bcg){
            bcg.style.backgroundColor='white'
        })
    const text=document.querySelectorAll('#link-tex');
        text.forEach(function(element){
            element.style.color='black'
        })
        const background_Color=document.querySelectorAll('.back-color');
        background_Color.forEach(function(back){
            back.style.backgroundColor='white';
            back.style.borderColor='white'
        })
        const head=document.querySelectorAll('.text-1');
        head.forEach(function(text){
            text.style.color='black'
        })
        const allp=document.querySelectorAll('.font');
        allp.forEach(function(para){
            para.style.color='hsl(226, 11%, 37%)'
        })
        const buttons=document.querySelectorAll('.button');
        buttons.forEach(function(button){
            button.style.borderColor='hsl(0, 0%, 78%)';
            button.style.color='hsl(226, 11%, 37%)'
        })
        const switching=document.querySelectorAll('.bord-1');
        switching.forEach(function(change){
            change.style.backgroundColor='hsl(0, 0%, 78%)';
            change.style.borderColor='hsl(0, 0%, 78%)'
        })
        // image2.style.display='block';
        // image1.style.display='none'
        // image2=image1.nextSibling
        this.style.display='none';
        this.nextElementSibling.style.display='inline-block'
})
image2.addEventListener('click',function(){
     body.style.backgroundColor='hsl(227, 75%, 14%)'
      container1.style.backgroundColor='';
    container1.style.borderColor=''
    const brand=document.getElementById('brand');
    brand.style.color=''
    const link1=document.querySelectorAll('#link');
        link1.forEach(function(bcg){
            bcg.style.backgroundColor=''
        })
    const text=document.querySelectorAll('#link-tex');
        text.forEach(function(element){
            element.style.color=''
        })
        const background_Color=document.querySelectorAll('.back-color');
        background_Color.forEach(function(back){
            back.style.backgroundColor='';
            back.style.borderColor=''
        })
        const head=document.querySelectorAll('.text-1');
        head.forEach(function(text){
            text.style.color=''
        })
        const allp=document.querySelectorAll('.font');
        allp.forEach(function(para){
            para.style.color=''
        })
        const buttons=document.querySelectorAll('.button');
        buttons.forEach(function(button){
            button.style.borderColor='';
            button.style.color=''
        })
        const switching=document.querySelectorAll('.bord-1');
        switching.forEach(function(change){
            change.style.backgroundColor='';
            change.style.borderColor=''
        })
       this.style.display='none';
        this.previousElementSibling.style.display='inline-block'
})


 const items=document.querySelectorAll('.back-color');
 let currentFilter="all";
 items.forEach(item =>{
    const toggle =item.querySelector('.bord-1');
    const moving=toggle.querySelector('.bord')
    moving.addEventListener('click',()=>{
        const current =item.getAttribute('data-state');
        if(current==='active'){
            item.setAttribute('data-state','inactive')
            moving.style.left='1px'
            toggle.style.backgroundColor='hsl(226, 11%, 37%)'
            toggle.style.borderColor='hsl(226, 11%, 37%)'
        }
        else{
            item.setAttribute('data-state','active')
            moving.style.left='27px';
            toggle.style.backgroundColor='hsl(3, 77%, 44%)';
            toggle.style.borderColor='hsl(3, 77%, 44%)'
        }
        applyFilter(currentFilter)
    });
 });
 const links=document.querySelectorAll('.text');
    links.forEach(function(link){
        link.addEventListener('click',function(event){
            event.preventDefault();
            currentFilter=link.getAttribute('data-filter');
            applyFilter(currentFilter)
        })
    })
 function applyFilter(filter){
    const items=document.querySelectorAll('.back-color');
    items.forEach(item =>{
        const state=item.getAttribute('data-state');
        const col=item.closest('[class*="col-"]')
        if (filter ==='all' || filter===state){
            col.style.display='block'
        }
        else {
            col.style.display='none'
        }
    })
 }