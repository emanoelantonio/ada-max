import { Button } from "../../../components";
import { Banner } from "../../../types";
import * as S from "../styles";

type Props = {
  banner: Banner;
};

export const HomeBanner = ({ banner }: Props) => {
  return (
    <S.BannerInner>
      <S.BannerImage>
        <picture>
          <img
            src={banner.image}
            aria-hidden="true"
            sizes="100vw"
            alt={banner.title}
          />
        </picture>
      </S.BannerImage>
      <S.BannerBackdrop />
      <S.BannerContent>
        <S.BannerContentImage src={banner.headline} alt="" />
        <div>
          <small>14</small> <strong>2024</strong>
        </div>
        <p>{banner.description}</p>
        <div>
          <Button variant="filled">Go to Movie</Button>
        </div>
      </S.BannerContent>
    </S.BannerInner>
  );
};
