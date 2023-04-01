const dateField = ["created", "edited"];

export function titlize([firstLetter, ...remaining]) {
  return [firstLetter.toUpperCase(), ...remaining].join("");
}

export function formatObject(obj) {
  const newobj = {};

  for (let [key, value] of Object.entries(obj)) {
    let parts = key.split("_");

    //Let us make dates a bit more readable
    if (dateField.includes(key)) {
      value = new Date(value).toUTCString();
    }

    //Format field names with underscore _
    if (parts.length > 1) {
      key = parts.map((part) => titlize(part)).join(" ");
    }
    newobj[titlize(key)] = value;
  }
  return newobj;
}

export const keyMatches = {
  Films: "Film",
  Pilots: "Pilot",
  Species: "Specy",
  Characters: "Caracter",
  Vehicles: "Vehicle",
  Starships: "Starship",
  Planets: "Planet",
};

export function getPageTite(url) {
  const parts = url.split("/");
  const token = parts[4].endsWith("s") ? parts[4].slice(0, -1) : parts[4];
  return `${titlize(token)} ${parts[5]}' s Details`;
}
