// DOM Elements
const inputCard = document.getElementById('inputCard');
const resultCard = document.getElementById('resultCard');
const btnCalculate = document.getElementById('btnCalculate');
const btnBack = document.getElementById('btnBack');

const tdsInput = document.getElementById('tds');
const phInput = document.getElementById('ph');
const usageInput = document.getElementById('usage');

const resCategory = document.getElementById('resCategory');
const resHardness = document.getElementById('resHardness');
const resPh = document.getElementById('resPh');
const resProduct = document.getElementById('resProduct');
const resMessage = document.getElementById('resMessage');

// Calculate and show results
btnCalculate.addEventListener('click', () => {
  // Validate inputs
  if (!tdsInput.value || !phInput.value || !usageInput.value) {
    alert('Please enter values for TDS, pH, and Daily Water Usage.');
    return;
  }

  const tds = parseFloat(tdsInput.value);
  const ph = parseFloat(phInput.value);
  const usage = parseFloat(usageInput.value);

  // Approximate hardness from TDS (typically ~60% of TDS)
  const hardness = Math.round(tds * 0.60);

  // Categorize water hardness
  let category = '';
  let product = '';
  let message = '';

  if (hardness <= 60) {
    category = 'Soft Water 🟢';
    product = 'INDION® Carbon Filter / Purifier';
    message = `Based on your TDS of ${tds} ppm, your water is soft. No water softener is required.`;
  } else if (hardness <= 120) {
    category = 'Slightly Hard Water 🔵';
    product = 'INDION® EasySoft Series';
    message = `Based on your TDS of ${tds} ppm and daily usage of ${usage} L, we recommend INDION EasySoft to prevent mild limescale.`;
  } else if (hardness <= 180) {
    category = 'Hard Water 🟡';
    product = 'INDION® Water Softener Series';
    message = `Based on your TDS of ${tds} ppm and daily usage of ${usage} L, we recommend the INDION Water Softener Series with INDION® 225 Na Resin.`;
  } else {
    category = 'Very Hard Water 🔴';
    product = 'INDION® High-Capacity Softener Plant';
    message = `Based on your TDS of ${tds} ppm and daily usage of ${usage} L, heavy limescale is likely. We recommend an INDION High-Capacity Softener.`;
  }

  // pH Status
  let phStatus = 'Neutral';
  if (ph < 6.5) phStatus = 'Acidic';
  if (ph > 8.0) phStatus = 'Alkaline';

  // Display results
  resCategory.textContent = category;
  resHardness.textContent = `${hardness} ppm`;
  resPh.textContent = `${phStatus} (${ph})`;
  resProduct.textContent = product;
  resMessage.textContent = message;

  // Switch cards (hide form, show result)
  inputCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
});

// Go back to form
btnBack.addEventListener('click', () => {
  resultCard.classList.add('hidden');
  inputCard.classList.remove('hidden');
});
