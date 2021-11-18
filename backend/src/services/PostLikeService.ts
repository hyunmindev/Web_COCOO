import { PostLike, Post } from 'src/models';
import { SELECT } from 'src/utils';
import { NotifyService } from 'src/services';

class PostLikeService {
  async createPostLike(userID: string, postID: string) {
    const upsertLike = await PostLike.updateOne(
      { userID, postID },
      { $setOnInsert: { userID, postID } },
      { upsert: true, runValidators: true, new: true },
    );
    const post = await Post.findOne({ _id: postID }, 'userID -_id');
    NotifyService.createNotify('postLike', userID, post?.userID, postID);
    if (!upsertLike.upsertedId) {
      const likeID = await PostLike.findOne({ userID, postID }, '_id').lean();
      return likeID!._id;
    }
    return upsertLike.upsertedId;
  }

  async findPostLikes(postID: string) {
    const likes = await PostLike.find({ postID }, '-postID').populate('user', SELECT.USER).lean();
    return likes.map((like) => {
      const newLike = { ...like };
      delete newLike.userID;
      return newLike;
    });
  }

  async removePostLike(userID: string, postID: string, likeID: string) {
    return PostLike.deleteOne({ _id: likeID, userID, postID });
  }

  async removePostLikes(postID: string) {
    return PostLike.deleteMany({ postID });
  }
}

export default new PostLikeService();
