import React from "react";
import {
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
  EditExitIcon, EditContent,
} from "./styled";

import Text from "../../UI/Text";
import {Row} from "../../UI/Layout";

import Popup from "../Popup";

import {baseRoutes, profileEditRoutes} from "../../helpers/base-routes";

import {useClickOutside} from "../../hooks/useClickOutside";

import closeIcon from "../../assets/icons/close.png";

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

type EditProps = {};

const Edit: React.FC<EditProps> = () => {
  const [isEditActive, setIsEditActive] = React.useState(false);

  const popupContentRef = React.useRef<any>(null);
  const editBlockRef = React.useRef<any>(null)

  const pathName = useLocation().pathname;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isEditActive) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "auto";
  }, [isEditActive]);

  React.useEffect(() => {
    const pathArr = [
      profileEditRoutes.edit,
      profileEditRoutes.general,
      profileEditRoutes.posts
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
      setTimeout(() => {
        popupContentRef.current.style.maxWidth = "767px";
        popupContentRef.current.style.width = "100%";
      }, 0)
    }
  }, [pathName]);

  const onCancelButton = () => {
    navigate(baseRoutes.profile);
  };

  useClickOutside(editBlockRef, () => navigate(baseRoutes.profile))

  return (
    <EditWrapp>
      {
        isEditActive && <Popup ref={popupContentRef}>
              <EditContent ref={editBlockRef}>
                  <EditHeader>
                      <Row $btw $center style={{marginBottom: 20}}>
                          <Text text="Edit profile" $bold style={{fontSize: 18}}/>
                          <EditExitButton onClick={onCancelButton}>
                              <EditExitIcon src={closeIcon}/>
                          </EditExitButton>
                      </Row>
                      <EditOptions as="ul">
                        {editOptions.map(({title, path, id}) => (
                          <EditOptionsItem key={id} as="li">
                            <NavLink
                              to={path}
                              style={({isActive}) => {
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
                      <Outlet/>
                  </EditMain>
              </EditContent>
          </Popup>
      }
    </EditWrapp>
  );
};

export default Edit;
