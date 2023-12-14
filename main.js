function save() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("Phone").value;
  const adres = document.getElementById("adres").value;
  const selekt = document.getElementById("selekt");
  const total_modal = document.getElementById("card")
  const Psize = document.querySelectorAll('input[name="size"]');
  const box = document.querySelectorAll(".box input[type='checkbox']");
  const plus = document.querySelectorAll(".plus input[type='checkbox']");

  let priceAll = 0;
  const price = [];
  if (selekt.value != "") {
    price[price.length] = selekt.value;
  }
  let size = selekt.value
  const onPizza = [];
  for (el of box) {
    if (el.checked) {
      onPizza[onPizza.length] = el.value;
    }
  }
  let sanoq = 0;
  for (let i = 0; i < onPizza.length; i++) {
    sanoq++;
  }
  sanoq = sanoq*5
  console.log(sanoq);
  console.log(onPizza);
  for (el of Psize) {
    if (el.checked) {
      price[price.length] = el.value;
    }
  }
  const add = [];
  for (el of plus) {
    if (el.checked) {
      add[add.length] = el.value;
    }
  }
  let str1= ''
  let sanoqAdd = 0;
  for (let i = 0; i < add.length; i++) {
    sanoqAdd++;
    str1 += add[i]
  }
  sanoqAdd=sanoqAdd*3
  let total = 0
  let str=''
  for(let i=0;i<onPizza.length;i++){
    str+=onPizza[i] + ' '
  }
  let = summa=0
  let str3 = ''
  for(let i = 0; i < price.length;i++){
    if(price[i]==25){
      summa = price[i]
      sanoq+=10
    }
    if(price[i]==30){
      summa = price[i]
      sanoq+=12
    }
    if(price[i]==35){
      summa = price[i]
      sanoq+=15
    }
    if(price[i]=='Thin'){
      sanoq+=10
    }
    if(price[i]=='Thinck'){
      sanoq+=15
    }
    if(price[i]=='Medium'){
      sanoq+=12
    }
  }
  console.log(add);
  console.log(price);
  total= total+sanoq+sanoqAdd
  console.log(total);
  console.log(str);


  total_modal.innerHTML = `<h2 class="col-12 order1">Order:1</h2>
    <h5 class="col-6">Name:</h5>
    <span class="col-6">${name}</span>
    <h5 class="col-6">Phone:</h5>
    <span class="col-6">${phone}</span>
    <h5 class="col-6">Adress:</h5>
    <span class="col-6">${adres}</span>
    <hr>
    <h5 class="col-6">Dough thickness:</h5>
    <span class="col-6">${size}</span>
    <h5 class="col-6">SIze:</h5>
    <span class="col-6">${summa+"sm"}</span>
    <h5 class="col-6">On Pizza:</h5>
    <span class="col-6">${str}</span>
    <h5 class="col-6">Add:</h5>
    <span class="col-6">${str1}</span>
    <hr>
    <h5 class="col-6">Total:$${total}</h5>
    <span class="col-6"></span>`;
}
