import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"


function BlogPage() {
  return <div className={styles.container}>

    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>

  </div>;
}

export default BlogPage;