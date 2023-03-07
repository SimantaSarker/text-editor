function boldToNormal(area) {
  if (area.style.fontWeight == "bold") {
    area.style.fontWeight = "normal";
  } else {
    area.style.fontWeight = "bold";
  }
}

function italicToNormal(area) {
  if (area.style.fontStyle == "italic") {
    area.style.fontStyle = "normal";
  } else {
    area.style.fontStyle = "italic";
  }
}

function underlineToNormal(area) {
  if (area.style.textDecoration == "underline") {
    area.style.textDecoration = "none";
  } else {
    area.style.textDecoration = "underline";
  }
}

