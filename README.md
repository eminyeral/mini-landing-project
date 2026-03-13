# Modern Landing Page ve Bilesen Kütüphanesi

Bu proje, semantik HTML, modern SCSS ve React kullanılarak geliştirilmiş, yüksek performanslı bir ürün tanıtım sayfası ve yeniden kullanılabilir UI bilesenleri kütüphanesidir.

## Teknik Özellikler

* **Performans:** Lighthouse skorları tüm kategorilerde 90+ hedefiyle optimize edilmistir.
* **Erisilebilirlik:** Semantik HTML, label-id eslesmeleri ve temel ARIA kullanımı ile klavye navigasyonu desteği sağlanmıştır.
* **Responsive Tasarım:** Mobil-öncelikli yaklaşımla 3 ana breakpoint (<=640px, 641px-1024px, >=1025px) için tam uyumluluk.
* **Tema Desteği:** CSS Variables kullanılarak merkezi Light ve Dark mod yönetimi.
* **Form Doğrulama:** Yalın JS mantığıyla e-posta format kontrolü ve bos alan uyarıları içeren yalancı submit formu.

## Kullanılan Teknolojiler

* **Framework:** React + Vite
* **Stil Yönetimi:** SCSS ve BEM Metodolojisi
* **Versiyon Kontrol:** Git Flow (main, dev, feat/, fix/)

## UI Bilesen Kütüphanesi

Proje kapsamında geliştirilen ve props ile yapılandırılabilen yeniden kullanılabilir bilesenler sunlardır:

1. **Button:** Farklı varyantları (primary, outline) destekler.
2. **Input:** Tip, placeholder ve label desteğiyle erisilebilirlik odaklıdır.
3. **Card:** Ürün ve fiyatlandırma bilgilerini sergilemek için optimize edilmistir.
4. **Modal:** Portal yapısıyla modal pencereler olusturur.
5. **Accordion:** Sıkça sorulan sorular için interaktif içerik yönetimi sağlar.



## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıstırmak için asağıdaki komutları izleyin: 

'''bash
# Bağımlılıkları yükleyin
npm install

# Gelistirme sunucusunu baslatın
npm run dev

# Üretim için derleme yapın
npm run build
'''

## Mimari Notlar ve Kararlar

Proje mimarisiyle ilgili teknik detaylar ve karar kayıtları `/docs/adr-*.md` dizini altında yer almaktadır. Ayrıca yapılan tüm güncellemeler `CHANGELOG.md` dosyasından takip edilebilir.

**Not:** Lighthouse raporu ekran görüntüsü ve mimari notlar proje teslimat dökümanlarına dahil edilmiştir.