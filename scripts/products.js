const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgrating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewCount = localStorage.getItem('reviewCount') || 0;
    const reviewCountDisplay = document.createElement('p');
    reviewCountDisplay.textContent = `You have completed ${reviewCount} review(s).`;
    document.querySelector('.container').insertBefore(reviewCountDisplay, document.querySelector('footer'));
});

document.getElementById('reviewForm').addEventListener('submit', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
});
