const links = document.querySelectorAll('.container a');
// console.log(links);
const bg = document.querySelector('.bg');
// console.log(bg);
const showClass = 'bg-show';
//console.log(back);
for(const link of links){
  const img = new Image();
  img.scr = link.getAttribute('data-bg') //라고도 쓸수 있지만!!
  // img.src = link.dataset.bg; // 이것도 같은 것임

  link.addEventListener('mouseenter',()=>{
    bg.style.backgroundImage = `url(${link.dataset.bg})`; // this 난 왜 안돼
    document.body.classList.add(showClass);
  })

  link.addEventListener('mouseleave',()=>{
    document.body.classList.remove(showClass);
  })
  // console.log(img);
}


