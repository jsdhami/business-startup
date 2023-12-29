import mongoose from 'mongoose';
const { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    href: String,
    description: String,
    date: String,
    datetime: String,
    category: { 
        title: String, 
        href: String },
    author: {
      name: String,
      role: String,
      href: String,
      imageUrl: String},
});

export default mongoose.models.posts || mongoose.model('posts', postSchema);