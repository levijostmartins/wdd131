document.addEventListener("DOMContentLoaded", () => {
  const photos = [
      'images/wed1.jpg',
      'images/wed2.png',
      'images/bw.jpg',
      'images/wed4.png',
      'images/wed3.jpg',
      'images/piano1.jpg',
      'images/enquadrado.jpg',
      'images/plant2.jpg',
  ];

  const galleryContainer = document.querySelector('.gallery-container');

  photos.forEach(photo => {
      const imgElement = document.createElement('img');
      imgElement.src = photo;
      imgElement.loading = 'lazy';
      imgElement.classList.add('gallery-photo');
      imgElement.addEventListener('click', openModal);
      galleryContainer.appendChild(imgElement);
  });

  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.querySelector('.close');

  function openModal(event) {
      modal.style.display = 'block';
      modalImg.src = event.target.src;
  }

  closeBtn.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
});
