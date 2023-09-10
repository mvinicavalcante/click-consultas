import "./styles.css";
import { useParams } from 'react-router-dom';

import Header from "../../../../components/header";
import Footer from "../../../../components/footer";
import ReviewBox from "../../../../components/reviewBox";

const Review = () => {
  const { id } = useParams();
  const userId = sessionStorage.doctorId ?? sessionStorage.patientId;

  return (
    <>
      <Header />
      <div className="review-page">
        <ReviewBox patientId={userId} appointment={id} />
      </div>
      <footer className="fixed-bottom-review fixed-bottom">
        <Footer />
      </footer>
    </>
  );
};

export default Review;