let modalQt =1;


const c=(el)=>document.querySelector(el);
const cs=(el)=>document.querySelectorAll(el);

//listagem dos doces

doceJson.map((item ,index)=>{

let doceItem = c ('.models .doce-item').cloneNode(true);

doceItem.setAttribute('data-key',index);
doceItem.querySelector('.doce-item--img img').src=item.img;
doceItem.querySelector('.doce-item--name').innerHTML=item.name;
doceItem.querySelector('.doce-item--desc').innerHTML=item.description;
doceItem.querySelector('.doce-item--price').innerHTML=`R$  ${item.price.toFixed(2)}`;


doceItem.querySelector('a').addEventListener('click',(e)=>{e.preventDefault();

     let key = e.target.closest('.doce-item').getAttribute('data-key');
modalQt=1;

   c('.doceInfo h1').innerHTML=doceJson[key].name;
   c('.doceInfo--desc').innerHTML=doceJson[key].description;
   c('.doceBig img').src=doceJson[key].img;
   c('.doceInfo--actualPrice').innerHTML=`R$  ${doceJson[key].price.toFixed(2)}`;
   c('.doceInfo--size.selected').classList.remove('selected');
cs('.doceInfo--size').forEach((size , sizeIndex)=>{
    

    if(sizeIndex ==2){

        size.classList.add('selected');
    }


size.querySelector('span').innerHTML = doceJson[key].sizes[sizeIndex];

});
 c('.doceInfo--qt').innerHTML = modalQt ;

    c('.doceWindowArea').style.opacity= 0;
c('.doceWindowArea').style.display = 'flex';

setTimeout(()=>{

    c('.doceWindowArea').style.opacity=   1;
},200);
});

c('.doce-area').append(doceItem);
}); 

//eventos do modal
function closeModal(){

    c('.doceWindowArea').style.opacity= 0;

    setTimeout(()=>{
        c('.doceWindowArea').style.display = 'none';

    },500);
}
cs('.doceInfo--cancelButton, .doceInfo--cancelMobileButton').forEach((item)=>{
item.addEventListener('click', closeModal);

});

c('.doceInfo--qtmenos').addEventListener('click' ,()=>{
if(modalQt > 1) {

modalQt--;
c('.doceInfo--qt').innerHTML = modalQt; }
});

c('.doceInfo--qtmais').addEventListener('click' ,()=>{
modalQt++;

c('.doceInfo--qt').innerHTML = modalQt ;
});


cs('.doceInfo--size').forEach((size , sizeIndex)=>{
    size.addEventListener('click',(e)=>{
 c('.doceInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');

    });

});