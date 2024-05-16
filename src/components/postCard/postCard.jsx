import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/21915598/pexels-photo-21915598/free-photo-of-ville-art-monument-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.05.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque et
          numquam veritatis hic, facere ad laborum modi? Odio dolores earum amet
          animi mollitia repellat tempore, sit nihil non labore expedita!
        </p>
        <Link className={styles.link} href="/blog/post"> READ MORE</Link>
      </div>
    </div>
  );
};

export default PostCard;
