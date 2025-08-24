"use strict";
// Task 1
// Filter PLACES by type. If the type property of an object in PLACES matches the typePreference parameter.
function filterPlacesByType(typePreference) {
  const filteredPlaces = PLACES.map((place) => {
    if (
      place.type.toLowerCase().trim() === typePreference.toLowerCase().trim()
    ) {
      return place;
    } else {
      return null;
    }
  }).filter((place) => place !== null);
  return filteredPlaces;
}

// Task 2
function createCard(place) {
  // create elements
  const colDiv = document.createElement("div");
  const cardDiv = document.createElement("div");
  const img = document.createElement("img");
  const cardBodyDiv = document.createElement("div");
  const cardTitle = document.createElement("h5");
  const cardText = document.createElement("p");

  // set element classes
  colDiv.classList.add("col");
  cardDiv.classList.add(...["card", "h-100"]);
  img.classList.add(...["card-img-top", "h-100"]);
  cardBodyDiv.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");

  // set element attributes
  cardDiv.setAttribute(
    "onclick",
    `centerPlaceOnMap("${place.name.toLowerCase().trim()}")`
  );
  img.src = place.img;
  img.alt = place.location;

  // set element content
  cardTitle.innerText = place.name;
  cardText.innerText = place.location;
  cardBodyDiv.insertAdjacentElement("beforeend", cardTitle);
  cardBodyDiv.insertAdjacentElement("beforeend", cardText);
  cardDiv.insertAdjacentElement("beforeend", img);
  cardDiv.insertAdjacentElement("beforeend", cardBodyDiv);
  colDiv.insertAdjacentElement("beforeend", cardDiv);
  return colDiv;
}

// Task 3
function populateRecommendationCards(filteredPlaces) {
  const recommendations = document.querySelector("#recommendations");
  recommendations.innerHTML = "";

  const docFrag = document.createDocumentFragment();
  filteredPlaces.forEach((place) => {
    docFrag.appendChild(createCard(place));
  });
  recommendations.appendChild(docFrag);
}

// Task 4
function findPlaceByName(placeName) {
  const place = PLACES.find(
    (place) =>
      place.name.toLowerCase().trim() === placeName.toLowerCase().trim()
  );
  return place;
}
