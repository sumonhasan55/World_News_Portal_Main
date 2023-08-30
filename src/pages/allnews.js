import AllNews from "@/components/UI/AllNews";
import { Button } from "antd";
import Link from "next/link";

const AllNewsPage = ({ allNews }) => {
    
    return (
      <>
      <h1
      style={{
        textAlign:"center"
      }}
      >WellCome To Visit Our All News Page</h1>
        <AllNews allNews={allNews} />
        <Link href="/">
        <Button>Back To Home</Button>
      </Link>
      </>
    );
  };
  export default AllNewsPage;
  export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/news")
    const data = await res.json();
    console.log(data)
    return {
      props: {
        allNews: data.data,
      },
    }
  }