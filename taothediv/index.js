function taothediv() {
  for (var e = "", t = 1; t <= 10; t++)
    e +=
      t % 2 == 0
        ? "<div class='bg-danger text-white p-2'>Div chẵn</div>"
        : "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
  document.getElementById("txtResult6").innerHTML = e;
}
