import "./styles.scss";
import img_yopiyoruz from "@img/yopiyoruz.png";

export default function index() {
  return (
    <section id="yopiyoruz">
      <div className="container">
        <div className="yopiyoruz-top">
          <h4>
            Neler <span>Yapıyoruz?</span>
          </h4>
          <h3>Sizin için neler yapıyoruz?</h3>
          <p>
            360° dijital marka danışmanlığı, web tasarım ve reklam ajansıdır.
            İşletmelerin ihtiyaçlarına uygun web tasarım ve web yazılım
            hizmetleri sunmaktayız.
          </p>
        </div>
        <div className="yopiyoruz-bottom">
            <div className="yopiyoruz-bottom-left">
                <img src={img_yopiyoruz} alt="img"/>
            </div>
            <div className="yopiyoruz-bottom-right">
                <h4>Sizin için neler yapabiliriz beraber bakalım.</h4>
                <p>Tüm platformlarda sunduğumuz, web tasarım hizmetimiz ile ilgili bilgiler edinelim.</p>
                <ul>
                    <li>
                        <h4>Web Tasarım</h4>
                        <p>Var olan veya yeni kurulan işletmenizin, modern bir kurumsal kimliğe sahip olması için web sitesi.</p>
                    </li>
                    <li>
                        <h4>Dijital Pazarlama</h4>
                        <p>Web sitenizin veya işletmenizin, daha popüler hale gelmesi için çeşitli hizmetler sunuyoruz.</p>
                    </li>
                    <li>
                        <h4>Prodüksiyon</h4>
                        <p>İşletmenizin tanıtımının daha güzel hale gelmesi için, fotoğraf çekimi ve prodüksiyon yapıyoruz.</p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
}
