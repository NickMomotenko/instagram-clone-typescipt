import React from "react";

import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {
  ProfileWrapp,
  GradientButton,
  StorieButton,
  ProfileHeader,
  ProfileContent,
  ProfileInfo,
  ProfileStories,
} from "./styled";

import {Row, Block} from "../../UI/Layout";
import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";
import Avatar from "../../UI/Avatar";

import Edit from "../Edit";

import {profileEditRoutes} from "../../helpers/base-routes";
import {RootState} from "../../redux/store";
import Popup from "../Popup";
import {useActive} from "../../hooks/useActive";
import CreatePost from "../../containers/CreatePost";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  const {
    authUser: {user, stories},
  } = useSelector((state: RootState) => state.authUser);

  const createPostPopup: {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
  } = useActive();

  const navigate = useNavigate();

  const handleOpenCreatePostPopup = () => {
    createPostPopup?.setIsActive(true);
  };

  const onEditClick = () => {
    navigate(profileEditRoutes.general);
  };

  return (
    <ProfileWrapp>
      <ProfileHeader>
        <Row $center $btw style={{marginBottom: 35}}>
          <Block>
            <Text text="Profile" style={{fontSize: 20}} $bold/>
          </Block>
          <Block>
            <DefaultButton
              text="Edit"
              onClick={onEditClick}
              style={{
                background: "transparent",
                color: "#7751518a",
                borderColor: "#7751518a",
              }}
            />
          </Block>
        </Row>
        <ProfileContent>
          <ProfileInfo>
            <Row style={{marginBottom: 12}}>
              <Block style={{marginRight: 15, flexShrink: 0}}>
                <Avatar
                  size={60}
                  url={user?.avatar}
                  fullname={user?.fullname}
                />
              </Block>
              <Block style={{marginTop: -5}}>
                <Text
                  text={user?.nickname}
                  $bold
                  style={{fontSize: 20, marginBottom: 5}}
                />
                <Text text={user?.job} color="#76777E"/>
              </Block>
            </Row>
            <Block style={{marginBottom: 35}}>
              <Text
                text={user?.fullname}
                $bold
                style={{fontSize: 16, marginBottom: 12}}
              />
              <Text text={user?.description} color="#76777e"/>
            </Block>
            <Row style={{justifyContent: "center"}}>
              <GradientButton name="test" onClick={handleOpenCreatePostPopup}>
                Create post
              </GradientButton>
            </Row>
          </ProfileInfo>
          <ProfileStories>
            <Block>
              <Block style={{textAlign: "left"}}>
                <Text
                  text="Your stories"
                  $bold
                  style={{fontSize: "16px", marginBottom: 25}}
                />
                <Row $as="ul" style={{marginRight: -15}}>
                  {stories?.map((storie: any) => (
                    <Block
                      key={storie.id}
                      as="li"
                      style={{flex: 1, textAlign: "center", marginRight: 15}}
                    >
                      <StorieButton to="/">
                        <Block style={{marginBottom: 6}}>
                          <Avatar $noGradient url={storie.image}/>
                        </Block>
                        <Text
                          text={storie.title}
                          $bold
                          style={{fontSize: "12px"}}
                        />
                      </StorieButton>
                    </Block>
                  ))}
                </Row>
              </Block>
            </Block>
          </ProfileStories>
        </ProfileContent>
      </ProfileHeader>
      <Edit/>
      {createPostPopup.isActive && (
        <Popup>
          <CreatePost closePopup={() => createPostPopup.setIsActive(false)}/>
        </Popup>
      )}
    </ProfileWrapp>
  );
};

export default Profile;
