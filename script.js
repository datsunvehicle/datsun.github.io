const cars = [
  {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    images: ["images/Toyota2018.avif","images/Mercedes.jpg", "images/Tesla1.jpg","images/Toyota.jpg"],
    show: true
  },
  {
    make: 'Honda',
    model: 'Civic',
    year: 2021,
    images: ["images/hondacivic/CWZF7485.jpg","images/hondacivic/CQTZ1927.jpg", "images/hondacivic/ERXJ9584.jpg","images/hondacivic/GBXZ6124.jpg",
      "images/hondacivic/HIDN0672.jpg","images/hondacivic/IVBU6422.jpg","images/hondacivic/JTOJ2054.jpg","images/hondacivic/KDBQ3695.jpg",
      "images/hondacivic/MQVW0244.jpg","images/hondacivic/QDND8422.jpg","images/hondacivic/TCUT9580.jpg","images/hondacivic/TJCI6545.jpg",
      "images/hondacivic/TSYC6618.jpg"
    ],
    show: true
  }
];

const tableBody = document.querySelector('#carTable tbody');
const carDetails = document.getElementById('carDetails');
const carTitle = document.getElementById('carTitle');
const carImage = document.getElementById('carImage');
const overlay = document.getElementById('overlay');

let currentImages = [];
let currentIndex = 0;

// Populate car table
cars.filter(c => c.show).forEach((car, index) => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${car.make}</td>
    <td>${car.model}</td>
    <td>${car.year}</td>
  `;
  row.addEventListener('click', () => showDetails(index));
  tableBody.appendChild(row);
});

function showDetails(index) {
  const car = cars[index];
  currentImages = car.images;
  currentIndex = 0;

  carTitle.textContent = `${car.make} ${car.model} (${car.year})`;
  updateImage();

  carDetails.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeDetails() {
  carDetails.classList.add('hidden');
  overlay.classList.add('hidden');
}

function updateImage() {
  carImage.style.opacity = 0;

  setTimeout(() => {
    carImage.src = currentImages[currentIndex];

    carImage.onerror = () => {
      console.error('Image failed to load:', currentImages[currentIndex]);
      carImage.src = 'images/placeholder.jpeg';
    };

    carImage.onload = () => {
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

// Close modal when clicking outside
overlay.addEventListener('click', closeDetails);

// Close modal on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !carDetails.classList.contains('hidden')) {
    closeDetails();
  }
});