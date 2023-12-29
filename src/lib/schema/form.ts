import mongoose from 'mongoose';
const { Schema } = mongoose;

const formSchema = new Schema({
  fname: String, // String is shorthand for {type: String}
  lname: String,
  email: String,
  message: String,
});

export default mongoose.models.formdatas || mongoose.model('formdatas', formSchema);