import { Button, Card, Col, Image, Row } from "antd";
import {
    CalendarOutlined,
    CommentOutlined,
    ArrowRightOutlined,
    CodeOutlined,
    ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";


const AllNews = ({ allNews}) => {
    const { Meta } = Card;
    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "50px",
                    margin: "30px 0px"
                }}
            >
                #TODAY HIGHLIGHT
            </h1>
            <Row
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}>
                {
                    allNews?.map((news) => (
                        <Col key={news.id} className="gutter-row" span={6}>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                }}
                                cover={
                                    <Image
                                        src={news?.image_url}
                                        width={237}
                                        height={200}
                                        responsive
                                        alt="News Image"
                                    />}
                            >
                                <Meta title={news?.title} description="www.instagram.com" />
                                <div className="line"
                                    style={{
                                        height: "5px",
                                        margin: "20px 0",
                                        background: "#000",
                                        width: "100%"
                                    }}>
                                </div>
                                <p
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        width: "100%",
                                        color: "gray",
                                        margin: "10px 0px",
                                        fontSize: "12px"
                                    }}>
                                    <span>
                                        <CalendarOutlined />{news?.release_date}
                                    </span>
                                    <span>
                                        <CommentOutlined />{news?.comment_count}COMMENTS
                                    </span>
                                    <span>
                                        <ProfileOutlined />
                                    </span>
                                </p>
                                <p
                                    style={{
                                        fontSize: "15px"
                                    }}>
                                    {news?.description.length > 100
                                        ? news.description.slice(0, 70) + "..." :
                                        news?.description
                                    }
                                </p>
                               <Link href={`/news/${news?.id}`}> 
                               <Button
                                    style={{
                                        fontSize: "15px",
                                        marginTop: "20px",
                                        backgroundColor: "black",
                                        color: "white",
                                        width: "100%",
                                        padding: "2px 5px",
                                        fontWeight: "300",
                                        latterSpacing: "3px",
                                        textAlign: "center"
                                    }}>
                                    Keep Reading<ArrowRightOutlined />
                                </Button>
                               </Link>

                            </Card>

                        </Col>

                    ))
                }

            </Row>

        </>
    );
};

export default AllNews;