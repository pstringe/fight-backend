import mongoose from 'mongoose';

const opponentSchema = mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('Opponents', opponentSchema);