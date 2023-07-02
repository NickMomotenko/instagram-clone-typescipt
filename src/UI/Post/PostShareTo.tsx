import {
  PostShareToWrapp,
  PostShareToList,
  PostShareToItem,
  PostShareIcon,
} from "./PostStyles";

import { ShareItem } from "./types";

import instaIcon from "../../assets/icons/insta.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import Button from "../Button";
import Icon from "../Icon";
import Text from "../Text";

const shareList: ShareItem[] = [
  {
    title: "Instagram",
    icon: instaIcon,
    link: "",
  },
  {
    title: "Twitter",
    icon: twitterIcon,
    link: "",
  },
];

export const PostShareTo: React.FC = () => {
  return (
    <PostShareToWrapp>
      <Text
        text="Share to socials"
        $bold
        $textColor="#fff"
        style={{ fontSize: 20, marginBottom: 15 }}
      />
      <PostShareToList>
        {shareList?.map(({ icon, title }: ShareItem, index: number) => {
          return (
            <PostShareToItem key={index}>
              <Button view="ghost">
                <PostShareIcon title={title.toLowerCase()}>
                  <Icon url={icon} />
                </PostShareIcon>
              </Button>
            </PostShareToItem>
          );
        })}
      </PostShareToList>
    </PostShareToWrapp>
  );
};
