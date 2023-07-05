import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {AppDispatch, RootState} from "../../redux/store";

import Avatar from "../../UI/Avatar";
import DefaultButton from "../../UI/DefaultButton";
import {Row, Block} from "../../UI/Layout";
import Textarea from "../../UI/Textarea";
import Text from "../../UI/Text";

import {useInput} from "../../hooks/useInput";
import {useClickOutside} from "../../hooks/useClickOutside";

import {CREATE_POST} from "../../redux/posts/types";

import {
  CreatePostImagePreview,
  CreatePostWrapp,
  CreatePostImage,
  CreatePostDropInput,
  CreatePostDropLabel,
  CreatePostImageCrossBtn,
} from "./styled";
import Icon from "../../UI/Icon";

import crossIcon2 from "../../assets/icons/delete.svg";

type CreatePostProps = {
  closePopup: () => any;
};

const CreatePost: React.FC<CreatePostProps> = ({closePopup}) => {
  const {
    authUser: {user},
  } = useSelector((state: RootState) => state.authUser);

  const [selectedImage, setSelectedImage] = useState<string[] | null>([]);

  const postInput = useInput({
    option: {symbolLimit: 255},
  });


  const dispatch = useDispatch<AppDispatch>();

  const createPostRef = useRef<any>(null);

  const handleCreatePost = () => {
    dispatch({
      type: CREATE_POST, payload: {
        text: postInput?.value,
        data: selectedImage && selectedImage.map((image: any) => URL.createObjectURL(image))
      }
    });
    postInput.clearValue();
    closePopup();
  };

  const handleCancel = () => {
    postInput.clearValue();
    postInput.refreshCurrentLimit();
    setSelectedImage([])
    closePopup();
  };

  const handleUploadImage = (event: any) => {
    setSelectedImage((prev: any) => [...prev, ...event.target.files]);
  };

  const handleDeleteUploadedImage = (index: number) => {
    setSelectedImage((prev: any) => [
      ...prev?.filter((image: any, ind: number) => ind !== index),
    ]);
  };

  const isCreateButtonDisabled: boolean = postInput?.value.length === 0;

  useClickOutside(createPostRef, () => closePopup());

  return (
    <CreatePostWrapp ref={createPostRef}>
      <Row style={{paddingLeft: 5}} $center>
        <Block style={{marginRight: 11}}>
          <Avatar url={user?.avatar} fullname={user?.fullname} size={40}/>
        </Block>
        <Block>
          <Text text={user?.fullname} $bold/>
        </Block>
      </Row>
      <Row style={{marginTop: 20}}>
        <CreatePostDropLabel htmlFor="audio">
          Add photos
          <CreatePostDropInput
            type="file"
            id="audio"
            onChange={handleUploadImage}
            multiple
          />
        </CreatePostDropLabel>
        <CreatePostDropLabel htmlFor="video" disabled>
          Add videos
          <CreatePostDropInput
            type="file"
            id="video"
            onChange={() => {
            }}
            multiple
            disabled
          />
        </CreatePostDropLabel>
      </Row>

      {selectedImage?.length >= 1 &&
          <Row $center style={{marginTop: 20}}>
            {selectedImage?.map((image: any, index: number) => (
              <CreatePostImagePreview key={index}>
                <CreatePostImageCrossBtn
                  onClick={() => handleDeleteUploadedImage(index)}
                >
                  <Icon url={crossIcon2}/>
                </CreatePostImageCrossBtn>
                <CreatePostImage src={URL.createObjectURL(image)}/>
              </CreatePostImagePreview>
            ))}
          </Row>
      }

      <Block style={{marginTop: 20}}>
        <Block>
          <Textarea
            value={postInput.value}
            onChange={postInput.onChange}
            placeholder="Post text"
            currentLimit={`${postInput.currentLimit}`}
            maxLength={postInput.symbolLimit}
            style={{height: 150}}
          ></Textarea>
        </Block>
        <Row style={{marginTop: 20}}>
          <DefaultButton
            text="Create"
            $fullWidth
            disabled={isCreateButtonDisabled}
            style={{marginRight: 20}}
            onClick={handleCreatePost}
          />
          <DefaultButton
            text="Cancel"
            $fullWidth
            $bgColor="#0095f6"
            onClick={handleCancel}
          />
        </Row>
      </Block>
    </CreatePostWrapp>
  );
};

export default CreatePost;
