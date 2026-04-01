const params = new URLSearchParams(window.location.search);
const item = params.get("item");

// If no item selected → show gallery, hide form + product
if (!item) {
    document.querySelector(".order-section").style.display = "none";
    document.querySelector(".choose-first").style.display = "block";
} else {
    document.querySelector(".order-section").style.display = "flex";
    document.querySelector(".choose-first").style.display = "none";
}

const bouquets = {
    favorites1: {
        name: "Sunset Rose Bouquet",
        image: "images/favorites1.jpg",
        description: "A warm blend of sunset-toned roses, hand-tied with love.",
        price: "$49.99"
    },
    favorites3: {
        name: "Pink Peony Mix",
        image: "images/favorites3.jpg",
        description: "Soft pink peonies mixed with seasonal blooms.",
        price: "$59.99"
    },
    favorites4: {
        name: "Spring Garden Trio",
        image: "images/favoirties4.jpg",
        description: "A cheerful mix of spring flowers for any occasion.",
        price: "$54.99"
    },
    spring1: {
        name: "Fresh Spring Bouquet",
        image: "images/spring1.jpg",
        description: "A bright and colorful spring arrangement.",
        price: "$44.99"
    },
    spring2: {
        name: "Spring Peony Mix",
        image: "images/spring2.jpg",
        description: "A soft pastel bouquet perfect for spring.",
        price: "$52.99"
    },
    spring3: {
        name: "Wildflower Spring Bundle",
        image: "images/spring3.jpg",
        description: "A rustic mix of seasonal wildflowers.",
        price: "$39.99"
    }
};

const product = bouquets[item];

if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.price;
}
