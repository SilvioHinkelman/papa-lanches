"use client";
const Footer: React.FC = () => {
  return (
    <footer className="maximum bg-green-900">
      <div className="row">
        <div className="contact col-12 col-md-6">
          <ul>
            <li>
              <a href="tel:+555131784992">
                <i className="bi bi-telephone"></i>
                (51) 3178-4992
              </a>
            </li>
            <li>
              <a
                href="https://web.whatsapp.com/send?phone=5551995658179"
                target="_blank"
              >
                <i className="bi bi-whatsapp"></i>
                (51) 99565-8179
              </a>
            </li>
            <li>
              <a href="mailto:contato@contemplamoveis.com.br" target="_blank">
                <i className="bi bi-envelope"></i>
                contato@contemplamoveis.com.br
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/contemplamoveis1/"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
                moveiscontempla
              </a>
            </li>

            <li>
              <a href="https://goo.gl/maps/YT35eCNTdPZGXei67" target="_blank">
                <i className="bi bi-geo-alt"></i>
                Av. Padre Cacique, 3014 - Cristal - Porto Alegre / RS
              </a>
            </li>
          </ul>
        </div>

        <div className="logo col">
          <h1>Contempla</h1>
          <p>Móveis e interiores</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
