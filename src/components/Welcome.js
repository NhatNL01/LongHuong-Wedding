import React, { useEffect } from 'react'
import styled from 'styled-components'
import Confetti from 'confetti-react'
import Title from './SectionTitle'
import useTimer from '../useTimer'

const StyledWrapper = styled.section`
  width: 100%;
  height: 300px
  // background-color: #e2ddd4;
  padding: 0.3rem 0 1rem 0;
  .wrapper {
    width: 100%;
    height: 500px
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .countdown {
      width: 100%;
      /* max-width: 1400px; */
      background: linear-gradient(145deg, #e2ddd4, #aa7a32);
      opacity: 0.8;
      padding: 0.3rem 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 0.24rem;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0.35rem;
        width: 1.4rem;
        height: 1.4rem;
        border: 1px solid #ccc;
        border-radius: 50%;
        color: #e2ddd4;
        .num {
          font-weight: 800;
          font-size: 0.8rem;
          margin-bottom: 0.1rem;
        }
        .txt {
          font-size: 0.2rem;
        }
      }
      @media screen and (max-width: 768px) {
        /* flex-direction: column; */
        .box {
          width: 0.6rem;
          height: 0.6rem;
          .num {
            font-size: 0.4rem;
            .txt {
              font-size: 0.1rem;
            }
          }
        }
      }
    }

    .cele {
      color: #e3d4b9;
      width: 100%
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      .flowers {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        overflow: hidden;
      }
      .txt {
        white-space: nowrap;
        font-family: 'Dancing Script', cursive;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 0.8rem;
        padding: 0.1rem 0.3rem;
      }
    }
  }
`

export default function Welcome() {
  const { value, startTimer, stopTimer } = useTimer()
  useEffect(() => {
    startTimer()
    return () => {
      stopTimer()
    }
  }, [])
  return (
    <StyledWrapper>
      <Title title="Mời bạn tham gia" />
      <div
        className="wrapper"
        style={{
          height: 500
        }}
      >
        <div className="countdown">
          <div className="box">
            <span className="num day">{-value.day}</span>
            <span className="txt">Ngày</span>
          </div>
          <div className="box">
            <span className="num hour">{-value.hour}</span>
            <span className="txt">Giờ</span>
          </div>
          <div className="box">
            <span className="num min">{-value.minute}</span>
            <span className="txt">Phút</span>
          </div>
          <div className="box">
            <span className="num second">{-value.second}</span>
            <span className="txt">Giây</span>
          </div>
        </div>
        <div className="cele">
          <div className="flowers">
            <Confetti gravity={0.2} numberOfPieces={150} />
          </div>
          <div
            className="txt"
            style={{
              color: ' #e3d4b9',
              marginTop: 150,
              wordBreak: 'break-all'
            }}
          >
            Chúng mình chuẩn bị cưới nhau!
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}
