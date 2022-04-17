function ambilProduk(){
    let produk = sessionStorage.getItem('produk')
    document.getElementById('namaproduk').textContent = produk
}
document.addEventListener("DOMContentLoaded", ambilProduk())