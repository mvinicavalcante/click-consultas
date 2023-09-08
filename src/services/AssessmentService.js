import api from "./api";

const AssessmentService = {
  getAllReviewsByRecordId(recordId) {
    const listReviews = api.get("/avaliacao/registro/" + recordId);
    return listReviews;
  },
};

export default AssessmentService;
