const contactSubmissionRules = [
  { field: "name", required: true },
  { field: "email", required: true },
  { field: "phone", required: true },
  { field: "subject", required: true },
  { field: "message", required: true }
];

const joinUsSubmissionRules = [
  { field: "name", required: true },
<<<<<<< HEAD
  { field: "stageName", required: false },
  { field: "age", required: true },
  { field: "gender", required: true },
  { field: "city", required: true },
  { field: "phone", required: true },
  { field: "email", required: true },
  { field: "talentCategory", required: true },
  { field: "languagePreference", required: true },
  { field: "videoLink", required: true },
  { field: "shortIntroduction", required: true }
];

const talentShowSubmissionRules = [
  { field: "name", required: true },
  { field: "stageName", required: false },
  { field: "age", required: true },
  { field: "gender", required: true },
  { field: "city", required: true },
  { field: "phone", required: true },
  { field: "email", required: true },
  { field: "talentCategory", required: true },
  { field: "languagePreference", required: true },
  { field: "videoLink", required: true },
  { field: "shortIntroduction", required: true }
=======
  { field: "email", required: true },
  { field: "phone", required: true },
  { field: "age", required: true },
  { field: "city", required: true },
  { field: "interest", required: true }
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
];

const donationSubmissionRules = [
  { field: "name", required: true },
  { field: "email", required: true },
  { field: "phone", required: true },
  { field: "amount", required: true },
  { field: "purpose", required: true }
];

<<<<<<< HEAD
const ngoContactSubmissionRules = [
  { field: "name", required: true },
  { field: "phone", required: true },
  { field: "email", required: true },
  { field: "city", required: true },
  { field: "helpType", required: true },
  { field: "message", required: true }
];

module.exports = {
  contactSubmissionRules,
  joinUsSubmissionRules,
  talentShowSubmissionRules,
  donationSubmissionRules,
  ngoContactSubmissionRules
=======
module.exports = {
  contactSubmissionRules,
  joinUsSubmissionRules,
  donationSubmissionRules
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
};
