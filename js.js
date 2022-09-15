// kredi türlerini DOM da yakalıyoruz.

const secimYap = document.querySelector("#secim");
console.log(secimYap);

// vade ve kredi tutarını DOM da yakalıyoruz.

const vadeSecimi = document.querySelector("#vade");
console.log(vade);

const tutarSecimi = document.querySelector("#tutar");
console.log(tutar);

let faiz = 0;
let taksit = 0;

//hesapla butonunu DOM da yakalıyoruz.

const hesaplaButonu = document.querySelector("#btn");

hesaplaButonu.addEventListener("click", (i) => {
  i.preventDefault();
  if (secimYap.value === "Konut Kredisi") {
    faiz = 2.0;
  } else if (secimYap.value === "İhtiyaç Kredisi") {
    faiz = 1.0;
  } else if (secimYap.value === "Araç Kredisi") {
    faiz = 3.0;
  }
  if (secimYap.value === "Kredi Türünü Seçiniz") {
    alert(" lütfen kredi türünü seçiniz");
  } else if (!vadeSecimi.value) {
    alert(" lütfen kredi vadesini giriniz");
  } else if (!tutarSecimi.value) {
    alert(" lütfen kredi tutarını giriniz");
  } else {
    const faizOranı = faiz / 100;
    taksitTutarı =
      (tutar.value * (faizOranı * (1 + faizOranı) ** vade.value)) /
      ((1 + faizOranı) ** vade.value - 1);
    hesaplanmis();
  }
});

//aylık faiz formülü
// taksit tutarı = kredi tutarı* faiz*(1+faiz)**taksit sayısı/(1+faiz)**taksit sayısı-1

// hesaplanan değerleri tabloda gösteriyoruz.
// En alttaki butonlada sayfayı yeniliyoruz.
const hesaplanmis = () => {
  const hesap = document.querySelector("#hesaplanmis");
  hesap.innerHTML = `
  <h2 class="mt-3 text-center text-info">Kredi Ödeme Tablosu</h2>
  <table class=" container table table-bordered border-dark  mt-4">
   <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${tutarSecimi.value} ₺</td>
      <th>Kredi Tipi</th>
      <td>${secimYap.value}</td>
    </tr>
    <tr>
      <th>Vade</th>
      <td>${vadeSecimi.value} Ay </td>
      <th>Faiz Orani</th>
      <td> %${faiz} </td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${(taksitTutarı * vadeSecimi.value).toFixed(2)} ₺</td>
      <th>Taksit Tutari</th>
      <td>${taksitTutarı.toFixed(2)} ₺</td>
    </tr>
  </tbody>
 
</table>



<div class= " d-flex justify-content-center mb-5"> <button onclick="window.location.reload(false)" id="tekrar" class=" btn btn-danger w-25 ">
Yeniden Hesapla
</button> </div>



  `;
};
