function tinhMu() {
    for (var e = document.getElementById("inputX").value, t = document.getElementById("inputN").value, n = 0, o = 1; o <= t; o++)
        n += Math.pow(e, o);
    document.getElementById("txtResult4").innerHTML = "Tổng: " + n
}