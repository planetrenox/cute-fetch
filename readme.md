# cute-fetch

fetch wrapper but it's modular.

## Why


easier to comprehend.


## Getting Started


### Installation


1. Install cute-fetch locally.

```
npm install cute-fetch
```

### Usage


```javascript
import fch from 'cute-fetch';

// body can be string or any js object

const response = await fch('https://api.example.com/users').POST("any");


const response = await fch('https://api.example.com/users/1').PUT({
    name: 'John Doe',
    email: 'john@example.com',
}); // or string


// await fch('https://api.example.com/data').SOFTWRITE('string')
const response = await fch('https://api.example.com/data').SOFTWRITE({
    key: 'value',
});

// await fch('https://api.example.com/data').OVERWRITE('string')
const response = await fch('https://api.example.com/data').OVERWRITE({
    key: 'newValue',
});


const response = await fch('https://api.example.com/users/1').DELETE();


const response = await fch('https://api.example.com/users').GET();
const data = await response.json();
console.log(data);
```
