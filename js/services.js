const bookingForm = document.querySelector(".book-now-form form");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const checkin = document.getElementById("select1").value;
    const checkout = document.getElementById("select2").value;
    const adults = document.getElementById("select3").value;
    const children = document.getElementById("select4").value;

    const alertDiv = document.createElement("div");
    alertDiv.className = "alert text-white p-5 text-center";
    alertDiv.style.backgroundColor = "#CB8670";
    alertDiv.style.fontSize = "20px"
    alertDiv.style.fontWeight = "bold"
    alertDiv.role = "alert";
    alertDiv.innerText =  `Bron is successfully: Check in: ${checkin} / Check out: ${checkout} | Adults: ${adults} | Children: ${children}`;
    
    document.querySelector(".alertBron").appendChild(alertDiv);
    
    console.log("Bron Məlumatları:");
    console.log(`Check in: ${checkin}`);
    console.log(`Check out: ${checkout}`);
    console.log(`Adults: ${adults}`);
    console.log(`Children: ${children}`);


    setTimeout(() => {
        alertDiv.remove();
        window.location.href = "services.html"
    }, 3000);

});
