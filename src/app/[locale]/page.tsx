import { useTranslations } from "next-intl";
import styles from "./page.module.scss";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <main>
      {/******** Banner ********/}
      <section id="banner" className={styles.banner}>
        <div>
          <h1>Clases de apoyo con tutores especializados para IB y IGCSE</h1>
          <p>
            Un mundo de <strong>aprendizaje a tu alcance</strong>. Exploraciones
            guiadas y preparación para exámenes en{" "}
            <strong>Mathematics, Biology, Physics</strong> y más, ¡sin importar
            tu ubicación!
          </p>
          <a href="/">Reserva ahora</a>
        </div>
      </section>

      {/******** Book ********/}
      <section id="classes" className={styles.book_cont}>
        <div className={styles.book_wrapper}>
          <h2 className={styles.book_title}>Clases IB y IGCSE</h2>
          <Image src="/images/book.png" alt="book" width={641} height={292} />
          <div className={styles.book_text}>
            <span>¡Elige tu plan ideal!</span>
            <p>Clases individuales, grupales, y paquetes con descuento</p>
          </div>
        </div>
      </section>

      {/******** Cards ********/}
      <div className={styles.cards_cont}>
        <div className={styles.classes_cards}>
          <article className={styles.left_card + " " + styles.card}>
            <h3 className={styles.card_title}>Clases individuales</h3>
            <ul>
              <li>
                <Image
                  src="/images/icons/check.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <div>
                  <h4>A tu ritmo</h4>
                  <p>
                    Diseña un plan de estudio personalizado y avanza según tus
                    metas.
                  </p>
                </div>
              </li>
              <li>
                <Image
                  src="/images/icons/check.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <div>
                  <h4>Atención individualizada</h4>
                  <p>
                    Recibe orientación y retroalimentación enfocada en tus
                    necesidades.
                  </p>
                </div>
              </li>
            </ul>
            <p className={styles.price}>
              <span>€60</span>
              /h
            </p>
            <a className={styles.btn} href="#">
              Consultar
            </a>
          </article>
          <article className={styles.right_card + " " + styles.card}>
            <h3 className={styles.card_title}>Clases grupales</h3>
            <span className={styles.card_subtitle}>(3 personas o más)</span>
            <ul>
              <li>
                <Image
                  src="/images/icons/white_check.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <div>
                  <h4>Aprendizaje interactivo</h4>
                  <p>Participa en dinámicas y debates con otros estudiantes.</p>
                </div>
              </li>
              <li>
                <Image
                  src="/images/icons/white_check.png"
                  alt=""
                  width={24}
                  height={24}
                />
                <div>
                  <h4>Descuento por amistad</h4>
                  <p>
                    ¡Trae a dos amigos y todos obtendrán un precio especial!
                  </p>
                </div>
              </li>
            </ul>
            <p className={styles.price}>
              <span>€40</span>
              /h por estudiante
            </p>
            <a className={styles.btn} href="#">
              Consultar
            </a>
          </article>
        </div>
        <article className={styles.statue_card_1}>
          <div>
            <span>3x2</span>
            <p>abonando por anticipado</p>
          </div>
        </article>
        <article className={styles.statue_card_2}>
          <Image
            src="/images/card_statue_2.png"
            alt="statue"
            width={416}
            height={401}
          />
          <div className={styles.card_text_wrapper}>
            <div>
              <h3>EE & IA Coaching</h3>
              <Image
                src="/images/statue_2_decoration.png"
                alt="decoration"
                width={216}
                height={21}
              />
              <p>
                Envía tus proyectos, recibe feedback experto y destaca en tus
                evaluaciones.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/******** About ********/}
      <section id="about" className={styles.about_cont}>
        <Image src="/images/about.png" alt="about" width={389} height={343} />
        <div className={styles.about_text}>
          <span>¿QUIÉNES SOMOS?</span>
          <h3>Sobre Learning Spark</h3>
          <div className={styles.about_description}>
            <p>
              Entendemos lo desafiante que puede ser prepararse para los
              exámenes internacionales. Queremos asegurarte que estamos aquí
              para guiarte hacia tu mejor versión, con un apoyo cálido y
              constante.
            </p>
            <p>
              Nuestro equipo altamente especializado te acompañará en un{" "}
              <strong>ambiente bilingüe</strong>, enfocado en los{" "}
              <strong>exámenes IB y IGCSE</strong>. Con las primeras tutorías
              diseñadas exclusivamente para estos programas, te invitamos a un
              viaje de aprendizaje donde no estarás solo. ¡Tu éxito y confianza
              son nuestros valores principales!
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contact}>
        <div>
          <h2>Contáctanos</h2>
          <p>
            ¿Tienes dudas o consultas? ¿No ves la materia que quieres? Envía tu
            mensaje que te respondemos muy pronto.
          </p>
          <ul>
            <li>
              <a href="#">contacto@learning-spark.com</a>
            </li>
            <li>
              <a href="#">(+54 9)11-5995-6114</a>
            </li>
          </ul>
        </div>
        <Image
          src="/images/contact.png"
          alt="contact"
          width={811}
          height={399}
        />
      </section>
    </main>
  );
}
