import "./styles.css";

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import ReviewBox from "../../../../components/reviewBox";

const Review = () => {

    return(
        <>
        <Header />
            <div className="review-page">
                <ReviewBox />
            </div>
        <footer className="fixed-bottom-review fixed-bottom">
            <Footer />
        </footer>
        </>
    );
};

export default Review;