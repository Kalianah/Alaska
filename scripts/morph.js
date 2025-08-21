function morphBiome(season) {
  const biomeImage = document.getElementById("biome-image");
  const validSeasons = ["winter", "spring", "summer", "fall"];

  if (validSeasons.includes(season)) {
    biomeImage.src = `images/biome/${season}/biome_${season}_001.jpg`;

    logCodex("Biome morph", {
      season: season,
      timestamp: new Date().toISOString()
    });
  } else {
    console.error("Invalid season:", season);
  }
}

function logCodex(eventType, data) {
  // This will later push to your Codex archive
  console.log(`[Codex] ${eventType}:`, data);
}
