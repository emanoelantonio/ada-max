import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeBanner } from './HomeBanner';
import { HomeTrailOffer } from './HomeTrailOffer';
import { useGetBanners } from './hooks/get-banners';
import { useGetTrailOffers } from './hooks/get-trail-offers';
import * as S from './styles';


export const Home = () => {

  const { data: banners } = useGetBanners();
  const { data: trailOffers } = useGetTrailOffers();
  const [index, setIndex] = useState(0);
  
  const banner = banners?.[index] || null;

  return (
    <S.Container>
      <S.Unscrollable />
      <S.Header>
        <Link to="/login">
          <S.Logo src='/max.webp' alt='Ada Max'/>
        </Link>
        <S.Menu>
          <S.MenuItem>Home</S.MenuItem>
          <S.MenuItem>Series</S.MenuItem>
          <S.MenuItem>Movies</S.MenuItem>
          <S.MenuItem><img src='/hbo.webp' width={32}/></S.MenuItem>
          <S.MenuItem>Kids & Family</S.MenuItem>
        </S.Menu>
        <span>
          <S.Avatar>
            <S.AvatarImg src='/images/elite.webp'/>
          </S.Avatar>
        </span>
      </S.Header>
      <S.Banner>
        {banner ? <HomeBanner banner={banner} /> : null}
        <S.BannerDots>
          {banners?.map((banner, idx) => (
            <span
              key={banner.id}
              onClick={() => setIndex(idx)}
              className={clsx({active: idx === index})}
            >
            </span>
          ))}
        </S.BannerDots>
      </S.Banner>
      <S.Offers>
        {trailOffers?.map((trailOffer) => {
          return (
            <HomeTrailOffer key={trailOffer.offerId} trailOffer={trailOffer}/>
          )
        })}
      </S.Offers>
    </S.Container>
  )
}
