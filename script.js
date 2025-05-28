function showDetails(index) {
  currentCar = cars[index];
  currentImageIndex = 0;
  carTitle.textContent = `${currentCar.make} ${currentCar.model} (${currentCar.year})`;
  updateImage();
  carDetails.classList.remove('hidden');
}

function updateImage() {
  carImage.src = currentCar.images[currentImageIndex];
  carImage.alt = `Image ${currentImageIndex + 1} of ${currentCar.make} ${currentCar.model}`;
}

function nextImage() {
  if (!currentCar) return;
  currentImageIndex = (currentImageIndex + 1) % currentCar.images.length;
  updateImage();
}

function prevImage() {
  if (!currentCar) return;
  currentImageIndex = (currentImageIndex - 1 + currentCar.images.length) % currentCar.images.length;
  updateImage();
}

function closeDetails() {
  carDetails.classList.add('hidden');
  currentCar = null;
  currentImageIndex = 0;
}

populateTable();