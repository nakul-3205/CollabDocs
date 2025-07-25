import mongoose, { Schema, Document, Model } from 'mongoose';

export type AccessRole = 'read' | 'edit';

export interface IDocument  {
  title: string;
  ownerId: string;
  access: {
    userId: string;
    role: AccessRole;
  }[];
  snapshot: Buffer | null;
  createdAt: Date;
  updatedAt: Date;
}

const DocumentSchema = new Schema<IDocument>(
  {
    title: {
      type: String,
      required: true,
      default: 'Untitled Document',
    },
    ownerId: {
      type: String,
      required: true,
    },
    access: [
      {
        userId: { type: String, required: true },
        role: {
          type: String,
          enum: ['read', 'edit'],
          default: 'edit',
        },
      },
    ],
    snapshot: {
      type: Buffer,
      default: null,
    },
  },
  { timestamps: true }
);

const DocumentModel: Model<IDocument> =
  mongoose.models.Document || mongoose.model<IDocument>('Document', DocumentSchema);

export default DocumentModel;
