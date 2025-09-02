fakeRequest = function(url) {
    return new Promise((resolve, reject) => 
        {
            const rand = Math.random();
            setTimeout(() => {
                if (rand < 0.7) {
                    resolve('YOUR FAKE DATA HERE');
                }
                reject('Request Error!');
            }, 1000);

        }
    ) 
}

// PROMISE
const delayedColorChange = (color, delay) => {
    console.log(color, delay);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))


// ASYNC
async function rainbow() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('violet', 1000);
}

async function test1() {
    return 'test1';
}

async function test2() {
    const t1 = await test1();
    console.log(t1);
    return 'test2'; 
}


async function makeTwoRequests() {
    let data1 = await fakeRequest('/page1');
    console.log(data1);
}

// const req = new XMLHttpRequest();

// req.onload = function() {
//     console.log('IT LOADED!!');
//     const data = JSON.parse(this.responseText);
//     console.log(data);
// }

// req.onerror = function () {
//     console.log('ERROR');
//     console.log(this);
// }

// req.open('GET', 'https://swapi.tech/api/people/1');
// req.send();

// fetch('https://swapi.tech/api/people/1')
// .then(res => {
//     console.log("IT LOADED", res);
//     return res.json(); // res.json(） is a promise as well
// }).then(data => console.log(data))
// .catch(e => {
//     console.log("ERROR", e);
// })


// const loadStartWarsPeople = async () => {
//     const res = await fetch('https://swapi.tech/api/people/1');
//     const data = await res.json();
//     console.log(data);

// };

// loadStartWarsPeople()
// axios.get("https://swapi.tech/api/people/1")
//     .then(res => console.log(res))

const button = document.querySelector('#btn');

const joke = async() => {
    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        };
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        console.log(res);
    } catch(e) {
        return 'NO JOKES AVAILABLE! ' + e;
    }   
    
    return res.data.joke;
}


const addNewJoke = async () => {
    const jokes = await joke();
    const newLI = document.createElement('LI');
    newLI.innerHTML = jokes;
    document.querySelector('ul').append(newLI);
}

button.addEventListener('click', () => {
    addNewJoke();
});