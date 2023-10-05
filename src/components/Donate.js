import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import FrameImage from '../assets/imgs/frame.png'
import QrImage from '../assets/imgs/qr.png'

const StyledWrapper = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 0.3rem 0;
  .cp {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 414px) {
      flex-direction: column;
      margin: 0;
    }
    .profile {
      color: #222;
      padding: 0.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 0.4rem;
      .pic {
        width: 2.8rem;
        height: 2.8rem;
        background-repeat: no-repeat;
        background-size: 80%, 100%;
        background-position: center;
        overflow: hidden;
        &.boy {
          background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w4.png?x-oss-process=image/resize,w_400'),
            url(${QrImage});
          background-size: 75%, 100%;
          background-position-y: 5px;
        }
        &.girl {
          background-image: url('https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/w1.png?x-oss-process=image/resize,w_400'),
            url(${QrImage});
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        font-family: 'Dancing Script', cursive;
        font-size: 0.4rem;
        padding: 0.2rem 0;
        margin: 0.2rem 0;
      }
      .intro {
        font-size: 0.15rem;
        white-space: nowrap;
      }
    }
  }
`
const tips = {
  h: {
    m: 'bên phải',
    w: 'bên trái'
  },
  v: {
    m: 'bên dưới',
    w: 'bên trên'
  }
}
export default function Donate({ popupDan }) {
  const [pos, setPos] = useState('h')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 414) {
        setPos('v')
      }
    }
  }, [])
  const handleDC = () => {
    popupDan('双击666')
  }
  return (
    <StyledWrapper>
      <Title title="Mừng cưới" />
      <div className="cp">
        <div className="profile">
          <div className="pic boy" onDoubleClick={handleDC}>
            <img src={QrImage} alt="man" />
          </div>
          <div className="name">Nguyễn Hoàng Long🤵🏻</div>
          <div className="intro">Techcombank: 1900 6434 234 435</div>
        </div>
        <div className="profile">
          <div className="pic girl" onDoubleClick={handleDC}>
            <img src={QrImage} alt="man" />
          </div>
          <div className="name">Nguyễn Thị Thu Hường👰🏻</div>
          <div className="intro">Techcombank: 1900 6434 234 435</div>
        </div>
      </div>
    </StyledWrapper>
  )
}
