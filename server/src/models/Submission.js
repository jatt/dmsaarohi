const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    formType: {
      type: String,
<<<<<<< HEAD
      enum: ["contact", "join-us", "donation", "ngo-contact", "talent-show"],
=======
      enum: ["contact", "join-us", "donation"],
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
      required: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
<<<<<<< HEAD
    stageName: {
      type: String,
      trim: true,
      default: ""
    },
    gender: {
      type: String,
      trim: true,
      default: ""
    },
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
    age: {
      type: String,
      trim: true,
      default: ""
    },
    subject: {
      type: String,
      trim: true,
      default: ""
    },
    city: {
      type: String,
      trim: true,
      default: ""
    },
    interest: {
      type: String,
      trim: true,
      default: ""
    },
<<<<<<< HEAD
    talentCategory: {
      type: String,
      trim: true,
      default: ""
    },
    languagePreference: {
      type: String,
      trim: true,
      default: ""
    },
    videoLink: {
      type: String,
      trim: true,
      default: ""
    },
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
    experience: {
      type: String,
      trim: true,
      default: ""
    },
    amount: {
      type: String,
      trim: true,
      default: ""
    },
    purpose: {
      type: String,
      trim: true,
      default: ""
    },
<<<<<<< HEAD
    helpType: {
      type: String,
      trim: true,
      default: ""
    },
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
    message: {
      type: String,
      trim: true,
      default: ""
<<<<<<< HEAD
    },
    shortIntroduction: {
      type: String,
      trim: true,
      default: ""
=======
>>>>>>> ab1631779d8b4110d9de3f2582276f9e8a1e1753
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.models.Submission || mongoose.model("Submission", submissionSchema);
