const express = require("express");
const submissionController = require("../controllers/submissionController");
const asyncHandler = require("../middleware/asyncHandler");
const validateBody = require("../middleware/validateBody");
const {
  contactSubmissionRules,
  donationSubmissionRules,
<<<<<<< HEAD
  joinUsSubmissionRules,
  talentShowSubmissionRules,
  ngoContactSubmissionRules
} = require("../validators/submissionValidators");
const eventController = require("../controllers/eventController");
=======
  joinUsSubmissionRules
} = require("../validators/submissionValidators");
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753

const router = express.Router();

router.post(
  "/forms/contact",
  validateBody(contactSubmissionRules),
  asyncHandler(submissionController.createContactSubmission)
);

router.post(
  "/forms/join-us",
  validateBody(joinUsSubmissionRules),
  asyncHandler(submissionController.createJoinUsSubmission)
);

router.post(
<<<<<<< HEAD
  "/forms/talent-show",
  validateBody(talentShowSubmissionRules),
  asyncHandler(submissionController.createTalentShowSubmission)
);

router.post(
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
  "/forms/donation",
  validateBody(donationSubmissionRules),
  asyncHandler(submissionController.createDonationSubmission)
);

<<<<<<< HEAD
router.post(
  "/forms/ngo-contact",
  validateBody(ngoContactSubmissionRules),
  asyncHandler(submissionController.createNgoContactSubmission)
);

router.get("/submissions", asyncHandler(submissionController.getSubmissions));
router.get("/events", asyncHandler(eventController.listEvents));
=======
router.get("/submissions", asyncHandler(submissionController.getSubmissions));
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753

module.exports = router;
