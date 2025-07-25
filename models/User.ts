// models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  image: string;
}

const UserSchema = new Schema<IUser>(
  {
    clerkId: { type: String, required: true, unique: true },
    name: String,
    email: String,
    image: String,
  },
  { timestamps: true }
);

const UserModel: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default UserModel;
