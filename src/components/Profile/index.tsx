import React, { useEffect, useRef } from "react";

import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import {
	GradientButton,
	ProfileContent,
	ProfileHeader,
	ProfileInfo,
	ProfileOutlet,
	ProfileStories,
	ProfileUserPosts,
	ProfileWrapp,
	StorieButton,
} from "./styled";

import { Block, Row } from "../../UI/Layout";
import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";
import Avatar from "../../UI/Avatar";


import { profileEditRoutes } from "../../helpers/base-routes";
import { RootState } from "../../redux/store";
import Popup from "../Popup";
import { useActive } from "../../hooks/useActive";
import CreatePost from "../../containers/CreatePost";
import Posts from "../Posts";
import { useWindowResize } from "../../hooks/useWindowResize";

type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
	const {
		authUser: { user, stories, posts },
	} = useSelector((state: RootState) => state.authUser);

	const postPopup: {
		isActive: boolean,
		setIsActive: React.Dispatch<React.SetStateAction<boolean>>
	} = useActive();

	const navigate = useNavigate();

	const profilePostsRef = useRef<any>(null);

	const windowWidth = useWindowResize();

	useEffect(() => {
		if (windowWidth > 670) {
			if (profilePostsRef.current) {
				profilePostsRef.current.style = ``;
			}
		}

		if (windowWidth <= 670) {
			if (profilePostsRef.current) {
				profilePostsRef.current.style = `grid-template-columns: repeat(1 , 1fr) ;`;
			}
		}
	}, [windowWidth]);

	const handleOpenCreatePostPopup = () => {
		postPopup?.setIsActive(true);
	};

	const onEditClick = () => {
		navigate(profileEditRoutes.general);
	};

	return (
		<ProfileWrapp>
			<ProfileHeader>
				<Row $center $btw style={{ marginBottom: 35 }}>
					<Block>
						<Text text="Profile" style={{ fontSize: 20 }} $bold />
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
						<Row style={{ marginBottom: 12 }}>
							<Block style={{ marginRight: 15, flexShrink: 0 }}>
								<Avatar
									size={60}
									url={user?.avatar}
									fullname={user?.fullname}
								/>
							</Block>
							<Block style={{ marginTop: -5 }}>
								<Text
									text={user?.nickname}
									$bold
									style={{ fontSize: 20, marginBottom: 5 }}
								/>
								<Text text={user?.job} color="#76777E" />
							</Block>
						</Row>
						<Block style={{ marginBottom: 35 }}>
							<Text
								text={user?.fullname}
								$bold
								style={{ fontSize: 16, marginBottom: 12 }}
							/>
							<Text text={user?.description} color="#76777e" />
						</Block>
						<Row style={{ justifyContent: "center" }}>
							<GradientButton name="test" onClick={handleOpenCreatePostPopup}>
								Create post
							</GradientButton>
						</Row>
					</ProfileInfo>
					<ProfileStories>
						<Block>
							<Block style={{ textAlign: "left" }}>
								<Text
									text="Your stories"
									$bold
									style={{ fontSize: "16px", marginBottom: 25 }}
								/>
								<Row $as="ul" style={{ marginRight: -15 }}>
									{stories?.map((storie: any) => (
										<Block
											key={storie.id}
											as="li"
											style={{ flex: 1, textAlign: "center", marginRight: 15 }}
										>
											<StorieButton to="/">
												<Block style={{ marginBottom: 6 }}>
													<Avatar $noGradient url={storie.image} />
												</Block>
												<Text
													text={storie.title}
													$bold
													style={{ fontSize: "12px" }}
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
			<ProfileUserPosts>
				{
					!posts ? <Text text="You don't have any posts yet" $bold $center style={{ fontSize: 20 }} /> :
						<Block><Text text="Your posts" $bold style={{ fontSize: 20, marginBottom: 20 }} />
							<Posts
								posts={posts}
								$baseColumnCounter={2}
								contentRef={profilePostsRef} /></Block>

				}

			</ProfileUserPosts>
			<ProfileOutlet>
				<Outlet />
			</ProfileOutlet>
			{postPopup.isActive && (
				<Popup title="Create a post" onCrossClick={() => postPopup.setIsActive(false)}>
					<CreatePost closePopup={() => postPopup.setIsActive(false)} />
				</Popup>
			)}
		</ProfileWrapp>
	);
};

export default Profile;
