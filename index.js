const API_BASE = 'https://fakestoreapi.com/products';

const iphone = {
    title: 'Iphone 13',
    price: 100500,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(iphone)
}

fetch(API_BASE, options)
.then((response) => response.json())
.then((data) => console.log(data));