const cardForm = document.getElementById("cardForm");
const cardContainer = document.getElementById("cardContainer");

cardForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const imageInput = document.getElementById("imageInput").value;
  const titleInput = document.getElementById("titleInput").value;
  const descriptionInput = document.getElementById("descriptionInput").value;
  const linkInput = document.getElementById("linkInput").value;
  const priceInput = document.getElementById("priceInput").value;

  console.log(imageInput, titleInput, descriptionInput, linkInput, priceInput);

  var object = [
    {
      image: imageInput,
      title: titleInput,
      description: descriptionInput,
      link: linkInput,
      price: priceInput,
    },
  ];

  object.forEach((element) => {
    let div = document.createElement("div");

    div.innerHTML = ` <div class="card">
          <img src=${element.image} alt="Card Image">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
          <div class="link-price-container">
          <p class="price">${element.price}</p>
          <a href="${element.link}" target="_blank">Learn More</a>
          </div>
    </div>
`;
    cardContainer.appendChild(div);
  });
});
