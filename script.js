const cars = [
  {
    make: 'Chevrolet',
    model: 'traverse',
    year: 2017,
    images: ["images/BCMY1021.JPG","images/CJCT0637.JPG", "images/DTFU3626.JPG","images/DZUN5950.JPG",
      "images/EDVN3326.JPG","images/EZGY0476.JPG","images/IWQX0277.JPG","images/LANC2403.JPG",
      "images/LBWO5847.JPG","images/LRUD7400.JPG","images/NRIK9550.JPG","images/OKGN3474.JPG",
      "images/RHLT0259.JPG","images/SHUR6003.JPG","images/UETT1170.JPG","images/VJWR1430.JPG",
      "images/VTBH0091.JPG","images/WTVW9115.JPG",
    ],
    show: true
  },
  {
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
     images: ["images/ACOB3309.JPG","images/APRM7360.JPG", "images/BIZQ5139.JPG","images/CEWL9729.JPG",
      "images/HUPK2456.JPG","images/IAZA0773.JPG","images/KUWM6354.JPG","images/LWPT1972.JPG",
      "images/MFHW0920.JPG","images/OUHD9137.JPG","images/PAMO5438.JPG","images/QGWH4070.JPG",
      "images/QVIP5094.JPG","images/REQP2726.JPG","images/THKZ5796.JPG","images/TIOO7458.JPG",
      "images/UMRR5440.JPG","images/VBIC5107.JPG","images/VXHL2171.JPG","images/WKPZ5373.JPG",
    ],
    show: true
  },
  {
    make: 'kia',
    model: 'Forte',
    year: 2020,
    images: ["images/IMG_3738.JPG","images/IMG_3739.JPG", "images/IMG_3740.JPG","images/IMG_3741.JPG",
      "images/IMG_3742.JPG","images/IMG_3743.JPG","images/IMG_3744.JPG","images/IMG_3745.JPG",
      "images/IMG_3746.JPG","images/IMG_3747.JPG","images/IMG_3748.JPG","images/IMG_3749.JPG",
      "images/IMG_3750.JPG","images/IMG_3751.JPG","images/IMG_3752.JPG","images/IMG_3753.JPG",
      "images/IMG_3754.JPG",
    ],
    show: true
  },
  {
    make: 'Honda',
    model: 'Civic',
    year: 2005,
    images: ["images/CWZF7485.JPG","images/CQTZ1927.JPG", "images/ERXJ9584.JPG","images/GBXZ6124.JPG",
      "images/HIDN0672.JPG","images/IVBU6422.JPG","images/JTOJ2054.JPG","images/KDBQ3695.JPG",
      "images/MQVW0244.JPG","images/QDND8422.JPG","images/TCUT9580.JPG","images/TJCI6545.JPG",
      "images/TSYC6618.JPG"
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

// Populate table
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
      carImage.src = 'images/placeholder.JPG';
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

overlay.addEventListener('click', closeDetails);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !carDetails.classList.contains('hidden')) {
    closeDetails();
  }
});

function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');
}
function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('active');
}