import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './NavItem';

const NavBarContainer = styled.div`
  display: flex;
  width: 360px;
  height: 50px;
  justify-content: center;
  align-items: flex-end;
  flex-shrink: 0;
`;

export default function NavBar() {
  // const location = useLocation();
  // const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <NavBarContainer>
      <NavItem
        icon={
          <svg
            width='20'
            height='21'
            viewBox='0 0 20 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id='&#237;&#153;&#136;&#235;&#178;&#132;&#237;&#138;&#188;'>
              <g id='Union'>
                <path
                  d='M10.9428 0.793843C10.4221 0.227575 9.57789 0.227572 9.05719 0.793843L0.195262 10.4313C-0.0650874 10.7145 -0.0650874 11.1735 0.195262 11.4567C0.455612 11.7398 0.877722 11.7398 1.13807 11.4567L2 10.5193V18.1941C2 19.3953 2.89543 20.3691 4 20.3691H16C17.1046 20.3691 18 19.3953 18 18.1941V10.5193L18.8619 11.4567C19.1223 11.7398 19.5444 11.7398 19.8047 11.4567C20.0651 11.1735 20.0651 10.7145 19.8047 10.4313L16.6667 7.01863V2.24386C16.6667 1.84345 16.3682 1.51885 16 1.51885H14.6667C14.2985 1.51885 14 1.84345 14 2.24386V4.11859L10.9428 0.793843ZM16.6667 9.06927V18.1941C16.6667 18.5945 16.3682 18.9191 16 18.9191H4C3.63181 18.9191 3.33333 18.5945 3.33333 18.1941V9.06927L10 1.81916L16.6667 9.06927Z'
                  fill='#58D7A2'
                />
              </g>
            </g>
          </svg>
        }
        text='홈'
        active={activeIndex === 0}
        onClick={() => handleItemClick(0)}
      />
      <NavItem
        icon={
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id='Outlined / Graph'>
              <g id='Vector'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M16.9834 2.71943C15.8964 2.26917 14.8412 2.55019 14.0906 3.21345C13.3575 3.86131 12.9095 4.869 12.9095 5.93963V6.8176C12.9095 9.4536 15.0464 11.5905 17.6824 11.5905H18.5604C19.631 11.5905 20.6387 11.1425 21.2865 10.4094C21.9498 9.65881 22.2308 8.60358 21.7806 7.51657C21.3351 6.44114 20.6822 5.46399 19.8591 4.64089C19.036 3.8178 18.0589 3.16488 16.9834 2.71943ZM14.2732 5.93963C14.2732 5.23572 14.5711 4.60874 14.9936 4.23533C15.3988 3.87731 15.9091 3.75048 16.4616 3.97931C17.3715 4.35623 18.1984 4.9087 18.8948 5.60516C19.5913 6.30163 20.1438 7.12845 20.5207 8.03843C20.7495 8.59088 20.6227 9.10123 20.2647 9.50638C19.8913 9.92894 19.2643 10.2268 18.5604 10.2268H17.6824C15.7995 10.2268 14.2732 8.70046 14.2732 6.8176V5.93963Z'
                  fill='#5E5F60'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M11.5458 7.27216C11.5458 5.94543 10.4215 4.64857 8.91034 4.99004C7.85556 5.22838 6.84776 5.65898 5.93941 6.26592C4.48174 7.2399 3.34563 8.62427 2.67473 10.2439C2.00384 11.8636 1.8283 13.6459 2.17032 15.3653C2.51234 17.0847 3.35655 18.6642 4.5962 19.9038C5.83585 21.1434 7.41525 21.9877 9.13469 22.3297C10.8541 22.6717 12.6364 22.4962 14.2561 21.8253C15.8757 21.1544 17.2601 20.0183 18.2341 18.5606C18.841 17.6522 19.2716 16.6444 19.51 15.5897C19.8514 14.0785 18.5546 12.9542 17.2278 12.9542H15.4096C13.2757 12.9542 11.5458 11.2243 11.5458 9.09041V7.27216ZM9.2109 6.32019C9.65874 6.219 10.1821 6.59052 10.1821 7.27216V9.09041C10.1821 11.9775 12.5225 14.3179 15.4096 14.3179H17.2278C17.9095 14.3179 18.281 14.8413 18.1798 15.2891C17.9781 16.1816 17.6138 17.0344 17.1002 17.803C16.2761 19.0364 15.1047 19.9977 13.7342 20.5654C12.3637 21.1331 10.8556 21.2816 9.40073 20.9922C7.94582 20.7028 6.6094 19.9885 5.56047 18.9395C4.51154 17.8906 3.79721 16.5542 3.50781 15.0993C3.21841 13.6444 3.36694 12.1363 3.93462 10.7658C4.50229 9.39531 5.46362 8.22392 6.69704 7.39978C7.46563 6.88622 8.31837 6.52187 9.2109 6.32019Z'
                  fill='#5E5F60'
                />
              </g>
            </g>
          </svg>
        }
        text='구독'
        active={activeIndex === 1}
        onClick={() => handleItemClick(1)}></NavItem>
      <NavItem
        icon={
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id='Outlined / Explore'>
              <g id='Vector'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M15.6156 11.045C16.1822 9.64528 14.8063 8.24555 13.4303 8.82191L10.8696 9.89452C10.221 10.1662 9.70586 10.6902 9.43877 11.3501L8.38437 13.955C7.81781 15.3547 9.19375 16.7544 10.5697 16.1781L13.1304 15.1055C13.779 14.8338 14.2941 14.3098 14.5612 13.6499L15.6156 11.045ZM13.9766 10.1716C14.1732 10.0893 14.3698 10.2893 14.2888 10.4892L13.2344 13.0941C13.113 13.3941 12.8789 13.6323 12.584 13.7558L10.0234 14.8284C9.8268 14.9107 9.63024 14.7107 9.71118 14.5108L10.7656 11.9059C10.887 11.6059 11.1211 11.3677 11.416 11.2442L13.9766 10.1716Z'
                  fill='#5E5F60'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M14.9336 2.56995C14.164 2.49999 13.2235 2.49999 12.0337 2.5H11.9663C10.7765 2.49999 9.83602 2.49999 9.06637 2.56995C8.27579 2.64181 7.61455 2.79074 6.98959 3.11687C6.82771 3.20136 6.67004 3.29396 6.51717 3.39434C5.92705 3.78184 5.46964 4.28993 5.01318 4.95049C4.5688 5.59356 4.09856 6.4221 3.50366 7.47032L3.46997 7.52968C2.87506 8.57789 2.40482 9.40643 2.07955 10.1195C1.74544 10.8519 1.5416 11.5089 1.50677 12.2225C1.49774 12.4074 1.49774 12.5926 1.50677 12.7775C1.5416 13.4911 1.74544 14.1481 2.07955 14.8805C2.40481 15.5936 2.87505 16.4221 3.46995 17.4703L3.50364 17.5297C4.09855 18.5779 4.56879 19.4064 5.01318 20.0495C5.46964 20.7101 5.92705 21.2182 6.51717 21.6057C6.67004 21.706 6.8277 21.7986 6.98959 21.8831C7.61454 22.2093 8.27579 22.3582 9.06637 22.4301C9.83601 22.5 10.7765 22.5 11.9663 22.5H12.0337C13.2235 22.5 14.164 22.5 14.9336 22.4301C15.7242 22.3582 16.3855 22.2093 17.0104 21.8831C17.1723 21.7986 17.33 21.706 17.4828 21.6057C18.0729 21.2182 18.5304 20.7101 18.9868 20.0495C19.4312 19.4065 19.9014 18.5779 20.4963 17.5297L20.53 17.4703C21.1249 16.4221 21.5952 15.5936 21.9205 14.8805C22.2546 14.1481 22.4584 13.4911 22.4932 12.7775C22.5023 12.5926 22.5023 12.4074 22.4932 12.2225C22.4584 11.5089 22.2546 10.8519 21.9205 10.1195C21.5952 9.40643 21.1249 8.57788 20.53 7.52966L20.4963 7.47026C19.9014 6.42207 19.4312 5.59355 18.9868 4.95049C18.5304 4.28993 18.0729 3.78184 17.4828 3.39434C17.33 3.29396 17.1723 3.20136 17.0104 3.11687C16.3855 2.79074 15.7242 2.64181 14.9336 2.56995ZM7.64453 4.41562C8.04746 4.20535 8.50933 4.08607 9.19408 4.02383C9.8925 3.96034 10.7691 3.95967 12 3.95967C13.2309 3.95967 14.1075 3.96034 14.8059 4.02383C15.4907 4.08607 15.9525 4.20535 16.3555 4.41562C16.4751 4.47807 16.5917 4.54651 16.7046 4.6207C17.0851 4.87054 17.4176 5.21781 17.813 5.78993C18.2162 6.3735 18.6551 7.14541 19.2705 8.22984C19.886 9.31427 20.3237 10.0868 20.6189 10.7339C20.9083 11.3683 21.0377 11.8348 21.0601 12.2949C21.0668 12.4316 21.0668 12.5684 21.0601 12.7051C21.0377 13.1652 20.9083 13.6317 20.6189 14.2661C20.3237 14.9132 19.886 15.6857 19.2705 16.7702C18.6551 17.8546 18.2162 18.6265 17.813 19.2101C17.4176 19.7822 17.0851 20.1295 16.7046 20.3793C16.5917 20.4535 16.4751 20.5219 16.3555 20.5844C15.9525 20.7947 15.4907 20.9139 14.8059 20.9762C14.1075 21.0397 13.2309 21.0403 12 21.0403C10.7691 21.0403 9.8925 21.0397 9.19408 20.9762C8.50933 20.9139 8.04746 20.7947 7.64453 20.5844C7.52488 20.5219 7.40834 20.4535 7.29535 20.3793C6.91488 20.1295 6.5824 19.7822 6.18704 19.2101C5.78378 18.6265 5.34492 17.8546 4.72946 16.7702C4.114 15.6857 3.67628 14.9132 3.38112 14.2661C3.09173 13.6317 2.96234 13.1652 2.93989 12.7051C2.93322 12.5684 2.93322 12.4316 2.93989 12.2949C2.96234 11.8348 3.09173 11.3683 3.38112 10.7339C3.67628 10.0868 4.114 9.31427 4.72946 8.22984C5.34492 7.14541 5.78378 6.37349 6.18704 5.78993C6.5824 5.21781 6.91488 4.87054 7.29535 4.6207C7.40834 4.54651 7.52488 4.47807 7.64453 4.41562Z'
                  fill='#5E5F60'
                />
              </g>
            </g>
          </svg>
        }
        text='검색'
        active={activeIndex === 2}
        onClick={() => handleItemClick(2)}></NavItem>
      <NavItem
        icon={
          <svg
            width='24'
            height='25'
            viewBox='0 0 24 25'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g id='Outlined / Profile'>
              <path
                id='Vector'
                d='M15.25 9.5C15.25 11.2949 13.7949 12.75 12 12.75V14.25C14.6234 14.25 16.75 12.1234 16.75 9.5H15.25ZM12 12.75C10.2051 12.75 8.75 11.2949 8.75 9.5H7.25C7.25 12.1234 9.37665 14.25 12 14.25V12.75ZM8.75 9.5C8.75 7.70507 10.2051 6.25 12 6.25V4.75C9.37665 4.75 7.25 6.87665 7.25 9.5H8.75ZM12 6.25C13.7949 6.25 15.25 7.70507 15.25 9.5H16.75C16.75 6.87665 14.6234 4.75 12 4.75V6.25ZM9 17.25H15V15.75H9V17.25ZM2.75 12.5C2.75 7.39137 6.89137 3.25 12 3.25V1.75C6.06294 1.75 1.25 6.56294 1.25 12.5H2.75ZM12 3.25C17.1086 3.25 21.25 7.39137 21.25 12.5H22.75C22.75 6.56294 17.9371 1.75 12 1.75V3.25ZM21.25 12.5C21.25 15.1233 20.159 17.4905 18.4039 19.1748L19.4425 20.2571C21.4801 18.3016 22.75 15.5485 22.75 12.5H21.25ZM18.4039 19.1748C16.7412 20.7705 14.4858 21.75 12 21.75V23.25C14.8882 23.25 17.5117 22.11 19.4425 20.2571L18.4039 19.1748ZM15 17.25C16.576 17.25 17.8915 18.3726 18.1876 19.8621L19.6588 19.5697C19.226 17.3918 17.3055 15.75 15 15.75V17.25ZM12 21.75C9.51425 21.75 7.25884 20.7705 5.59612 19.1748L4.55751 20.2571C6.48833 22.11 9.11182 23.25 12 23.25V21.75ZM5.59612 19.1748C3.84103 17.4905 2.75 15.1233 2.75 12.5H1.25C1.25 15.5485 2.51989 18.3016 4.55751 20.2571L5.59612 19.1748ZM9 15.75C6.69445 15.75 4.77403 17.3918 4.3412 19.5697L5.81243 19.8621C6.10846 18.3726 7.42396 17.25 9 17.25V15.75Z'
                fill='#5E5F60'
              />
            </g>
          </svg>
        }
        text='내정보'
        active={activeIndex === 3}
        onClick={() => handleItemClick(3)}></NavItem>
    </NavBarContainer>
  );
}
