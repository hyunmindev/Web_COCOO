import { model, Schema, Types } from 'mongoose';

import { NotifyType } from 'src/types';
import { Validate } from 'src/utils';

const notifySchema = new Schema<NotifyType>(
  {
    type: {
      type: String,
      enum: ['postComment', 'postLike', 'commentLike', 'follow'],
      required: true,
    },
    userID: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      validate: Validate.userObjectID,
      index: true,
    },
    senderID: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
      validate: Validate.userObjectID,
      index: true,
    },
    postID: { type: Types.ObjectId, ref: 'Post', validate: Validate.postObjectID },
  },
  { versionKey: false, timestamps: { createdAt: true, updatedAt: false } },
);

export default model<NotifyType>('Notify', notifySchema);
