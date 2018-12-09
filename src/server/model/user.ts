import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: { type: String, required: true, max: 100 },
});

export const User = mongoose.model('User', UserSchema);