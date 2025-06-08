const fruits = [
  { name: "蘋果", price: 10 },
  { name: "香蕉", price: 15 },
  { name: "芭樂", price: 15 },
  { name: "鳳梨", price: 30 },
  { name: "草莓", price: 60 },
  { name: "藍莓", price: 70 },
  { name: "西瓜", price: 90 }
];

const input = document.getElementById("search");
const result = document.getElementById("result");

function render(list) {
  result.innerHTML = "";
  if (list.length === 0) {
    result.innerHTML = "<p>沒有找到水果</p>";
    return;
  }

  list.forEach(item => {
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>價格：${item.price} 元</p>
      <a class="buy" href="https://line.me/ti/p/~0928523003" target="_blank">我要購買</a>
    `;
    result.appendChild(div);
  });
}

input.addEventListener("input", () => {
  const keyword = input.value.trim();
  const filtered = fruits.filter(f => f.name.includes(keyword));
  render(filtered);
});
