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
        name: "Elegant Warm Bundle",
        image: "images/favorites1.jpg",
        description: "A soft blend of blush roses, large white carnations, and delicate fillers, wrapped in pastel tones for a romantic finish.",
        price: "$69.99"
    },
    favorites3: {
        name: "White Rose Delight",
        image: "images/favorites3.jpg",
        description: "A dreamy mix of chrysanthemums, white roses, and other seasonal white flowers, perfect for celebrations and gentle moments.",
        price: "$32.99"
    },
    favorites4: {
        name: "Peach & Pink Roses",
        image: "images/favorites4.jpg",
        description: "A cheerful mix of spring flowers for any occasion.",
        price: "$54.99"
    },
    spring1: {
        name: "Classic Pink Rose Wrap",
        image: "images/spring1.jpg",
        description: "A bright and colorful spring arrangement, with pink roses and a even lighter color roses, created for memorable moements.",
        price: "$45.99"
    },
    spring2: {
        name: "Pink Perfection Wrap",
        image: "images/spring2.jpg",
        description: "A soft pastel bouquet perfect for spring.",
        price: "$42.99"
    },
    spring3: {
        name: "Spring Tulip Bunch",
        image: "images/spring3.jpg",
        description: "A rustic mix of seasonal wildflowers.",
        price: "$30.99"
    },
     spring4: {
        name: "Cream Roses & Greens",
        image: "images/spring4.jpg",
        description: "A rustic mix of seasonal wildflowers.",
        price: "$35.99"
    },
 spring5: {
        name: "White Tulip Wrap",
        image: "images/spring5.jpg",
        description: "A rustic mix of seasonal wildflowers.",
        price: "$39.99"
    },
 spring6: {
        name: "Rustic Flower Wrap",
        image: "images/spring6.jpg",
        description: "A rustic mix of seasonal wildflowers.",
        price: "$35.99"
    },
};

const product = bouquets[item];

if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-price").textContent = product.price;
}
const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    });
});
