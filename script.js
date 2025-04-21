

// Certificate image interaction
document.addEventListener('DOMContentLoaded', () => {
  // Create modal for certificate viewing
  const modal = document.createElement('div');
  modal.className = 'cert-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <img class="modal-img" src="" alt="Certificate">
      <button class="close-modal"><i class="fas fa-times"></i></button>
    </div>
  `;
  document.body.appendChild(modal);

  // Get all certificate images
  const certImages = document.querySelectorAll('.cert-image img');
  const modalImg = modal.querySelector('.modal-img');
  const closeBtn = modal.querySelector('.close-modal');

  // Add click event to certificate images
  certImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
    });
  });

  // Close modal
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside the image
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Optional: Add keyboard support (Esc to close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Optional: Certificate carousel navigation
  const certContainer = document.querySelector('.cert-carousel');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  if (prevBtn && nextBtn) {
    // For smaller screens, implement horizontal scrolling
    const scrollAmount = 320; // Width of certificate card + gap
    
    prevBtn.addEventListener('click', () => {
      certContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
    
    nextBtn.addEventListener('click', () => {
      certContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
    
    // Show/hide navigation buttons based on scroll position
    function updateNavVisibility() {
      // Show prev button only if scrolled
      prevBtn.style.opacity = certContainer.scrollLeft > 0 ? '1' : '0.5';
      
      // Show next button only if can scroll more
      nextBtn.style.opacity = 
        certContainer.scrollLeft < certContainer.scrollWidth - certContainer.clientWidth - 10 
          ? '1' : '0.5';
    }
    
    certContainer.addEventListener('scroll', updateNavVisibility);
    window.addEventListener('resize', updateNavVisibility);
    
    // Initial check
    setTimeout(updateNavVisibility, 100);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'image-modal';
  
  const modalImg = document.createElement('img');
  modalImg.className = 'modal-content';
  
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close-modal';
  closeBtn.innerHTML = '&times;';
  
  modal.appendChild(closeBtn);
  modal.appendChild(modalImg);
  document.body.appendChild(modal);
  
  // Get all achievement images
  const achievementImages = document.querySelectorAll('.achievement-image img');
  
  // Add click event to each image
  achievementImages.forEach(img => {
    img.addEventListener('click', function() {
      modal.style.display = 'flex';
      modalImg.src = this.src;
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
  });
  
  // Close modal when clicking the X button
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  });
});