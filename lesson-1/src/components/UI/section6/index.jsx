import "./style.scss"
import section6_1 from "@img/section6 (1).png"
import section6_2 from "@img/section6 (2).png"
import section6_3 from "@img/section6 (3).png"
import section6_4 from "@img/section6 (4).png"



export default function index() {
  return (
    <section id="section6">
        <div className="container">
            <div className="section6-top">
                <h4>Neler <span>Yapıyoruz?</span></h4>
                <h3>Öğreniyoruz, sizinle paylaşıyoruz.</h3>
                <p>Alanında uzman yazar arkadaşlarımızın, bilgi paylaşımı yaptıkları yazıları inceleyelim.</p>
            </div>
            <div className="section6-bottom">
                <ul>
                    <li>Hepsini Gör</li>
                    <li>Web Tasarım</li>
                    <li>Kurumsal Kimlik Tasarımı</li>
                    <li>SEO</li>
                    <li>Dijital Pazarlama</li>
                </ul>

                <div className="card-wrapper">
                    <div className="card">
                        <img src={section6_1} alt="img" />
                        <h5>Dijital Pazarlama</h5>
                        <h3>Sosyal CRM Nedir? Sosyal CRM Avantajları Nelerdir?</h3>
                        <p>Sosyal CRM, işletmelerin müşteri ilişkileri yönetimi (CRM) stratejilerini sosyal...</p>
                        <a href="#">Devamını Oku</a>
                    </div>
                    <div className="card">
                        <img src={section6_2} alt="img" />
                        <h5>Dijital Pazarlama</h5>
                        <h3>Dijital PR Nedir? Dijital PR Neden Gereklidir?</h3>
                        <p>Dijital PR, sosyal medya platformları ve web siteleri üzerinden işletmelerin...</p>
                        <a href="#">Devamını Oku</a>
                    </div>
                    <div className="card">
                        <img src={section6_3} alt="img" />
                        <h5>Dijital Pazarlama</h5>
                        <h3>Dijital Ajans Nedir? Doğru Dijital Ajans Nasıl Seçilir?</h3>
                        <p>Bir dijital ajans arama motorları, e ticaret, web sitesi tasarımı gibi birçok alanda hizmet...</p>
                        <a href="#">Devamını Oku</a>
                    </div>
                    <div className="card">
                        <img src={section6_4} alt="img" />
                        <h5>Dijital Pazarlama</h5>
                        <h3>Online İtibar Yönetimi Nedir?</h3>
                        <p>Online itibar yönetimi, markanızla dijital dünyada ortaya çıkan algıyı profesyonel şekilde yönetmek...</p>
                        <a href="#">Devamını Oku</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
