function tinhGT() {
    for (var e = document.getElementById("inputN1").value, t = 1, n = 1; n <= e; n++)
        t *= n;
    document.getElementById("txtResult5").innerHTML = "Giai thừa: " + t
}