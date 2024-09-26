# Projects related to dom

#projects link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-mxhac7?file=index.html)

#Solution Code

##Project 1

```Javascript
console.log("Mayank")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

##Project 2

``` const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
``` 





##project 3 solution


``` document.getElementById('clock');

setInterval(function () {}, 1000);

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString);
  clock.innerHTML = date.toLocaleTimeString();
  

});
```



##project 6 solution

```  // Generate a random color

const randomColor =function(){
  const hex ="0123456789ABCDEF";
  let color ='#';
  for (let i = 0; i<6; i++){
    color += hex[Math.floor(Math.random()*16)];
  }
  return color;
}
let intervalid;
const startchangingcolor = function(){
 if(!intervalid){
  intervalid = setInterval(changebgcolor,1000)
 }

  function changebgcolor(){
    document.body.style.backgroundColor =randomColor();
  }
}
const stopchangingcolor = function(){
  clearInterval(intervalid);
  intervalid = null
}
document.querySelector("#start").addEventListener('click',startchangingcolor())
document.querySelector("#stop").addEventListener('click',stopchangingcolor())

// console.log(randomColor())

// console.log(Math.random()*16);
// console.log(Math.floor(Math.random()*16));  ```


##project 5 solution


``` 
const insert  = document.getElementById('insert')

window.addEventListener('keydown',(e)=>{
  insert.innerHTML= `
  <div class ='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === '  ' ? 'Space':e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  
</table>
  </div>
  `
})  ```


##project 7 solution



``` ```