function calculateArea(radius) {
    if (radius === undefined) {
      return 'Error: Please provide a radius parameter.';
    } else {
      const area = Math.PI * radius ** 2;
      return `The area of a circle with radius ${radius} is ${area}.`;
    }
  }
  
  // Contoh penggunaan:
  const queryObject = new URLSearchParams(window.location.search);
  const radius = queryObject.get('radius');
  const result = calculateArea(radius);
  document.getElementById("satu").innerHTML = result;
  