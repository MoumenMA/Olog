import Image from "next/image";
import styles from "./singlePost.module.css";
function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/21915598/pexels-photo-21915598/free-photo-of-ville-art-monument-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.avatar}>
          <Image
            src="https://images.pexels.com/photos/21915598/pexels-photo-21915598/free-photo-of-ville-art-monument-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Author</span>
          <span className={styles.detailValue}>Hamid Elok</span>
        </div>
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailValue}>01.05.2024</span>
        </div>
      </div>
      <div className={styles.content}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ut
        aliquam aperiam iusto error corrupti aspernatur a minus tenetur. Nemo
        atque molestiae, modi dolor error voluptatibus unde maiores a quam!
      </div>
    </div>
  );
}
("");
export default SinglePostPage;
