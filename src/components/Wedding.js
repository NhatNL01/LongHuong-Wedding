import React from 'react'
import styled from 'styled-components'
import Title from './SectionTitle'
import WeddingImage from '../assets/imgs/wedding.png'
import Map1Image from '../assets/imgs/map.xiaoqu.png'
import Map2Image from '../assets/imgs/map.hotel.png'
import MapGaiImage from '../assets/imgs/map.png'
import MapTraiImage from '../assets/imgs/map-nha-trai.png'

const StyledWrapper = styled.section`
  z-index: 1;
  position: relative;
  width: 100%;
  margin: auto;
  max-width: 1800px;
  background-color: #fff;
  padding: 0.3rem 0;
  background: url(${WeddingImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .wrapper {
    max-width: 1400px;
    margin: 0.2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .box {
      min-height: 4.4rem;
      width: 4rem;
      background-color: rgba(2, 2, 2, 0.5);
      z-index: 9;
      color: #fff;
      padding: 0.25rem 0.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.2rem;
      border-radius: 5px;
      /* border: 2px solid rgba(2,2,2,.5); */
      &:first-child {
        margin: 0 0.25rem 0 0;
      }
      @media screen and (max-width: 768px) {
        &:first-child {
          margin: 0 0 0.25rem 0;
        }
      }
      .title {
        font-size: 0.3rem;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid rgba(222, 222, 222, 0.4);
        padding-bottom: 0.2rem;
      }
      .items {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.2rem 0;
        .item {
          font-size: 0.22rem;
          display: flex;
          align-items: flex-start;
          margin: 0.1rem 0;

          .label {
            color: #ccc;
            white-space: nowrap;
            &:after {
              content: '：';
            }
          }
          .txt {
            white-space: nowrap;
            font-weight: 800;
            &.loc {
              display: flex;
              flex-direction: column;
              .map {
                margin-top: 0.12rem;
                width: 2.4rem;
                height: 2.4rem;
                img {
                  width: 100%;
                  height: 100%;
                  border: 1px solid #ccc;
                  border-radius: 10px;
                }
                &:hover img {
                  box-shadow: 0px 1px 20px black;
                }
              }
            }
          }
          @media screen and (max-width: 768px) {
            flex-direction: column;
            .label {
              margin-bottom: 0.12rem;
            }
          }
        }
      }
    }
  }
`
export default function Wedding() {
  return (
    <StyledWrapper>
      <Title title="Lễ cưới" />
      <div className="wrapper">
        <div className="box">
          <h3 className="title">Nhà trai</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">10:00 10.12.2023</span>
            </li>
            <li className="item">
              <span className="label">Địa điểm</span>
              <div className="txt loc">
                <span>Đan Phượng - Hà Nội</span>
                <a
                  className="map"
                  href={
                    'https://www.google.com/maps/place/3JMX%2B7QV,+%C4%90%E1%BB%93ng+Th%C3%A1p,+%C4%90an+Ph%C6%B0%E1%BB%A3ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0831272,105.6505076,18z/data=!4m9!1m2!2m1!1zc-G7kSA2MiBiw6NpIHRo4buleSDEkeG7k25nIHRow6FwIMSRYW4gcGh14buNbmc!3m5!1s0x31345651c8f34cf5:0xd0d1b2e144abfee!8m2!3d21.0832003!4d105.6493974!16s%2Fg%2F11j0vwg00b?entry=ttu'
                  }
                >
                  <img src={MapTraiImage} alt="map" />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="box">
          <h3 className="title">Nhà gái</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">10:00 11.12.2023</span>
            </li>
            <li className="item">
              <span className="label">Địa điểm</span>
              <div className="txt loc">
                <span>Tiên Yên - Quảng Ninh</span>
                <a
                  className="map"
                  href={
                    'https://www.google.com/maps/place/tt.+Ti%C3%AAn+Y%C3%AAn,+Ti%C3%AAn+Y%C3%AAn,+Qu%E1%BA%A3ng+Ninh,+Vi%E1%BB%87t+Nam/@21.3312025,107.3725923,15z/data=!3m1!4b1!4m10!1m2!2m1!1zdGhhzIBuaCBwaMO0zIEgVGnDqm4gWcOqbiwgUXXhuqNuZyBOaW5o!3m6!1s0x314b2211b3d65689:0xcc36f4d8c83bd9e7!8m2!3d21.3347973!4d107.3937536!15sCid0aGHMgG5oIHBow7TMgSBUacOqbiBZw6puLCBRdeG6o25nIE5pbmiSAQxzdWJsb2NhbGl0eTHgAQA!16s%2Fg%2F11h1trtfz?entry=ttu'
                  }
                >
                  <img src={MapGaiImage} alt="map" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  )
}
