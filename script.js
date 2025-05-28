

const cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    images: ["images/Tesla1.jpg", "images/Mercedes.jpg","images/Toyota2018.avif"]
  },
  {
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    images: ["images/Toyota.jpg","images/Mercedes.jpg", "images/Tesla1.jpg","images/Toyota2018.avif"]
  }
];

const tableBody = document.querySelector('#carTable tbody');
const carDetails = document.getElementById('carDetails');
const carTitle = document.getElementById('carTitle');
const carImage = document.getElementById('carImage');

let currentImages = [];
let currentIndex = 0;

// Populate car table
cars.forEach((car, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${car.make}</td>
    <td>${car.model}</td>
    <td>${car.year}</td>
  `;
  row.addEventListener('click', () => showDetails(index));
  tableBody.appendChild(row);
});

// Show car image viewer

function showDetails(index) {
  const car = cars[index];
  currentImages = car.images;
  if(currentIndex ==0) 
  currentIndex = currentIndex+1 ;
  carTitle.textContent = `${car.make} ${car.model} (${car.year})`;
  updateImage(); // <- Use this instead of setting carImage.src directly
  carDetails.classList.remove('hidden');
}
// Navigate images


// Hide details
function closeDetails() {
  carDetails.classList.add('hidden');
}

function updateImage() {
  // Log the current image source
  console.log('Current Image Source:', currentImages[currentIndex]);
  
  // Fade out the image before changing
  carImage.style.opacity = 0;
  
  // Set a timeout for smooth transition
  setTimeout(() => {
    carImage.src = currentImages[currentIndex];

    // If image loading fails, use a fallback image
    carImage.onerror = () => {
      console.error('Image failed to load:', currentImages[currentIndex]);
      carImage.src = 'path/to/placeholder.jpg'; // Fallback image
    };

    // When the new image is loaded, fade it in
    carImage.onload = () => {
      console.log('Image loaded successfully:', currentImages[currentIndex]);
      carImage.style.opacity = 1;
    };
  }, 200);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  updateImage();
}