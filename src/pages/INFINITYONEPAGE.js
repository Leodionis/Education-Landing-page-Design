import { useEffect } from "react";
import "./INFINITYONEPAGE.css";

const INFINITYONEPAGE = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className="infinity-onepage">
      <img className="infinity-onepage-child" alt="" src="/vector-366.svg" />
      <div className="infinity-onepage-item" />
      <div className="navbar">
        <button className="navbtn" autoFocus={true}>
          <div className="sign-up">Sign up</div>
        </button>
        <div className="nav-links">
          <div className="nosotros">Nosotros</div>
          <div className="servicios">Servicios</div>
          <div className="contctanos">Contáctanos</div>
        </div>
      </div>
      <div className="dedcate-a-cumplir-container" data-animate-on-scroll>
        <p className="dedcate-a-cumplir">Dedícate a cumplir tus sueños</p>
        <p className="que-nosotros-nos">{`que nosotros nos encargamos de cuidarte `}</p>
      </div>
      <button className="hero-newsletter">
        <div className="newsletter-bg" />
        <div className="newsletter-button">
          <div className="te-ayudamos">¡Te ayudamos!</div>
        </div>
      </button>
      <div className="section">
        <div className="section-left">
          <b className="powerful-and-easy">
            Powerful and easy to use SaaS platform
          </b>
          <div className="use-marketing-automation">
            Use marketing automation to identify hot leads and email your sales
            team telling them to follow up. Nurture and contact leads at the
            opportune time to maximize.
          </div>
          <div className="cta-btn">
            <b className="get-started">Get Started</b>
          </div>
        </div>
        <div className="image">
          <img className="image-child" alt="" src="/rectangle-148.svg" />
          <img
            className="digital-service2-1-icon"
            alt=""
            src="/digitalservice2-1@2x.png"
          />
          <div className="img">
            <img className="img-child" alt="" src="/rectangle-78.svg" />
            <div className="conversion-rate">Conversion Rate</div>
            <b className="b5">$7,350</b>
            <div className="div3">+16%</div>
            <div className="k1">10k</div>
            <div className="k2">4k</div>
            <div className="k3">2k</div>
            <div className="div4">0</div>
            <div className="s">S</div>
            <div className="img-item" />
            <div className="m">M</div>
            <div className="img-inner" />
            <div className="t">T</div>
            <div className="img-child1" />
            <div className="w">W</div>
            <div className="img-child2" />
            <div className="t1">T</div>
            <div className="img-child3" />
            <div className="f">F</div>
            <div className="img-child4" />
            <div className="s1">S</div>
            <div className="img-child5" />
            <div className="s2">S</div>
            <div className="img-child6" />
          </div>
        </div>
      </div>
      <div className="group-parent4">
        <div className="quines-somos-parent">
          <div className="quines-somos">¿Quiénes somos?</div>
          <div className="somos-una-agencia-container">
            <p className="somos-una-agencia-de-seguros-o">
              <span className="somos-una-agencia">{`Somos una agencia de seguros orientada en `}</span>
              <span className="gestionar-eficientemente-los">
                gestionar eficientemente los programas de seguros de nuestros
                clientes,
              </span>
              <span>
                {" "}
                a través de un asesoramiento profesional y según sus necesidades
                de protección, especializándonos en maximizar la atención y la
                correcta cobertura de los riesgos.
              </span>
            </p>
            <p className="somos-una-agencia-de-seguros-o">&nbsp;</p>
            <p className="somos-una-agencia-de-seguros-o">
              <span className="nos-mueve-facilitarle">
                Nos mueve facilitarle la vida a nuestros clientes para que
                puedan cumplir sus sueños
              </span>
              <span className="somos-una-agencia">
                {" "}
                mientras nos nosotros aseguramos su protección.
              </span>
            </p>
          </div>
        </div>
        <img
          className="group-child23"
          alt=""
          src="/rectangle-173@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="porqu-elegirnos">
        <div className="porqu-elegirnos-child" />
        <b className="por-qu-elegirnos">¿Por qué elegirnos?</b>
        <button className="button">
          <div className="button-child" />
          <b className="qu-ms-podemos-container">
            <p className="somos-una-agencia-de-seguros-o">¿Qué más podemos</p>
            <p className="somos-una-agencia-de-seguros-o">hacer por ti?</p>
          </b>
        </button>
        <div className="group-parent5">
          <div className="estamos-respaldados-por-las-me-parent">
            <b className="estamos-respaldados-por">
              Estamos respaldados por las mejores compañías del mercado.
            </b>
            <div className="ellipse-parent">
              <div className="group-child24" />
              <b className="b6">1</b>
            </div>
          </div>
          <div className="nos-capacitamos-diariamente-pa-parent">
            <b className="nos-capacitamos-diariamente-container">
              <p className="somos-una-agencia-de-seguros-o">
                Nos capacitamos diariamente para brindar el mejor servicio y a
                la medida (su propio departamento de seguros)
              </p>
            </b>
            <div className="ellipse-group">
              <div className="group-child24" />
              <b className="b7">2</b>
            </div>
          </div>
          <div className="group-wrapper2">
            <div className="ellipse-container">
              <div className="group-child24" />
              <b className="b7">3</b>
            </div>
          </div>
          <div className="no-vendemos-seguros-los-dise-parent">
            <b className="estamos-respaldados-por">
              No vendemos seguros, los diseñamos a su medida.
            </b>
            <div className="ellipse-parent">
              <div className="group-child24" />
              <b className="b7">3</b>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-section">
        <div className="personas" data-animate-on-scroll>
          <div className="personas-child" />
          <b className="seguros-de-personas-container">
            <p className="somos-una-agencia-de-seguros-o">SEGUROS DE</p>
            <p className="somos-una-agencia-de-seguros-o">PERSONAS</p>
          </b>
          <button className="ctaselect-plan">
            <b className="me-interesa">Me interesa</b>
          </button>
          <div className="vida-parent">
            <div className="vida">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="tu-vida">Tu Vida</div>
            </div>
            <div className="salud">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="tu-salud">Tu Salud</div>
            </div>
            <div className="vehiculo">
              <div className="vehiculo-child" />
              <img className="vehiculo-item" alt="" src="/vector-371.svg" />
              <div className="tu-vehculo">Tu Vehículo</div>
            </div>
            <div className="hogar">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="tu-vida">Tu Hogar</div>
            </div>
            <div className="otros">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="tu-salud">Otros</div>
            </div>
          </div>
          <div className="personas-item" />
        </div>
        <div className="empresas" data-animate-on-scroll>
          <div className="empresas-child" />
          <b className="seguros-para-empresas-container">
            <p className="somos-una-agencia-de-seguros-o">SEGUROS PARA</p>
            <p className="somos-una-agencia-de-seguros-o">EMPRESAS</p>
          </b>
          <button className="ctaselect-plan">
            <b className="me-interesa">Me interesa</b>
          </button>
          <div className="empresas-inner">
            <div className="vida-group">
              <div className="vida1">
                <div className="vida-inner" />
                <img className="vida-child1" alt="" src="/vector-372.svg" />
                <div className="cumplimiento">Cumplimiento</div>
              </div>
              <div className="salud1">
                <div className="salud-inner" />
                <img className="salud-child1" alt="" src="/vector-373.svg" />
                <div className="responsabilidad-civil">
                  Responsabilidad Civil
                </div>
              </div>
              <div className="vehiculo1">
                <div className="vehiculo-inner" />
                <img className="vehiculo-child1" alt="" src="/vector-374.svg" />
                <div className="todo-riesgo-construccin-container">
                  <span className="todo-riesgo-construccin-container1">
                    <p className="somos-una-agencia-de-seguros-o">
                      Todo Riesgo
                    </p>
                    <p className="somos-una-agencia-de-seguros-o">
                      Construcción
                    </p>
                  </span>
                </div>
              </div>
              <div className="hogar1">
                <div className="salud-inner" />
                <img className="salud-child1" alt="" src="/vector-373.svg" />
                <div className="maquinaria-yequipo">
                  <span className="maquinaria-yequipo-txt-container">
                    <p className="somos-una-agencia-de-seguros-o">Maquinaria</p>
                    <p className="somos-una-agencia-de-seguros-o">yEquipo</p>
                  </span>
                </div>
              </div>
              <div className="otros2">
                <div className="vida-inner" />
                <img className="vida-child1" alt="" src="/vector-372.svg" />
                <div className="seguros-generales">Seguros Generales</div>
              </div>
            </div>
          </div>
          <div className="personas-item" />
        </div>
        <div className="arl" data-animate-on-scroll>
          <div className="arl-child" />
          <b className="arl1">ARL</b>
          <button className="ctaselect-plan">
            <b className="me-interesa">Me interesa</b>
          </button>
          <div className="vida-container">
            <div className="vida2">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="productividad">Productividad</div>
            </div>
            <div className="salud2">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="consultora">Consultoría</div>
            </div>
            <div className="vehiculo2">
              <div className="vehiculo-child" />
              <img className="vehiculo-item" alt="" src="/vector-371.svg" />
              <div className="sg-sst">SG-SST</div>
            </div>
            <div className="hogar2">
              <div className="vida-child" />
              <img className="vida-item" alt="" src="/vector-37.svg" />
              <div className="sistema-de-gestin">Sistema de Gestión</div>
            </div>
          </div>
          <div className="personas-item" />
        </div>
        <div className="servicios1">Servicios</div>
        <div className="tranquilidad-y-confianza-container">
          <p className="tranquilidad-y-confianza">Tranquilidad y confianza,</p>
          <p className="tranquilidad-y-confianza">&nbsp;</p>
          <p className="somos-una-agencia-de-seguros-o">
            ¿Qué más podemos hacer por ti?
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="bg" />
        <div className="border" />
        <div className="border1" />
        <div className="infinity-riesgos-y-seguros-parent">
          <div className="infinity-riesgos-y-container">
            <p className="infinity">Infinity</p>
            <p className="riesgos-y-seguros">riesgos y seguros</p>
          </div>
          <div className="gestionamos-eficientemente-los">
            Gestionamos eficientemente los programas de seguros de nuestros
            clientes, a través de un asesoramiento profesional y según sus
            necesidades de protección.
          </div>
        </div>
        <div className="servicios-parent">
          <div className="servicios2">Servicios</div>
          <div className="seguros-personas">Seguros Personas</div>
          <div className="seguros-empresas">Seguros Empresas</div>
          <div className="riesgos-laborales">Riesgos Laborales</div>
        </div>
        <div className="copyright-elorzados-all">
          Copyright @elorzados. All Rights Reserved.
        </div>
        <div className="contact-menu-parent">
          <div className="contact-menu">
            <div className="list">
              <div className="generalesinfinitybrokercomc">
                generales@infinitybroker.com.co
              </div>
              <div className="infinityriesgosyseguros">
                @infinityriesgosyseguros
              </div>
              <div className="div5"></div>
            </div>
          </div>
          <div className="call">
            <div className="div6">312 607 8704</div>
          </div>
          <img className="phone-icon" alt="" src="/phone.svg" />
          <div className="contact-us1">Contact Us</div>
        </div>
        <div className="conversemos">Conversemos</div>
        <div className="group-parent6">
          <input
            className="group-input"
            value="Nombre completo"
            placeholder="Nombre completo*"
            type="text"
          />
          <div className="group-parent7">
            <div className="parent">
              <div className="escribe-tu-sueo">+57 1254 5211 552</div>
              <div className="telfono">Teléfono*</div>
              <div className="group-child28" />
            </div>
            <div className="escribe-tu-sueo-aqu-parent">
              <div className="escribe-tu-sueo">Escribe tu sueño aquí.</div>
              <div className="telfono">Cuéntanos cómo podemos servirte*</div>
              <div className="group-child28" />
            </div>
          </div>
        </div>
        <button className="hero-newsletter1">
          <div className="newsletter-bg1" />
          <div className="newsletter-button1">
            <div className="te-ayudamos1">¡Te ayudamos!</div>
          </div>
        </button>
      </div>
      <div className="testimonial-section">
        <div className="lo-que-nuestros">
          Lo que nuestros clienten dicen de nosotros
        </div>
        <div className="testimonials">
          <div className="card-02" data-animate-on-scroll>
            <div className="base" />
            <div className="new-delhi">New Delhi</div>
            <b className="anil-dvivedi">Anil Dvivedi</b>
            <img className="image-icon" alt="" src="/image@2x.png" />
            <div className="lorem-ipsum-dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna
            </div>
            <img className="review-icon" alt="" src="/review.svg" />
          </div>
          <div className="card-3" data-animate-on-scroll>
            <div className="base" />
            <div className="bhadrak">Bhadrak</div>
            <b className="srijan-sirasikar">Srijan Sirasikar</b>
            <img className="image-icon1" alt="" src="/image@2x.png" />
            <div className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna
            </div>
            <img className="review-icon1" alt="" src="/review.svg" />
          </div>
          <div className="card-01" data-animate-on-scroll>
            <div className="base" />
            <div className="kota-rajasthan">Kota, Rajasthan</div>
            <b className="kartik-bansal">Kartik Bansal</b>
            <img className="image-icon1" alt="" src="/image@2x.png" />
            <div className="lorem-ipsum-dolor1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna
            </div>
            <img className="review-icon1" alt="" src="/review.svg" />
          </div>
        </div>
      </div>
      <div className="dashboard-dark-mode">
        <div className="graphic-side">
          <img className="big-circles-icon" alt="" src="/big-circles@2x.png" />
          <div className="frame-parent">
            <div className="hello-kartik-parent">
              <b className="hello-kartik">Hello Kartik!</b>
              <div className="we-are-on-container">
                {`We are on a mission to help developers like you to build beautiful projects for `}
                <span className="free">free</span>.
              </div>
            </div>
            <div className="iconlybulkvoice-3-parent">
              <img
                className="iconlylightsearch"
                alt=""
                src="/iconlybulkvoice-3.svg"
              />
              <div className="announcments">Announcments</div>
            </div>
          </div>
        </div>
        <div className="dashboard-dark-mode-child" />
        <div className="frame-group">
          <div className="frame-div">
            <img className="frame-child" alt="" src="/group-386.svg" />
            <div className="total-sales-parent">
              <div className="total-sales">Total Sales</div>
              <div className="k4">$560K</div>
            </div>
            <img
              className="iconlylightarrow-down-2"
              alt=""
              src="/iconlylightarrow--down-2@2x.png"
            />
          </div>
          <div className="group-parent8">
            <img className="frame-item" alt="" src="/group-3861.svg" />
            <div className="hello-kartik-parent">
              <div className="total-sales">Total Profit</div>
              <div className="k4">$185K</div>
            </div>
          </div>
          <div className="group-parent8">
            <img className="frame-item" alt="" src="/group-3862.svg" />
            <div className="hello-kartik-parent">
              <div className="total-sales">Total Cost</div>
              <div className="k4">$375K</div>
            </div>
          </div>
          <div className="group-parent8">
            <img className="frame-item" alt="" src="/group-3863.svg" />
            <div className="hello-kartik-parent">
              <div className="total-sales">Revenue</div>
              <div className="k4">$742K</div>
            </div>
          </div>
          <div className="group-parent11">
            <img className="frame-item" alt="" src="/group-3864.svg" />
            <div className="hello-kartik-parent">
              <div className="total-sales">Net Income</div>
              <div className="k4">$150K</div>
            </div>
          </div>
          <div className="frame-div">
            <img className="frame-child" alt="" src="/group-3865.svg" />
            <div className="frame-wrapper">
              <div className="hello-kartik-parent">
                <div className="total-sales">Today</div>
                <div className="k4">$4600</div>
              </div>
            </div>
            <img
              className="iconlylightarrow-down-21"
              alt=""
              src="/iconlylightarrow--down-2@2x.png"
            />
          </div>
        </div>
        <div className="frame-container">
          <div className="frame-parent1">
            <div className="earnings-parent">
              <div className="earnings">Earnings</div>
              <div className="this-week-parent">
                <div className="this-week">This Week</div>
                <img
                  className="iconlylightsearch"
                  alt=""
                  src="/iconlylightarrow--down-2.svg"
                />
              </div>
            </div>
            <div className="group-parent13">
              <img className="frame-child4" alt="" src="/group-389.svg" />
              <div className="frame-parent2">
                <div className="ellipse-parent2">
                  <div className="frame-child5" />
                  <div className="fashion-parent">
                    <div className="this-week">Fashion</div>
                    <div className="earnings">251K</div>
                  </div>
                </div>
                <div className="ellipse-parent2">
                  <div className="frame-child6" />
                  <div className="fashion-parent">
                    <div className="this-week">Accessories</div>
                    <div className="earnings">176K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="conversions-parent">
              <div className="earnings">Conversions</div>
              <div className="this-week-parent">
                <div className="this-week">This Week</div>
                <img
                  className="iconlylightsearch"
                  alt=""
                  src="/iconlylightarrow--down-2.svg"
                />
              </div>
            </div>
            <div className="group-parent14">
              <div className="frame-parent4">
                <div className="group">
                  <div className="visa">160</div>
                  <div className="visa">120</div>
                  <div className="visa">80</div>
                  <div className="visa">40</div>
                  <div className="visa">0</div>
                </div>
                <div className="frame-parent5">
                  <div className="line-parent">
                    <div className="frame-child7" />
                    <div className="frame-child7" />
                    <div className="frame-child7" />
                    <div className="frame-child7" />
                    <div className="frame-child7" />
                  </div>
                  <div className="group-parent15">
                    <div className="rectangle-parent14">
                      <div className="group-child30" />
                      <div className="group-child31" />
                    </div>
                    <div className="rectangle-parent15">
                      <div className="group-child32" />
                      <div className="group-child33" />
                    </div>
                    <div className="rectangle-parent16">
                      <div className="group-child34" />
                      <div className="group-child35" />
                    </div>
                    <div className="rectangle-parent17">
                      <div className="group-child36" />
                      <div className="group-child37" />
                    </div>
                    <div className="rectangle-parent16">
                      <div className="group-child34" />
                      <div className="group-child35" />
                    </div>
                    <div className="rectangle-parent19">
                      <div className="group-child40" />
                      <div className="group-child41" />
                    </div>
                    <div className="rectangle-parent16">
                      <div className="group-child34" />
                      <div className="group-child35" />
                    </div>
                    <div className="rectangle-parent14">
                      <div className="group-child30" />
                      <div className="group-child31" />
                    </div>
                    <div className="rectangle-parent22">
                      <div className="group-child46" />
                      <div className="group-child47" />
                    </div>
                    <div className="rectangle-parent16">
                      <div className="group-child34" />
                      <div className="group-child35" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="s-parent">
                <div className="visa">S</div>
                <div className="visa">M</div>
                <div className="visa">T</div>
                <div className="visa">W</div>
                <div className="visa">T</div>
                <div className="visa">F</div>
                <div className="visa">S</div>
                <div className="visa">M</div>
                <div className="visa">T</div>
                <div className="visa">W</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent6">
          <div className="k-parent">
            <div className="square">750K</div>
            <div className="website-visitors">Website Visitors</div>
          </div>
          <div className="frame-child12" />
          <div className="k-parent">
            <div className="square">7,500</div>
            <div className="website-visitors">New Customers</div>
          </div>
        </div>
        <div className="graphic-side-parent">
          <div className="graphic-side1">
            <img
              className="big-circles-icon1"
              alt=""
              src="/big-circles@2x.png"
            />
            <div className="graphic-side-child" />
            <div className="graphic-side-item" />
            <div className="card-wrapper">
              <div className="card">
                <div className="frame-parent2">
                  <div className="frame-parent8">
                    <div className="fashion-parent">
                      <b className="visa">VISA</b>
                      <div className="premium-account">PREMIUM ACCOUNT</div>
                    </div>
                    <img
                      className="frame-child13"
                      alt=""
                      src="/group-253.svg"
                    />
                  </div>
                  <div className="parent1">
                    <div className="square">1234</div>
                    <div className="square">* * * *</div>
                    <div className="square">* * * *</div>
                    <div className="square">0000</div>
                  </div>
                  <div className="frame-parent9">
                    <div className="card-holder-parent">
                      <div className="hello-kartik">Card holder</div>
                      <div className="kartik-bansal1">Kartik Bansal</div>
                    </div>
                    <div className="card-holder-parent">
                      <div className="hello-kartik">Expire date</div>
                      <div className="kartik-bansal1">06/21</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent10">
            <div className="frame-parent11">
              <div className="frame-parent12">
                <div className="iconlybulkbag-parent">
                  <img
                    className="iconlybulkbag"
                    alt=""
                    src="/iconlybulkbag@2x.png"
                  />
                  <div className="fashion-parent">
                    <div className="this-week">1153</div>
                    <div className="products">Products</div>
                  </div>
                </div>
                <div className="iconlybulkbag-parent">
                  <img
                    className="iconlybulkbag"
                    alt=""
                    src="/iconlybulkbuy@2x.png"
                  />
                  <div className="fashion-parent">
                    <div className="this-week">81K</div>
                    <div className="products">Order Served</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent13">
                <div className="parent3">
                  <div className="square">$405,012,300</div>
                  <div className="yoy-24-wrapper">
                    <div className="visa">YoY 24%</div>
                  </div>
                </div>
                <div className="life-time-sales">Life time sales</div>
              </div>
            </div>
            <div className="frame-parent14">
              <div className="view-project-wrapper">
                <div className="announcments">View Project</div>
              </div>
              <div className="analytics-wrapper">
                <div className="announcments">Analytics</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent15">
          <div className="frame-parent16">
            <div className="k-container">
              <div className="earnings">$855.8K</div>
              <div className="gross-sales">Gross Sales</div>
            </div>
            <div className="frame-parent17">
              <div className="this-week-container">
                <div className="frame-child5" />
                <div className="this-week">Sales</div>
              </div>
              <div className="this-week-container">
                <div className="frame-child6" />
                <div className="this-week">Cost</div>
              </div>
            </div>
            <div className="this-week-container">
              <div className="this-week">This Week</div>
              <img
                className="iconlylightsearch"
                alt=""
                src="/iconlylightarrow--down-21.svg"
              />
            </div>
          </div>
          <div className="frame-parent18">
            <div className="parent4">
              <div className="this-week">99</div>
              <div className="this-week">90</div>
              <div className="this-week">81</div>
              <div className="this-week">72</div>
              <div className="this-week">63</div>
              <div className="this-week">54</div>
            </div>
            <div className="group-parent16">
              <img className="frame-child16" alt="" src="/group-33593.svg" />
              <div className="jan-parent">
                <div className="this-week">Jan</div>
                <div className="this-week">Feb</div>
                <div className="this-week">Mar</div>
                <div className="this-week">Apr</div>
                <div className="this-week">Jun</div>
                <div className="this-week">Jul</div>
                <div className="this-week">Aug</div>
              </div>
            </div>
            <img className="group-child50" alt="" src="/group-33598.svg" />
          </div>
        </div>
        <div className="toolbar-2">
          <div className="icon-text-parent">
            <div className="icon-text">
              <img
                className="iconlylightsearch"
                alt=""
                src="/iconlylightsearch.svg"
              />
              <div className="button1">Search…</div>
            </div>
            <div className="frame-parent19">
              <div className="frame-child17" />
              <img
                className="iconlylightsearch"
                alt=""
                src="/iconlybulknotification.svg"
              />
              <img
                className="iconlylightsearch"
                alt=""
                src="/iconlybulkmessage.svg"
              />
              <div className="user">
                <img
                  className="beared-guy02-min-1"
                  alt=""
                  src="/beared-guy02min-1@2x.png"
                />
                <div className="fashion-parent">
                  <div className="this-week">Kartik Bansal</div>
                  <div className="marketing-administra">CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-1-parent">
          <div className="sidebar-1">
            <div className="main-logo">
              <div className="logo">
                <div className="square">Sassify</div>
              </div>
              <div className="separator" />
            </div>
            <div className="frame-parent20">
              <div className="menu-title-parent">
                <div className="menu-title">
                  <div className="help">
                    <div className="help1">
                      <img className="home-icon" alt="" src="/home.svg" />
                      <div className="help2">MAIN</div>
                    </div>
                    <div className="help3">Home</div>
                  </div>
                </div>
                <div className="overview-parent">
                  <div className="overview">
                    <div className="messages">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkcategory@2x.png"
                        />
                        <div className="this-week">Dashboard</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages2">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlybulkfilter.svg"
                        />
                        <div className="this-week">Menu Style</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="main-child" />
                </div>
              </div>
              <div className="main">
                <div className="menu-title">
                  <div className="help">
                    <div className="help1">
                      <img className="home-icon" alt="" src="/home.svg" />
                      <div className="help2">MAIN</div>
                    </div>
                    <div className="help3">Pages</div>
                  </div>
                </div>
                <div className="menu-list">
                  <div className="leaderboard">
                    <div className="messages4">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkgame@2x.png"
                        />
                        <div className="this-week">Example</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlybulkticket-star.svg"
                        />
                        <div className="this-week">Widgets</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages8">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulklocation@2x.png"
                        />
                        <div className="this-week">Maps</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages10">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlybulkshield-done.svg"
                        />
                        <div className="this-week">Authentication</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="list-heading">
                    <div className="messages12">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlybulk3-user.svg"
                        />
                        <div className="this-week">Users</div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-heading1">
                    <div className="messages14">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlylightadd-user.svg"
                        />
                        <div className="this-week">New User</div>
                      </div>
                      <div className="notification7">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-heading2">
                    <div className="messages14">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlylightedit-square.svg"
                        />
                        <div className="this-week">Edit</div>
                      </div>
                      <div className="notification7">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-heading1">
                    <div className="messages14">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlylightdocument.svg"
                        />
                        <div className="this-week">List</div>
                      </div>
                      <div className="notification7">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-heading1">
                    <div className="messages14">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlylightdelete.svg"
                        />
                        <div className="this-week">Delete</div>
                      </div>
                      <div className="notification7">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkinfo-circle@2x.png"
                        />
                        <div className="this-week">Error 404</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkdanger@2x.png"
                        />
                        <div className="this-week">Error 505</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkbookmark@2x.png"
                        />
                        <div className="this-week">Maintence</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="main-child" />
              </div>
            </div>
            <div className="help8">
              <div className="menu-title-parent">
                <div className="help9">
                  <div className="help10">
                    <div className="help11">
                      <img
                        className="iconlylightsearch"
                        alt=""
                        src="/info-square.svg"
                      />
                    </div>
                    <div className="help12">Elements</div>
                  </div>
                </div>
                <div className="schedule-parent">
                  <div className="leaderboard">
                    <div className="messages28">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkwallet@2x.png"
                        />
                        <div className="this-week">Components</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages30">
                      <div className="help">
                        <img
                          className="iconlybulkcategory"
                          alt=""
                          src="/iconlybulkdocument@2x.png"
                        />
                        <div className="this-week">Form</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages8">
                      <div className="help">
                        <img
                          className="iconlylightsearch"
                          alt=""
                          src="/iconlybulksetting.svg"
                        />
                        <div className="this-week">Table</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                  <div className="leaderboard">
                    <div className="messages34">
                      <div className="help">
                        <img
                          className="messages-child"
                          alt=""
                          src="/frame-35287.svg"
                        />
                        <div className="this-week">Icons</div>
                      </div>
                      <div className="notification">
                        <div className="number-wrapper">
                          <div className="number">3</div>
                        </div>
                      </div>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="main-child" />
            </div>
            <div className="logo-wrapper">
              <img className="logo-icon" alt="" src="/logo@2x.png" />
            </div>
          </div>
          <img className="drag-in-out" alt="" src="/drag-in--out@2x.png" />
        </div>
      </div>
      <img className="frame-icon7" alt="" src="/frame7.svg" />
      <div className="diferecias">
        <div className="acompaamiento" data-animate-on-scroll>
          <div className="acompaamiento-child" />
          <b className="acompaamiento-integral-a-container">
            <p className="somos-una-agencia-de-seguros-o">
              Acompañamiento integral a las pequeñas empresas
            </p>
          </b>
          <div className="icon1">
            <div className="icon-child" />
            <div className="protect-cloud" />
          </div>
        </div>
        <div className="dinamismo" data-animate-on-scroll>
          <div className="acompaamiento-child" />
          <div className="icon2">
            <div className="icon-child" />
          </div>
          <b className="dinamismo-segn-tu-container">
            <p className="somos-una-agencia-de-seguros-o">Dinamismo según</p>
            <p className="somos-una-agencia-de-seguros-o">tu necesidad</p>
          </b>
        </div>
        <div className="cercana" data-animate-on-scroll>
          <div className="acompaamiento-child" />
          <b className="cercana-y-acompaamiento-container">
            <p className="somos-una-agencia-de-seguros-o">Cercanía y</p>
            <p className="somos-una-agencia-de-seguros-o">Acompañamiento</p>
          </b>
          <img className="icon3" alt="" src="/icon.svg" />
        </div>
        <img className="vector-icon2" alt="" src="/vector2.svg" />
        <img className="vector-icon3" alt="" src="/vector3.svg" />
        <img className="vector-icon4" alt="" src="/vector4.svg" />
        <img className="vector-icon5" alt="" src="/vector5.svg" />
        <img className="vector-icon6" alt="" src="/vector6.svg" />
        <img className="vector-icon7" alt="" src="/vector7.svg" />
        <img className="vector-icon8" alt="" src="/vector8.svg" />
        <div className="qu-nos-diferencia">¿Qué nos diferencia?</div>
      </div>
      <img className="infinity-onepage-inner" alt="" src="/group-33626.svg" />
      <div className="que-hacemos">
        <div className="qu-hacemos-parent" data-animate-on-scroll>
          <div className="qu-hacemos">¿Qué hacemos?</div>
          <div className="nos-encargamos-de-container">
            <p className="nos-encargamos-de">Nos encargamos de tu seguridad.</p>
            <p className="somos-una-agencia-de-seguros-o">&nbsp;</p>
            <p className="somos-una-agencia-de-seguros-o">
              Gestionamos eficientemente los programas de seguros de nuestros
              clientes, a través de un asesoramiento profesional y según sus
              necesidades de protección.
            </p>
          </div>
        </div>
        <img
          className="que-hacemos-child"
          alt=""
          src="/rectangle-173@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div className="nuestro-adn">
        <div className="group-parent17">
          <div className="vector-parent">
            <img
              className="vector-icon9"
              alt=""
              src="/vector9.svg"
              data-animate-on-scroll
            />
            <div className="trabajo-en-equipo-container">
              <p className="somos-una-agencia-de-seguros-o">TRABAJO</p>
              <p className="somos-una-agencia-de-seguros-o">EN EQUIPO</p>
            </div>
          </div>
          <div className="servicio-parent" data-animate-on-scroll>
            <div className="servicio">SERVICIO</div>
            <img className="vector-icon10" alt="" src="/vector10.svg" />
          </div>
          <div className="vector-group">
            <img
              className="vector-icon9"
              alt=""
              src="/vector11.svg"
              data-animate-on-scroll
            />
            <div className="respeto">RESPETO</div>
          </div>
        </div>
        <div className="nos-genera-satisfaccin-container">
          <p className="somos-una-agencia-de-seguros-o">
            <span>{`Nos genera satisfacción y felicidad saber que logramos encontrarle la solución a los problemas del otro, `}</span>
            <span className="gestionar-eficientemente-los">
              logramos cambiarle la vida positivamente a las personas.
            </span>
          </p>
          <p className="somos-una-agencia-de-seguros-o">&nbsp;</p>
          <p className="somos-una-agencia-de-seguros-o">
            En nuestra relación con los clientes tratamos que se les contagie
            nuestro ADN, nuestra razón de ser que nos mueve, nos inspira y nos
            abre puertas para transformar la vida de los demás.
          </p>
        </div>
        <div className="nuestro-adn1">Nuestro ADN</div>
      </div>
      <img className="image-icon3" alt="" src="/image@2x.png" />
    </div>
  );
};

export default INFINITYONEPAGE;
