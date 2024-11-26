const listGroupItem = [
    { name: "All", icon: "fa fa-globe" },
    { name: "Istanbul", icon: "fa fa-hotel" },
    { name: "Konya", icon: "fa fa-hotel" },
    { name: "Bursa", icon: "fa fa-hotel" },
    { name: "Ankara", icon: "fa fa-hotel" },
    { name: "Antalya", icon: "fa fa-hotel" },
    { name: "Alanya", icon: "fa fa-hotel" },
    { name: "Erzurum", icon: "fa fa-hotel" }
];

const hotels = [
    { location: "Turkey", description: "Istanbul", image: "img/bg-img/1.jpg" },
    { location: "Turkey", description: "Konya", image: "img/bg-img/2.jpg" },
    { location: "Turkey", description: "Bursa", image: "img/bg-img/3.jpg" },
    { location: "Turkey", description: "Ankara", image: "img/bg-img/1.jpg" },
    { location: "Turkey", description: "Antalya", image: "img/bg-img/5.jpg" },
    { location: "Turkey", description: "Alanya", image: "img/bg-img/6.jpg" },
    { location: "Turkey", description: "Istanbul", image: "img/bg-img/1.jpg" },
];

const listGroup = document.querySelector('.list-group');
const hotelList = document.getElementById('hotel-list');
const itemsPerPage = 6;
let currentPage = 1;

listGroupItem.forEach(item => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item list-group-item-action mb-2";
    listItem.style.background = "linear-gradient(135deg, #CB8670, #D5A083)";
    listItem.style.color = "white";
    listItem.style.border = "none";
    listItem.style.borderRadius = "12px";
    listItem.style.padding = "12px 16px";
    listItem.style.display = "flex";
    listItem.style.alignItems = "center";
    listItem.style.gap = "10px";
    listItem.style.transition = "transform 0.3s, box-shadow 0.3s";
    
    listItem.innerHTML = `
        <i class="${item.icon} mr-2" style="font-size: 20px;"></i>
        <span style="font-weight: bold;">${item.name}</span>
    `;

    listItem.addEventListener("mouseover", () => {
        listItem.style.transform = "scale(1.05)";
        listItem.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
    });

    listItem.addEventListener("mouseout", () => {
        listItem.style.transform = "scale(1)";
        listItem.style.boxShadow = "none";
    });

    // Click Animation
    listItem.addEventListener("click", () => {
        listItem.style.transform = "scale(0.95)";
        listItem.style.background = "linear-gradient(135deg, #B75540, #CB8670)";
        setTimeout(() => {
            listItem.style.transform = "scale(1)";
            listItem.style.background = "linear-gradient(135deg, #CB8670, #D5A083)";
        }, 200);

        if (item.name === "All") {
            filterHotels('');
        } else {
            filterHotels(item.name);
        }
    });

    listGroup.appendChild(listItem);
});


function displayHotels(filteredHotels) {
    hotelList.innerHTML = '';
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    filteredHotels.slice(start, end).forEach(hotel => {
        const hotelDiv = `
            <div class="col-12 col-md-6 col-lg-6">
                <div class="single-hotels-area wow fadeInUp" data-wow-delay="100ms">
                    <div class="bg-thumbnail bg-img" style="background-image: url(${hotel.image});"></div>
                    <p class="price-from">${hotel.location}</p>
                    <div class="hotels-text">
                        <div class="line"></div>
                        <h4>${hotel.description}</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque.</p>
                    </div>
                    <a href="hotels-detail.html" class="book-hotel-btn btn hotel-btn">Hotel Detail</a>
                </div>
            </div>
        `;
        hotelList.innerHTML += hotelDiv;
    });
}

function filterHotels(filter) {
    const filteredHotels = filter
        ? hotels.filter(hotel => hotel.description.includes(filter))
        : hotels;
    currentPage = 1;
    setupPagination(filteredHotels);
    displayHotels(filteredHotels);
}

function setupPagination(filteredHotels) {
    const pagination = document.getElementById('pagination');
    const pageCount = Math.ceil(filteredHotels.length / itemsPerPage);
    pagination.innerHTML = '';
    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = 'page-item';
        pageItem.innerHTML = `<a class="page-link fs-1 border border-dark rounded-5 p-3" href="#">${i}</a>`;
        pageItem.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayHotels(filteredHotels);
        });
        pagination.appendChild(pageItem);
    }
}

filterHotels('');