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
        description: "A lush arrangement of ivory hydrangea, blush roses, and soft peach spray roses, accented with airy fillers and eucalyptus. Designed for a warm, romantic feel with a full, layered silhouette.",
        price: "$105.99"
    },
    favorites3: {
        name: "White Rose Delight",
        image: "images/favorites3.jpg",
        description: "A clean, timeless bouquet of white roses and chrysanthemums with subtle greenery. Light, elegant, and perfect for sympathy, celebrations, or minimalist tastes.",
        price: "$55.99"
    },
    favorites4: {
        name: "Peach & Pink Roses",
        image: "images/favorites4.jpg",
        description: "A vibrant mix of peach and coral-toned roses, wrapped in soft neutrals for contrast. This bouquet leans bold yet refined—ideal for birthdays or statement gifting.",
        price: "$80.99"
    },
    spring1: {
        name: "Classic Pink Rose Wrap",
        image: "images/spring1.jpg",
        description: "A soft cluster of fresh pink roses paired with delicate filler florals. Simple, sweet, and balanced—an everyday romantic gesture..",
        price: "$55.99"
    },
    spring2: {
        name: "Pink Perfection Wrap",
        image: "images/spring2.jpg",
        description: "A pastel-forward bouquet featuring blush roses, seasonal blooms, and soft textures. Designed with a feminine, airy finish and layered pink wrapping.",
        price: "$55.99"
    },
    spring3: {
        name: "Spring Tulip Bunch",
        image: "images/spring3.jpg",
        description: "A fresh bundle of vibrant tulips with minimal greenery, letting the natural shape and color shine. Clean, modern, and unmistakably spring.",
        price: "$35.99"
    },
     spring4: {
        name: "Cream Roses & Greens",
        image: "images/spring4.jpg",
        description: "Cream-toned roses paired with eucalyptus and soft greenery for an organic, understated look. A neutral palette that works for any occasion.",
        price: "$35.99"
    },
 spring5: {
        name: "White Tulip Wrap",
        image: "images/spring5.jpg",
        description: "A crisp arrangement of white tulips wrapped in soft pink tones for contrast. Minimal, elegant, and quietly striking.",
        price: "$30.99"
    },
 spring6: {
        name: "Rustic Flower Wrap",
        image: "images/spring6.jpg",
        description: "A textured mix of seasonal blooms in earthy tones, featuring wildflower-inspired elements and natural wrapping. Relaxed, charming, and slightly whimsical.",
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
