import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Moumendev</div>
      <div className={styles.text}>
        MoumenMA creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
