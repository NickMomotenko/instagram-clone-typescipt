import React, { useRef, useState } from "react";

import {
  PostOptionsLink,
  PostOptionsItem,
  PostOptionsWrapp,
  PostOptionsList,
  PostOptionsContent,
  PostOptionsBtnBack,
} from "./PostOptionsStyles";

import { useClickOutside } from "../../hooks/useClickOutside";
import { PostShareTo } from "./PostShareTo";
import { PostReport } from "./PostReport";
import Button from "../Button";

import backIcon from "../../assets/icons/back.svg";

type PostOptionsProps = {
  options?: { id: number; title: string; onClick: () => void }[];
  active?: boolean;
  closeOptionBar?: () => void;
  isMyPost?: boolean;
};

const PostOptions: React.FC<PostOptionsProps> = ({
  active,
  closeOptionBar,
  isMyPost,
}) => {
  const [currentOption, setCurrentOption] = useState<string | null>(null);

  const postOptionsRef = useRef<any>(null);

  const getOptionComponent = () => {
    switch (currentOption) {
      case "share":
        return <PostShareTo />;

      case "report":
        return <PostReport />;
    }
  };

  const postOptions = [
    {
      id: 1,
      title: "Report",
      label: "report",
      func: () => setCurrentOption("report"),
    },
    {
      id: 2,
      title: "Share to",
      label: "share",
      func: () => setCurrentOption("share"),
    },
    {
      id: 3,
      title: "Copy link",
      label: "copy",
      func: () => setCurrentOption(null),
    },
    {
      id: 4,
      title: "Cancel",
      label: "cancel",
      func: () => closeOptionBar(),
    },
  ];

  const postOptionsWithPersonalFunctions = [
    ...postOptions,
    { id: 5, title: "Delete" },
  ];

  const optionsList = isMyPost ? postOptionsWithPersonalFunctions : postOptions;

  useClickOutside(postOptionsRef, () => {});

  return (
    <PostOptionsWrapp $active={active} ref={postOptionsRef}>
      {currentOption ? (
        <PostOptionsContent>{getOptionComponent()}</PostOptionsContent>
      ) : (
        <PostOptionsList as="ul">
          {optionsList?.map(({ id, title, label, func }: any) => (
            <PostOptionsItem key={id} as="li">
              <PostOptionsLink
                as="button"
                onClick={() => {
                  func && func();
                }}
              >
                {title}
              </PostOptionsLink>
            </PostOptionsItem>
          ))}
        </PostOptionsList>
      )}
      {currentOption && (
        <PostOptionsBtnBack>
          <Button
            view="ghost"
            icon={backIcon}
            fill="#fff"
            onClick={() => setCurrentOption(null)}
          />
        </PostOptionsBtnBack>
      )}
    </PostOptionsWrapp>
  );
};

export default PostOptions;
