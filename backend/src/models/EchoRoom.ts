import { Schema, model, Types } from 'mongoose';

import { EchoRoomType, MessageType } from 'src/types';

const messageSchema = new Schema<MessageType>(
  {
    userID: { type: Types.ObjectId, ref: 'User' },
    content: { type: String, required: true },
    isRead: { type: Boolean, default: false, required: true },
  },
  { timestamps: true },
);

const echoRoomSchema = new Schema<EchoRoomType>(
  {
    users: [{ type: Types.ObjectId, ref: 'User', required: true }],
    messages: [messageSchema],
  },
  { versionKey: false, timestamps: { createdAt: false, updatedAt: true } },
);

export default model<EchoRoomType>('EchoRoom', echoRoomSchema);
