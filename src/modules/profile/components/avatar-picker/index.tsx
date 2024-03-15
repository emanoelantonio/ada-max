import { AvatarType } from "../../../../types";

import clsx from "clsx";
import { Avatar } from "../../../../components/";
import { useGetAvatars } from "../../hooks/use-get-avatars";
import { Box, BoxItems, BoxItemsItem, CloseButton, Container, Section, Wrapper } from "./styles";

type Props = {
  onSelectAvatar: (avatar: AvatarType) => void;
  onClose: () => void;
};

export const AvatarPicker = ({ onSelectAvatar, onClose }: Props) => {
  const { data, isLoading } = useGetAvatars();
  
  if (isLoading) {
    return <div>Loading...</div>
  }

  const path = window.location.origin

  return (
    <Wrapper>
      <Container>
        <CloseButton className={clsx("btn btn--primary")} onClick={onClose}>
          Back
        </CloseButton>
        <Section>
          <h1 className="title">Choose an Avatar</h1>
        </Section>
        <div>
          <Box>
            <BoxItems>
              {data?.map((avatar:any) => {
                return (
                  <Box key={avatar.name}>
                    <h4 id={avatar.name}>{avatar.name}</h4>
                    <>
                      {avatar.items.map((item:any) => (
                        <BoxItemsItem
                          onClick={() => onSelectAvatar(item)}
                          key={item.id}
                        >
                          <Avatar image={`${path}/${item.image}.webp`} size="large"/>
                        </BoxItemsItem>
                      ))}
                    </>
                  </Box>
                );
              })}
            </BoxItems>
          </Box>
        </div>
      </Container>
    </Wrapper>
  );
};