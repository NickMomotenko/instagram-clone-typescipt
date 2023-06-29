import React from "react";

import {
  PostOptionsLink,
  PostOptionsItem,
  PostOptionsWrapp,
  PostOptionsList,
} from "./PostOptionsStyles";

type PostOptionsProps = {
  options?: any;
  active?: boolean;
  onClick?: () => void;
};

const PostOptions: React.FC<PostOptionsProps> = ({
  options,
  active,
  onClick,
}) => {
  return (
    <PostOptionsWrapp $active={active} onClick={onClick}>
      <PostOptionsList as="ul">
        {options.map(({ id, title }: any) => (
          <PostOptionsItem key={id} as="li">
            <PostOptionsLink as="button" onClick={onClick}>
              {title}
            </PostOptionsLink>
          </PostOptionsItem>
        ))}
      </PostOptionsList>
    </PostOptionsWrapp>
  );
};

export default PostOptions;
