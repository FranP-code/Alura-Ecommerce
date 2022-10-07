/**
 *  <div class="items-gallery-container template">
            <div class="title">
                <h4>Title</h4>
                <a href="#">
                    <h5>
                        <span>Ver todo</span>
                        <img src="./img/arrow.svg" alt="arrow">
                    </h5>
                </a>
            </div>
            <div class="items-gallery">
                <div class="item">
                    <img src="https://i.picsum.photos/id/157/200/300.jpg?hmac=-OZWQAIRoAdYWp7-qnHO1wl5t0TO3BMoAgW3tmR7wgE" alt="#">
                    <span class="name">Skate</span>
                    <span class="price">$ 100.000,00</span>
                    <a href="#">
                        <span>Ver producto</span>
                    </a>
                </div>
            </div>
        </div>
 */

const productsQuantity = 6
const productsGalleryQuantity = 3

function appendProductGallery(productGallery) {
    (document.querySelector('.products')).appendChild(productGallery)
}

class ProductGallery {
    constructor(title, products) {
        this.title = title
        this.products = products
    }
    createHTMLElement() {
        const container = document.createElement('div')
            container.classList.add('items-gallery-container')
        const title = document.createElement('div')
            title.classList.add('title')
        const heading = document.createElement('h4')
            heading.innerText = this.title
        const link = document.createElement('a')
            link.href = "https://google.com"
        const seeAll = document.createElement('h5')
        const seeAllText = document.createElement('span')
            seeAllText.innerText = 'Ver todo'
        const seeAllImg = document.createElement('img')
            seeAllImg.src = './img/arrow.svg'
            seeAllImg.alt = 'arrow'
        const gallery = document.createElement('div')
            gallery.classList.add('items-gallery')

        if (this.products) {
            for (const product of this.products) {
                gallery.appendChild(product)
            }
        }
        
        for (const element of [seeAllText, seeAllImg]) {
           seeAll.appendChild(element)
        }

        link.appendChild(seeAll)
        
        for (const element of [heading, link]) {
            title.appendChild(element)
        }

        for (const element of [title, gallery]) {
            container.appendChild(element)
        }
        return container
    }
}

class Product {
    constructor({name, imageURL, price}) {
        this.name = name
        this.imageURL = imageURL
        this.price = price
    }
    createHTMLElement() {
        const item = document.createElement('div')
            item.classList.add('item')
        const image = document.createElement('img')
            image.src = this.imageURL
            image.alt = 'product image'
        const name = document.createElement('span')
            name.classList.add('name')
            name.innerText = this.name
        const price = document.createElement('span')
            price.classList.add('price')
            price.innerText = `$ ${this.price},00`
        const seeProduct = document.createElement('a')
            seeProduct.href = "#"
        const seeProductText = document.createElement('span')
            seeProductText.innerText = 'Ver producto'
        
        seeProduct.appendChild(seeProductText)

        for (const element of [image, name, price, seeProduct]) {
            item.appendChild(element)
        }

        return item
    }
}

for (let i = 0; i < productsGalleryQuantity; i++) {
    let products = []
    
    for (let e = 0; e < productsQuantity; e++) {
        products.push({
            name: `Producto ${e + 1}`,
            imageURL: `https://picsum.photos/500?random=${e - i}`,
            price: Math.trunc(Math.random() * 100)
        })
    }
    
    products = products.map(product => new Product(product).createHTMLElement())
    
    appendProductGallery(
        new ProductGallery(`Galería ${i + 1}`, products).createHTMLElement()
    )
}