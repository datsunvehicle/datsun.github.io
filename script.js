document.addEventListener("DOMContentLoaded", function () {
  const cars = [
    {
      make: 'Chevrolet',
      model: 'traverse',
      year: 2017,
      milleage: '161,000',
      price: '$6,500',
      show: false,
      condition: `
        <ul>
          <li>⚙️ No mechanical issues in engine, transmission, or brakes</li>
          <li>💡 Smooth performance with no drivability concerns</li>
          <li>🛠️ Inspected and serviced thoroughly before being offered for sale</li>
          <li>🧪 Transparent inspection policy – bring your own mechanic</li>
        </ul>`,
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
    },
    
    {
      make: 'kia',
      model: 'Forte',
      year: 2020,
      milleage: '8000',
      price: '$16,950',
      show: true,
      condition: `
        <ul>
          <li>📉 Extremely low mileage – only 8,000 miles!</li>
          <li>✨ Like-new condition inside and out</li>
          <li>🧼 No visible wear or tear</li>
          <li>💬 “You won’t be disappointed” – a must-see car!</li>
        </ul>`,
      images: [
        "images/kia/IMG_3738.JPG", "images/kia/IMG_3739.JPG", "images/kia/IMG_3740.JPG", "images/kia/IMG_3741.JPG",
        "images/kia/IMG_3742.JPG", "images/kia/IMG_3743.JPG", "images/kia/IMG_3744.JPG", "images/kia/IMG_3745.JPG",
        "images/kia/IMG_3746.JPG", "images/kia/IMG_3747.JPG", "images/kia/IMG_3748.JPG", "images/kia/IMG_3749.JPG",
        "images/kia/IMG_3750.JPG", "images/kia/IMG_3751.JPG", "images/kia/IMG_3752.JPG", "images/kia/IMG_3753.JPG",
        "images/kia/IMG_3754.JPG"
      ]
    },
    {
      make: 'Honda',
      model: 'Civic',
      year: 2005,
      milleage: '156,000',
      price: '$3,950',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
        </ul>`,
      images: [
        "images/hondacivic/CQTZ1927.JPG", "images/hondacivic/CWZF7485.JPG", "images/hondacivic/ERXJ9584.JPG",
        "images/hondacivic/GBXZ6124.JPG", "images/hondacivic/HIDN0672.JPG", "images/hondacivic/IVBU6422.JPG",
        "images/hondacivic/JTOJ2054.JPG", "images/hondacivic/KDBQ3695.JPG", "images/hondacivic/MQVW0244.JPG",
        "images/hondacivic/QDND8422.JPG", "images/hondacivic/TCUT9580.JPG", "images/hondacivic/TJCI6545.JPG",
        "images/hondacivic/TSYC6618.JPG"
      ]
    },
    {
      make: 'Ford',
      model: 'Escape',
      year: 2018,
      milleage: '76,000',
      price: '$13,450',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
        </ul>`,
      images: [
        "images/forfescape/ABUY6483.JPG", "images/forfescape/ENEZ5301.JPG", "images/forfescape/FFJX3071.JPG",
        "images/forfescape/FVPI2615.JPG", "images/forfescape/JHNL8787.JPG", "images/forfescape/JRTO3547.JPG",
        "images/forfescape/KMED1671.JPG", "images/forfescape/NOAE1505.JPG", "images/forfescape/PCJA3298.JPG",
        "images/forfescape/PTEH2797.JPG", "images/forfescape/ROOF5057.JPG", "images/forfescape/TYJS8659.JPG",
        "images/forfescape/WCWT9773.JPG", "images/forfescape/WIMY4021.JPG", "images/forfescape/WYLB8939.JPG"
      ]
    },
    {
      make: 'Toyota',
      model: 'Corolla',
      year: 2024,
      milleage: '9,000',
      price: '$18,950',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
        </ul>`,
      images: [
        "images/toyotacorolla/BCFD9335.JPG", "images/toyotacorolla/DLVP4603.JPG", "images/toyotacorolla/GUUV1912.JPG",
        "images/toyotacorolla/HCAC9195.JPG", "images/toyotacorolla/OEQD4310.JPG", "images/toyotacorolla/QUSW6847.JPG",
        "images/toyotacorolla/UQSJ9563.JPG", "images/toyotacorolla/WZWB4736.JPG", "images/toyotacorolla/XBZX3360.JPG",
        "images/toyotacorolla/YCZT5364.JPG"
      ]
    },
    {
      make: 'Toyota',
      model: 'Camry',
      year: 2009,
      milleage: '140,000',
      price: '$5,950',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
          <li>Hybrid</li>
        </ul>`,
      images: [
        "images/toyotacamry/AOQR0997.JPG", "images/toyotacamry/BBNP8565.JPG", "images/toyotacamry/DWSX7614.JPG",
        "images/toyotacamry/HUZO5402.JPG", "images/toyotacamry/IQCX2837.JPG", "images/toyotacamry/KNLZ9916.JPG",
        "images/toyotacamry/OJQT6412.JPG", "images/toyotacamry/OMYI0623.JPG", "images/toyotacamry/QIQX1971.JPG",
        "images/toyotacamry/RTLH5778.JPG", "images/toyotacamry/UMMX3466.JPG", "images/toyotacamry/WQGF4159.JPG",
      ]
    },
    {
      make: 'Hyundai',
      model: 'Elantra',
      year: 2017,
      milleage: '121,000',
      price: '8,950',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
        </ul>`,
      images: [
        "images/hyundaielantra/AIUH0502.JPG", "images/hyundaielantra/GOCG7655.JPG", "images/hyundaielantra/KYLX9160.JPG",
        "images/hyundaielantra/MIAL4172.JPG", "images/hyundaielantra/OOBI3493.JPG", "images/hyundaielantra/SCOG3071.JPG",
        "images/hyundaielantra/SLCY6882.JPG", "images/hyundaielantra/TLIV2311.JPG", "images/hyundaielantra/TRVN2490.JPG",       
        "images/hyundaielantra/VLUH0354.JPG"
      ]
    },
    {
      make: 'Honda',
      model: 'CR-H',
      year: 2018,
      milleage: '134,000',
      price: '14,950',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
        </ul>`,
      images: [
         "images/hondacrh/CYID9496.JPG", "images/hondacrh/EHAC6349.JPG","images/hondacrh/FHEF7767.JPG",
         "images/hondacrh/GLKB2490.JPG",  "images/hondacrh/HMCG4100.JPG", "images/hondacrh/JHFG5951.JPG",
         "images/hondacrh/JQCE5916.JPG",  "images/hondacrh/LIDV7091.JPG", "images/hondacrh/NWTV9613.JPG",       
         "images/hondacrh/NYQH2859.JPG",  "images/hondacrh/RHVT1822.JPG", "images/hondacrh/RIKR3507.JPG", 
         "images/hondacrh/RZQH2924.JPG", "images/hondacrh/SDJH3505.JPG", "images/hondacrh/SNJC2508.JPG",  
         "images/hondacrh/UGUH0602.JPG", "images/hondacrh/UQIY3651.JPG", "images/hondacrh/WJLI6313.JPG",      
         "images/hondacrh/WRDA3547.JPG", "images/hondacrh/XJAH3035.JPG",
      ]
    },
    {
      make: 'Toyota',
      model: 'Corolla',
      year: 2018,
      milleage: '114,000',
      price: '8,950',
      show: true,
      condition: `
        <ul>
          <li>🛠️ Recently serviced and ready to go</li>
          <li>🛞 Tires are nearly new</li>
          <li>✅ No mechanical issues</li>
          <li>🚗 Economical and road-ready</li>
        </ul>`,
      images: [
         "images/tcorolla/AUJJ6558.JPG", "images/TCorolla2016/FAUM1712.JPG","images/TCorolla2016/FAUM1712.JPG",
         "images/TCorolla2016/FVDT5814.JPG",  "images/TCorolla2016/FVQZ0953.JPG", "images/TCorolla2016/GAVY7833.JPG",
         "images/TCorolla2016/NQIC0004.JPG",  "images/TCorolla2016/VDAF7281.JPG", "images/TCorolla2016/WIGU8211.JPG",       
         "images/TCorolla2016/WQHB8713.JPG",  "images/TCorolla2016/XLCK5245.JPG",
      ]
    }
  ];

  const tableBody = document.querySelector('#carTable tbody');
  const carDetails = document.getElementById('carDetails');
  const carTitle = document.getElementById('carTitle');
  const carCondition = document.getElementById('carCondition');
  const carImage = document.getElementById('carImage');
  const overlay = document.getElementById('overlay');
  const zoomModal = document.getElementById('zoomModal');
  const zoomedImg = document.getElementById('zoomedImg');

  let currentImages = [];
  let currentIndex = 0;

  // Filter only visible cars
  const visibleCars = cars.filter(car => car.show);

  // Populate table only with visible cars
  visibleCars.forEach((car) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${car.make}</td>
      <td>${car.model}</td>
      <td>${car.year}</td>
      <td>${car.milleage}</td>
      <td>${car.price}</td>
    `;
    row.addEventListener('click', () => showDetails(car));
    tableBody.appendChild(row);
  });

  function showDetails(car) {
    // Block hidden cars manually triggered
    if (!car.show) return;

    currentImages = car.images;
    currentIndex = 0;
    carCondition.innerHTML = car.condition;
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
    if (e.key === 'Escape') {
      if (!zoomModal.classList.contains('hidden')) {
        closeZoom();
      } else if (!carDetails.classList.contains('hidden')) {
        closeDetails();
      }
    }
  });

  // Zoom image
  if (carImage && zoomModal && zoomedImg) {
    carImage.addEventListener("click", function () {
      zoomedImg.src = this.src;
      zoomModal.classList.remove("hidden");
    });

    zoomModal.addEventListener("click", closeZoom);
  }

  function closeZoom() {
    zoomModal.classList.add("hidden");
  }

  // Navigation and global exposure
  window.nextImage = nextImage;
  window.prevImage = prevImage;
  window.closeZoom = closeZoom;
  window.closeDetails = closeDetails;
  window.showSection = function (id) {
    document.querySelectorAll('.content-section').forEach(section => {
      section.classList.add('hidden');
    });
    document.getElementById(id).classList.remove('hidden');

    // 📱 Collapse sidebar on mobile
    if (window.innerWidth <= 768) {
      document.querySelector('.sidebar').classList.remove('active');
    }
  };

  window.toggleMenu = function () {
    document.querySelector('.sidebar').classList.toggle('active');
  };
});