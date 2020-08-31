import Head from "next/head";
import styles from "../styles/Home.module.css";

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

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Rancagua BBQ &rarr;</h3>
            <p>Queso, orégano, pepperoni, pollo, tocino y salsa barbacoa.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Americana &rarr;</h3>
            <p>Queso, orégano, tocino, pollo, salame y choricillo.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Cuatro Carnes &rarr;</h3>
            <p>Queso, orégano, pepperoni, lomo, salame y choricillo</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Hawaiana &rarr;</h3>
            <p>Extra queso mozzarella, gauda, orégano, piña y jamón.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Cuatro Queso &rarr;</h3>
            <p>
              Salsa de tomate, orégano, queso mozzarella, gauda, edam y queso
              azul.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Italiana &rarr;</h3>
            <p>Queso, orégano, aceitunas negras, champiñón y salame.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Napolitana &rarr;</h3>
            <p>Extra queso mozzarella, gauda, orégano, tomate y jamón.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Doble Pepperoni &rarr;</h3>
            <p>Queso mozzarella, gauda, orégano y doble pepperoni.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Vegetariana &rarr;</h3>
            <p>
              Queso, orégano, pimiento verde, tomate, aceitunas negras y
              champiñón.
            </p>
          </a>

          <a href="" className={styles.card}>
            <h3>Española &rarr;</h3>
            <p>
              Queso, orégano, pimiento verde, tomate, lomito de cerdo y
              choricillo
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a className={styles.logo}>Powered by FullPizzas - Rancagua</a>
      </footer>
    </div>
  );
}
