function spin() {
    const wheel = document.querySelector('.wheel');

    const totalCategories = 8;
    const angle = 360 / totalCategories;

    const randomIndex = Math.floor(Math.random() * totalCategories);
    const rotation = 360 * 8 + angle * randomIndex; // Multiple full rotations

    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${rotation}deg)`;
}
