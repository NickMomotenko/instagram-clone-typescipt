import React, { useState } from "react";

import { useDispatch } from "react-redux";

import {
  PostWrapp,
  PostImage,
  PostRow,
  PostButton,
  PostLikedText,
} from "./PostStyles";

import { DISLIKE_POST, LIKE_POST, SAVE_POST } from "../../redux/posts/types";
import { UPDATE_USER } from "../../redux/user/types";

import { useText } from "../../hooks/useText";
import { useActive } from "../../hooks/useActive";

import Avatar from "../Avatar";
import Text from "../Text";
import Button from "../Button";
import { Row, Block } from "../Layout";
import Video from "../Video";
import TextOpenOrClose from "../TextOpenOrClose";

import PostComments from "./PostComments";
import PostOptions from "./PostOptions";

import CustomSlider from "../../components/CustomSlider";

import shareIcon from "../../assets/icons/1.svg";
import saveIcon from "../../assets/icons/2.svg";
import commentIcon from "../../assets/icons/3.svg";
import likeIcon from "../../assets/icons/4.svg";

import dots from "../../assets/icons/dots.svg";
import { useClickOutside } from "../../hooks/useClickOutside";

const POST_TYPES = {
  VIDEO: "video",
};

type PostProps = {
  post: any;
  authUser: any;
  isMyPost?: boolean;
  userId?: number | string;
  as?: string | any;
};

const Post: React.FC<PostProps> = ({
  post,
  authUser,
  isMyPost,
  userId,
  ...props
}) => {
  const [like, setLike] = useState(false);
  const [share, setShare] = useState(false);
  const [save, setSave] = useState(false);

  const dispath = useDispatch();

  const commentRef = React.useRef(null);

  let { text, videoUrl, photo, date, comments, liked } = post;

  const postText = useText();
  const isCommentsBarActive = useActive();
  const isOptionsBarActive = useActive();

  const isSlider = photo?.length > 1;

  const lastCommentatorName = liked[liked.length - 1]?.user?.fullname;
  const likedTextWithCommentators =
    liked?.length > 1
      ? `${lastCommentatorName} and ${liked?.length - 1} others`
      : `${lastCommentatorName}`;

  const commentText = `View all comments (${comments?.length})`;

  const user = post.user ? post.user : authUser.user;

  const likePost = (id: number | string) => {
    if (!like) {
      setLike(true);
      dispath({ type: LIKE_POST, id });
    } else {
      setLike(false);
      dispath({ type: DISLIKE_POST, id });
    }
  };

  const commentPost = () => {
    isCommentsBarActive.setIsActive(true);
  };

  const savePost = (post: any) => {
    if (!save) {
      setSave(true);

      if (!authUser.saved.includes(post)) {
        const updatedUserData = {
          ...authUser,
          saved: [...authUser.saved, post],
        };

        dispath({ type: UPDATE_USER, updatedUserData });
        // dispath({ type: SAVE_POST });
      }
    } else {
      setSave(false);

      const updatedUserSaved = authUser.saved.filter(
        (savedPost: any) => savedPost.id !== post.id
      );

      const updatedUserData = { ...authUser, saved: [...updatedUserSaved] };

      dispath({ type: UPDATE_USER, updatedUserData });
    }
  };

  useClickOutside(commentRef, () => isCommentsBarActive.setIsActive(false));

  return (
    <PostWrapp ref={commentRef} {...props}>
      <PostRow style={{ padding: "0 15px" }}>
        <Block style={{ marginRight: 11 }}>
          <Avatar
            as="button"
            url={user?.avatar}
            fullname={user?.fullname}
            size={40}
          />
        </Block>
        <Block>
          <Text text={user?.fullname} $bold />
          <Text text={user?.city} color="#76777E" />
        </Block>
        <Button
          icon={dots}
          style={{ marginLeft: "auto" }}
          onClick={() => isOptionsBarActive.setIsActive(true)}
        />
      </PostRow>
      <PostRow>
        {post.postType === POST_TYPES.VIDEO && <Video url={videoUrl} />}
        {isSlider ? <CustomSlider slides={photo} /> : <PostImage src={photo} />}
      </PostRow>
      <Block style={{ padding: "0 15px" }}>
        <PostRow>
          <PostButton
            icon={likeIcon}
            active={like}
            onClick={() => likePost(post.id)}
          />
          <PostButton icon={commentIcon} onClick={commentPost} />
          <PostButton
            icon={shareIcon}
            active={share}
            onClick={() => setShare(!share)}
          />
          <PostButton
            icon={saveIcon}
            active={save}
            onClick={() => savePost(post)}
            style={{ marginLeft: "auto" }}
          />
        </PostRow>
        {liked?.length !== 0 && (
          <PostRow $center $btw>
            <Row $center style={{ marginRight: 10 }}>
              <PostLikedText>
                Liked by{" "}
                <Text
                  text={`${likedTextWithCommentators}`}
                  $bold
                  style={{ fontSize: 13, display: "inline-block" }}
                />
              </PostLikedText>
            </Row>
          </PostRow>
        )}
        <Block>
          <TextOpenOrClose
            text={text}
            $boolFlag={postText.isOpen}
            buttonText={postText.isOpen ? "(Close)" : "(More)"}
            buttonTextColor="#3737d8"
            buttonClick={() => postText.setIsOpen(!postText.isOpen)}
          />
        </Block>
        <PostRow>
          <Text
            as="a"
            href="#"
            text={commentText}
            color="#76777E"
            $bold
            style={{ fontSize: 12 }}
            onClick={() => isCommentsBarActive.setIsActive(true)}
          />
        </PostRow>
        <PostRow>
          <Text text={date} color="#76777E" style={{ fontSize: 12 }} />
        </PostRow>
      </Block>
      <PostComments
        post={post}
        isCommentsBarActive={isCommentsBarActive}
        userId={userId}
        onClick={() => isCommentsBarActive.setIsActive(false)}
      />
      <PostOptions
        isMyPost={isMyPost}
        active={isOptionsBarActive.isActive}
        closeOptionBar={() => isOptionsBarActive.setIsActive(false)}
      />
    </PostWrapp>
  );
};

export default Post;
