### Function 
``` js
function findVowels(msg) {
    for (let i = 0;i<msg.length;i++) {
        if(msg[i] == 'a' || msg[i] == 'e' || msg[i] == 'i' || msg[i] == 'o' || msg[i] == 'u') {
         console.log(msg[i])
       }
    }
} 
```
### Take input string and print vowels in that string 
``` js
const vowelsInString = (msg) => {
    for (let i = 0;i<msg.length;i++) {
    if(msg[i] == 'a' || msg[i] == 'e' || msg[i] == 'i' || msg[i] == 'o' || msg[i] == 'u') {
        console.log(msg[i])
    }
    }
} 

```

### For Each Loop 
``` js
let arr = [19,203,5,30,56];
console.log(arr)
let sum = 0
arr.forEach((val)=>{
    sum += val;
})
console.log(sum);
```


### map() function
``` js
let newArr = arr.map((val)=>{
    return val;
})
console.log('new array', newArr); -->
```

### filter() function
``` js
let evenArr = arr.filter((val) => {
    return val%2===0;
})
console.log('event array :',evenArr)
```

### practice question 1
#### Create h2 element with text Hello Javascript and append new string "From Apna College" through Javascript code
``` js
let h2 = document.querySelector("h2");
console.log(h2); 
h2.innerText = h2.innerText + " - From Apna College";
```

### practice question 2
#### Create 3 div with class 'box'. access that div and set unique text values through javascript.
``` js
let divs = document.querySelectorAll('.box');
let index = 1;
for (let div of divs) {
    div.innerText = `unique value ${index}`;
    index++;
}
```

### Practice Question 3
#### Create a new button element. give it a text 'click me', background color of red and text color of white. Insert the button as the first element in the body tag.

``` js
let body = document.querySelector('body');
console.log(body);

let button = document.createElement('button');
button.innerText = 'Click me';
button.style.backgroundColor = 'red';
button.style.color = 'white';
button.style.border = 'none';
button.style.padding = '1rem'
button.style.borderRadius = '10px'
body.prepend(button);
```


### Practice Question 4
#### Create a p tag in html, give it a class & some styling.
#### Now create a new class in css and try to append this class to the <p> element. 
#### Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.

#### html
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToDo List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p class="content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, dolor esse similique veniam sapiente voluptatem earum ipsum dolorum natus at consectetur doloribus ipsam nemo nulla minus enim. Voluptates, ducimus a.</p>
    <script src="script.js"></script>
</body>
</html>
```


#### css
``` css
.content { 
    color: red;
}

.newContent 
{
    background-color: aqua;
}
```

#### javascript
``` js

let p = document.querySelector('p');
console.log(p);

p.classList.add('newContent');

```


### Practice Question 5
#### Create button 'toggle'. Change dark mode when click on button and light mode again when click again.
``` js
let toggleBtn = document.querySelector('button');
let dark = false;
toggleBtn.addEventListener('click',()=>{
    if (dark == false) {
        document.querySelector('body').style.backgroundColor = 'grey';
        dark = true;
        console.log(dark)
    }
    else {
        document.querySelector('body').style.backgroundColor = 'white';
        dark = false;
        console.log(dark)
    }

})
```
