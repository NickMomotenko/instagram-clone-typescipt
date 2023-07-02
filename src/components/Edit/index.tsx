import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  EditWrapp,
  EditOptions,
  EditOptionsItem,
  EditMain,
  EditHeader,
  EditExitButton,
  EditExitIcon,
} from "./styled";

import { baseRoutes, profileEditRoutes } from "../../helpers/base-routes";

import Text from "../../UI/Text";
import DefaultButton from "../../UI/DefaultButton";
import { Row } from "../../UI/Layout";

import closeIcon from "../../assets/icons/close.png";
import Popup from "../Popup";

const editOptions = [
  {
    id: 1,
    title: "General",
    path: `${profileEditRoutes.general}`,
  },
  {
    id: 2,
    title: "My posts",
    path: `${profileEditRoutes.posts}`,
  },
];

const Edit = () => {
  const [isEditActive, setIsEditActive] = React.useState(false);

  const popupContentRef = React.useRef<any>(null);

  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isEditActive) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [isEditActive]);

  React.useEffect(() => {
    const pathArr = [
      "/profile/edit",
      "/profile/edit/general",
      "/profile/edit/posts",
    ];

    if (pathArr.includes(pathName)) {
      setIsEditActive(true);
    } else setIsEditActive(false);
  }, [pathName]);

  React.useEffect(() => {
    if (
      pathName === profileEditRoutes.general ||
      pathName === profileEditRoutes.posts
    ) {
      popupContentRef.current.style.maxWidth = "767px";
      popupContentRef.current.style.width = "100%";
    }
  }, [pathName]);

  const onCancelButton = () => {
    navigate(baseRoutes.profile);
  };

  return (
    <EditWrapp>
      <Popup isActive={isEditActive} contentRef={popupContentRef}>
        <EditHeader>
          <Row $btw $center style={{ marginBottom: 20 }}>
            <Text text="Edit profile" $bold style={{ fontSize: 18 }} />
            <EditExitButton onClick={onCancelButton}>
              <EditExitIcon src={closeIcon} />
            </EditExitButton>
          </Row>
          <EditOptions as="ul">
            {editOptions.map(({ title, path, id }) => (
              <EditOptionsItem key={id} as="li">
                <NavLink
                  to={path}
                  style={({ isActive }) => {
                    return {
                      display: "inline-block",
                      background: "transparent",
                      color: isActive ? "black" : "#7751518a",
                      borderColor: isActive ? "black" : "#7751518a",
                      border: "1px solid",
                      padding: "7px 27px",
                      borderRadius: 5,
                    };
                  }}
                >
                  {title}
                </NavLink>
              </EditOptionsItem>
            ))}
          </EditOptions>
        </EditHeader>
        <EditMain>
          <Outlet />
        </EditMain>
      </Popup>
    </EditWrapp>
  );
};

export default Edit;
