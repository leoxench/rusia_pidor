const baseDate = new Date("2025-06-10");
const now = new Date();
const daysPassed = Math.floor((now - baseDate) / (1000 * 60 * 60 * 24));

// Дані втрат
const losses = [
  { label: "Танки", base: 10919, daily: 4 },
  { label: "ББМ", base: 22768, daily: 9 },
  { label: "Артилерійські системи", base: 28982, daily: 48 },
  { label: "РСЗВ", base: 1412, daily: 1 },
  { label: "Засоби ППО", base: 1183, daily: 0 },
  { label: "Літаки", base: 416, daily: 2 },
  { label: "Гелікоптери", base: 337, daily: 0 },
  { label: "БПЛА", base: 40057, daily: 239 },
  { label: "Крилаті ракети", base: 3330, daily: 15 },
  { label: "Кораблі (катери)", base: 28, daily: 0 },
  { label: "Підводні човни", base: 1, daily: 0 },
  { label: "Автомобілі та автоцистерни", base: 51455, daily: 107 },
  { label: "Спеціальна техніка", base: 3912, daily: 1 }
];

// Особовий склад (анімований)
const basePersonnel = 998080;
const personnelGrowth = 1000;
const finalPersonnel = basePersonnel + (daysPassed * personnelGrowth);

const animateNumber = (element, target) => {
  let current = 0;
  const increment = Math.ceil(target / 100);
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = current.toLocaleString('uk-UA');
  }, 20);
};

// Запуск анімації числа
const personnelEl = document.getElementById("personnelLosses");
animateNumber(personnelEl, finalPersonnel);

// Форматована дата
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("currentDate").textContent = "Станом на " + now.toLocaleDateString('uk-UA', options);

// Інші втрати
const list = document.getElementById("lossList");
losses.forEach(item => {
  const currentValue = item.base + (item.daily * daysPassed);
  const li = document.createElement("li");
  li.textContent = `${item.label} — ${currentValue.toLocaleString('uk-UA')} (+${item.daily})`;
  list.appendChild(li);
});
