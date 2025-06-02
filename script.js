const cars = [
  {
    make: 'Chevrolet',
    model: 'traverse',
    year: 2017,
    milleage: '',
    condition: `✅ Excellent Driving Condition:
The car runs smoothly with no issues affecting performance or drivability.

🔧 Recently Serviced:
A full service has been completed recently, ensuring the vehicle is up to date on maintenance.

⚙️ No Mechanical Issues:
The engine, transmission, brakes, and other critical components are in proper working order.

🛢️ 4-Cylinder Engine – Fuel Efficient:
Ideal for daily commuting and long-distance travel; delivers great mileage and helps save on gas.

🚗 Almost New Tires:
All four tires are in excellent condition with minimal wear—ready for the road.

🧪 Open Inspection Policy:
Feel free to schedule a test drive or bring your own trusted mechanic to inspect the car before purchasing.`,
    images: [
      "images/chevytraverse/BCMY1021.JPG", "images/chevytraverse/CJCT0637.JPG", 
      "images/chevytraverse/DTFU3626.JPG", "images/chevytraverse/DZUN5950.JPG",
      "images/chevytraverse/EDVN3326.JPG", "images/chevytraverse/EZGY0476.JPG",
      "images/chevytraverse/IWQX0277.JPG", "images/chevytraverse/LANC2403.JPG",
      "images/chevytraverse/LBWO5847.JPG", "images/chevytraverse/LRUD7400.JPG",
      "images/chevytraverse/NRIK9550.JPG", "images/chevytraverse/OKGN3474.JPG",
      "images/chevytraverse/RHLT0259.JPG", "images/chevytraverse/SHUR6003.JPG",
      "images/chevytraverse/UETT1170.JPG", "images/chevytraverse/VJWR1430.JPG",
      "images/chevytraverse/VTBH0091.JPG", "images/chevytraverse/WTVW9115.JPG"
    ],
  }
,
  {
    condition:'',
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
     images: ["images/hyundiatucson/ACOB3309.JPG","images/hyundiatucson/APRM7360.JPG", "images/hyundiatucson/BIZQ5139.JPG","images/hyundiatucson/CEWL9729.JPG",
      "images/hyundiatucson/HUPK2456.JPG","images/hyundiatucson/IAZA0773.JPG","images/hyundiatucson/KUWM6354.JPG","images/hyundiatucson/LWPT1972.JPG",
      "images/hyundiatucson/MFHW0920.JPG","images/hyundiatucson/OUHD9137.JPG","images/hyundiatucson/PAMO5438.JPG","images/hyundiatucson/QGWH4070.JPG",
      "images/hyundiatucson/QVIP5094.JPG","images/hyundiatucson/REQP2726.JPG","images/hyundiatucson/THKZ5796.JPG","images/hyundiatucson/TIOO7458.JPG",
      "images/hyundiatucson/UMRR5440.JPG","images/hyundiatucson/VBIC5107.JPG","images/hyundiatucson/VXHL2171.JPG","images/hyundiatucson/WKPZ5373.JPG",
    ],
    show: true
  },
  {
    condition:'',
    make: 'kia',
    model: 'Forte',
    year: 2020,
    images: [
  
      "images/kia/IMG_3738.JPG","images/kia/IMG_3739.JPG", "images/kia/IMG_3740.JPG","images/kia/IMG_3741.JPG",
      "images/kia/IMG_3742.JPG","images/kia/IMG_3743.JPG","images/kia/IMG_3744.JPG","imageskia//IMG_3745.JPG",
      "images/kia/IMG_3746.JPG","images/kia/IMG_3747.JPG","images/kia/IMG_3748.JPG","images/kia/IMG_3749.JPG",
      "images/kia/IMG_3750.JPG","images/kia/IMG_3751.JPG","images/kia/IMG_3752.JPG","images/kia/IMG_3753.JPG",
      "images/kia/IMG_3754.JPG",
    ],
    show: true
  },
  {
    condition:'',
    make: 'Honda',
    model: 'Civic',
    year: 2005,
    images: ["images/hondacivic/CQTZ1927.JPG", "images/hondacivic/CWZF7485.JPG","images/hondacivic/ERXJ9584.JPG","images/hondacivic/GBXZ6124.JPG",
      "images/hondacivic/HIDN0672.JPG","images/hondacivic/IVBU6422.JPG","images/hondacivic/JTOJ2054.JPG","images/hondacivic/KDBQ3695.JPG",
      "images/hondacivic/MQVW0244.JPG","images/hondacivic/QDND8422.JPG","images/hondacivic/TCUT9580.JPG","images/hondacivic/TJCI6545.JPG",
      "images/hondacivic/TSYC6618.JPG"
    ],
    show: true
  }
];
const tableBody = document.querySelector('#carTable tbody');
const carDetails = document.getElementById('carDetails');
const carTitle = document.getElementById('carTitle');
const carCondition=document.getElementById('carCondition');
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
  carCondition.textContent=`${car.condition}`;
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