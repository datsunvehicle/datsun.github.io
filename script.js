fetch('cars.json')
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector('#carTable tbody');

    data.forEach(car => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><a href="car.html?id=${car.id}">${car.name}</a></td>
        <td>${car.brand}</td>
        <td>${car.year}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading cars:', error));