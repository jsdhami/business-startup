import mongoose from "mongoose";
const { Schema } = mongoose;

const projectSchema = new Schema({
    title: String,
    description: String,
    image: String,
    link: String,
});

export default mongoose.models.projects || mongoose.model('projects', projectSchema);