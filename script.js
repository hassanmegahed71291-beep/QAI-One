// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("menu-toggle");

toggleBtn.addEventListener("click", () => {
  if (sidebar.style.transform === "translateX(-220px)") {
    sidebar.style.transform = "translateX(0)";
  } else {
    sidebar.style.transform = "translateX(-220px)";
  }
});

// Line Chart
const ctxLine = document.getElementById('inspectionTrend');
new Chart(ctxLine, {
  type: 'line',
  data: {
    labels: ['May 1','May 10','May 20','May 31'],
    datasets: [
      { label: 'Inspections', data: [200,300,400,
