const wolves = {
  wolf_001: {
    name: "Ash",
    age: 3,
    gender: "female",
    hunger: 70,
    thirst: 60,
    stamina: 100,
    oxygen: 95,
    pregnant: false,
    pups: [],
    status: "idle",
    biome: "winter"
  }
};

// 🫁 Breathing Cycle
function breathe(wolfId) {
  const wolf = wolves[wolfId];
  wolf.oxygen = Math.min(100, wolf.oxygen + 1);
  logCodex("Breathing", wolfId, { oxygen: wolf.oxygen });
}

// 🍖 Eating Logic
function eat(wolfId, foodValue) {
  const wolf = wolves[wolfId];
  wolf.hunger = Math.max(0, wolf.hunger - foodValue);
  logCodex("Eating", wolfId, { hunger: wolf.hunger });
}

// 💧 Drinking Logic
function drink(wolfId, waterValue) {
  const wolf = wolves[wolfId];
  wolf.thirst = Math.max(0, wolf.thirst - waterValue);
  logCodex("Drinking", wolfId, { thirst: wolf.thirst });
}

// 🌀 Stamina Drain
function updateStamina(wolfId, action) {
  const wolf = wolves[wolfId];
  const drainRates = { idle: 0, walk: 1, run: 5, hunt: 8 };
  const drain = drainRates[action] || 0;
  wolf.stamina = Math.max(0, wolf.stamina - drain);
  logCodex("Stamina", wolfId, { action, stamina: wolf.stamina });
}

// 🍼 Pup Birth
function birthPups(wolfId, count) {
  const wolf = wolves[wolfId];
  for (let i = 0; i < count; i++) {
    const pupId = `pup_${Date.now()}_${i}`;
    wolf.pups.push(pupId);
    wolves[pupId] = {
      name: `Pup ${i + 1}`,
      age: 0,
      hunger: 50,
      thirst: 50,
      stamina: 30,
      oxygen: 90,
      status: "nursing",
      biome: wolf.biome
    };
  }
  wolf.pregnant = false;
  logCodex("Birth", wolfId, { pupsBorn: count });
}

// 📖 Codex Logger
function logCodex(event, wolfId, details) {
  const timestamp = new Date().toISOString();
  console.log(`[Codex] ${event} | ${wolfId} |`, details, "|", timestamp);
}
