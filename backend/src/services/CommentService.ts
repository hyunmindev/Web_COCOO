import { Types } from 'mongoose';

import { Post } from 'src/models';

export default class CommentService {
  static async createComment(data: any, postId: string) {
    return Post.findOneAndUpdate(
      {
        _id: postId,
      },
      { $push: { comments: data } },
      { new: true },
    );
  }

  static async createCommentLike(data: any, postId: string, commentId: string) {
    return Post.findOneAndUpdate(
      {
        _id: postId,
        comments: { $elemMatch: { _id: commentId } },
      },
      { $push: { 'comments.$.likes': { userID: data } } },
      { new: true },
    );
  }

  static async createPostLike(data: any, postId: string) {
    return Post.findOneAndUpdate(
      {
        _id: postId,
      },
      { $push: { likes: { userID: data } } },
      { new: true },
    );
  }

  static async removePostLike(postId: string, likeId: string) {
    return Post.findOneAndUpdate(
      {
        _id: postId,
        'likes._id': likeId,
      },
      { $pull: { likes: { _id: likeId } } },
      { new: true },
    );
  }
}
