function user() {
    let product1 = localStorage.getItem('product1'); // Mengambil data dari Local Storage
    document.getElementById('product1').innerHTML = `<p> ${product1} </p>`;

    let product2 = localStorage.getItem('product2'); // Mengambil data dari Local Storage
    document.getElementById('product2').innerHTML = `<p> ${product2} </p>`;

    let product3 = localStorage.getItem('product3'); // Mengambil data dari Local Storage
    document.getElementById('product3').innerHTML = `<p> ${product3} </p>`;



  }