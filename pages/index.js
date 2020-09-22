import Head from "next/head";
import styles from "../styles/Home.module.css";
import RancaguaBBQ from "../pages/src/img/RancaguaBBQ.jpg";
import Americana from "../pages/src/img/Americana.jpg";
import CuatroCarnes from "../pages/src/img/CuatroCarnes.jpg";
import Hawaiana from "../pages/src/img/Hawaiana.jpg";
import CuatroQueso from "../pages/src/img/CuatroQueso.jpg";
import Italiana from "../pages/src/img/Italiana.jpg";
import Napolitana from "../pages/src/img/Napolitana.jpg";
import SuperPepperoni from "../pages/src/img/SuperPepperoni.jpg";
import Vegetariana from "../pages/src/img/Vegetariana.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FullPizza - Rancagua</title>
        <link />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a{" "}
          <a href="https://www.ubereats.com/rancagua/food-delivery/fullpizzas/5CmH35u_RaWJ0ZEidaBRfg?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlJhbmNhZ3VhJTIyJTJDJTIycmVmZXJlbmNlJTIyJTNBJTIyQ2hJSjB4UHZ2V2REWTVZUjkxU3Rab1A4YzlrJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQS0zNC4xNzAxMzI0MDAwMDAwMSUyQyUyMmxvbmdpdHVkZSUyMiUzQS03MC43NDA2MjU5JTdE">
            FullPizzas!
          </a>
        </h1>

        <p className={styles.description}>La casa de la Super Goloza</p>
        <a
          className={styles.button}
          href="https://wa.me/message/CTYZQI5JZWJTO1"
        >
          Envia un WhatsApp &rarr;
        </a>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <img src={RancaguaBBQ} alt="RancaguaBBQ" className={styles.img} />
            <h3>Rancagua BBQ </h3>
            <p>Queso, orégano, pepperoni, pollo, tocino y salsa barbacoa.</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Americana} alt="Americana" className={styles.img} />
            <h3>Americana</h3>
            <p>Queso, orégano, tocino, pollo, salame y choricillo.</p>
          </a>

          <a href="" className={styles.card}>
            <img src={CuatroCarnes} alt="CuatroCarnes" className={styles.img} />
            <h3>Cuatro Carnes</h3>
            <p>Queso, orégano, pepperoni, lomo, salame y choricillo</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Hawaiana} alt="Hawaiana" className={styles.img} />
            <h3>Hawaiana</h3>
            <p>Extra queso mozzarella, gauda, orégano, piña y jamón.</p>
          </a>

          <a href="" className={styles.card}>
            <img src={CuatroQueso} alt="CuatroQueso" className={styles.img} />
            <h3>Cuatro Queso</h3>
            <p>
              Salsa de tomate, orégano, queso mozzarella, gauda, edam y queso
              azul.
            </p>
          </a>

          <a href="" className={styles.card}>
            <img src={Italiana} alt="Italiana" className={styles.img} />
            <h3>Italiana</h3>
            <p>Queso, orégano, aceitunas negras, champiñón y salame.</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Napolitana} alt="Napolitana" className={styles.img} />
            <h3>Napolitana</h3>
            <p>Extra queso mozzarella, gauda, orégano, tomate y jamón.</p>
          </a>

          <a href="" className={styles.card}>
            <img
              src={SuperPepperoni}
              alt="SuperPepperoni"
              className={styles.img}
            />
            <h3>Super Pepperoni</h3>
            <p>Queso mozzarella, gauda, orégano y doble pepperoni.</p>
          </a>

          <a href="" className={styles.card}>
            <img src={Vegetariana} alt="Vegetariana" className={styles.img} />
            <h3>Vegetariana</h3>
            <p>
              Queso, orégano, pimiento verde, tomate, aceitunas negras y
              champiñón.
            </p>
          </a>

          <a href="" className={styles.card}>
            <img src={CuatroCarnes} alt="CuatroCarnes" className={styles.img} />
            <h3>Española</h3>
            <p>
              Queso, orégano, pimiento verde, tomate, lomito de cerdo y
              choricillo
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>Beta - Sitio web de FullPizzas - Rancagua</a>
      </footer>
    </div>
  );
}
