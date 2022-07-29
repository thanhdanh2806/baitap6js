function findMin() {
    for (var e = 0, t = 0, n = 1; n < 10000; n++)
        if (e += n,
        e > 10000) {
            t = n;
            break
        } 
    document.getElementById("txtResult3").innerHTML = "Số nguyên dương nhỏ nhất: " + t
}