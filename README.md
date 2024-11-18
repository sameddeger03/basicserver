# basicserver
Nodejs ile express kütüphanesi kullanılarak oluşturulmuş bir sunucu uygulaması.

## 😒 Neden buna ihtiyacım var?
Bu uygulamayı chrome eklentisi olan "SD Enjektörü" için oluşturdum. "SD Enjektörü" eklentisi istenilen sayfaya istenilen javascript dosyasını enjekte eder. Fakat chrome tarayıcısı eklentilerin izole bir alanda çalışmasına izin vererek işlem yapacağı sitelere müdahelelerde bazı kısıtlamalar getirir. İşbu eklentininde script dosyasını enjecte edebilmesi için scripttin localhost üzerinde olması gerekir.
İşte bu yüzden BasicServer'a ihtiyacımız var! BasicServer çalışırken http://localhost aktif olur ve eklenti public klasörüne yerleştirilen javascript dosyasını enjekte edebilir.

## 😎 Nasıl yapılır?
Mesela github.com anasayfasına girdiğinizde "selam" yazılı uyarı verelim.

- Server.exe <a href="https://github.com/sameddeger03/basicserver/releases/download/first/Server.exe">indirin</a>.
- Server.exe'yi çalıştırın ve şu mesajı alın: "Sunucu http://localhost:80 adresinde çalışıyor" (pencereyi kapatmayın)
- Server.exe'nin bulunduğu konumda public klasörü oluşacak. Bu klasöre test.js dosyası oluşturun.
- test.js dosyasını not defteriyle açın ve şunu yazıp kaydedin:
```yaml
alert("selam");
```
- Chrome eklentisini yükleyin.
- Chrome tarayıcısında sol üstte bulunan [<img src="https://raw.githubusercontent.com/sameddeger03/basicserver/master/48.png" height="32px" align="center">] simgeli eklentiye sağ tıklayın ve seçenekleri seçin.
- "SD Enjectorler" sayfası açılacak. "Yeni enjetör ekle" butonuna basın.
- Hedef URL girişine "github.com" yazın.
- Çalıştırılacak Script girişine "test.js" yazın.
- Kaydet butonuna basın.

Bu adımları yaptıktan sonra https://github.com adresine gittiğinizde test.js'nin sayfada çalıştığını göreceksiniz.
