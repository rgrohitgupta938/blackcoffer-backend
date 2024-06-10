const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  end_year: { type: Number },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: Number },
  impact: { type: Number },
  added: { type: Date, required: true },
  published: { type: Date },
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
