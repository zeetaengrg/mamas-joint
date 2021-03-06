import Image from "next/image";
import Link from "next/link";
import styles from "./CategoryItems.module.scss";

const CategoryItems = ({ tab, setTab }) => {
  return (
    <div className={styles.container}>
      <section className={styles.container__subtitle}>
        <p>Faster Food Delivery Service</p>
        <Image
          src="/images/delivery.png"
          alt="Delivery"
          width={25}
          height={25}
        />
      </section>
      <section className={styles.container__info}>
        <h1>Get Delivered while it is still hot.</h1>
        <p>
          Bring together your discussions memberships and content. Start your
          7-day free trial.
        </p>
        <div className={styles.info__btn}>
          <Link href="/menu" passHref>
            Get Started
          </Link>
        </div>
      </section>
      <section className={styles.container__img}>
        <figure className={styles.img__leaf}>
          <Image src="/images/leaf2.png" alt="Leaf" height={35} width={60} />
        </figure>
        <figure className={styles.img__beans}>
          <Image src="/images/beans.png" alt="Beans" width={180} height={100} />
        </figure>
        <figure className={styles.img__coffee}>
          <Image
            src="/images/coffee.png"
            alt="Coffee"
            width={180}
            height={180}
          />
        </figure>
        <figure className={styles.img__decor}>
          <Image src="/images/decor.png" alt="Decor" width={70} height={70} />
        </figure>
      </section>
    </div>
  );
};

export default CategoryItems;
