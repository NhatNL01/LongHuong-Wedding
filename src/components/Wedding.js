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
            word-break: break-all;
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
              .p {
                word-break: break-all;
              }
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
          <h3 className="title">Nhà gái</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">10:00 18.12.2023</span>
            </li>
            <li className="item">
              <span className="label">Địa điểm</span>
              <div className="txt loc">
                <p>Lâm Thành - Hải Lạng</p>
                <p style={{ marginTop: 10 }}>Tiên Yên - Quảng Ninh</p>
                {/* <a
                  className="map"
                  href={
                    'https://www.google.com/maps/search/L%C3%A2m+Th%C3%A0nh++H%E1%BA%A3i+L%E1%BA%A1ng++Ti%C3%AAn+Y%C3%AAn++Qu%E1%BA%A3ng+Ninh/@21.3144792,107.3589451,18z?entry=ttu'
                  }
                >
                  <img src={MapTraiImage} alt="map" />
                </a> */}
              </div>
              {/* <div className="txt loc">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1858.4561775229965!2d107.35894514776037!3d21.314479246495047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314b1f74c4d95e83%3A0xf73140bc020ac5b5!2zTmjDoCB2xINuIGhvw6EgdGjDtG4gTMOibSBUaMOgbmg!5e0!3m2!1svi!2s!4v1701835956349!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </li>
          </ul>
        </div>
        <div className="box">
          <h3 className="title">Nhà trai</h3>
          <ul className="items">
            <li className="item">
              <span className="label">Thời gian</span>
              <span className="txt">11:00 24.12.2023</span>
            </li>
            <li className="item">
              <span className="label">Địa điểm</span>
              <div className="txt loc">
                <p>Số 62 - Đường 2 - Bãi Thụy</p>
                <p style={{ marginTop: 10 }}>Đồng Tháp - Đan Phượng - Hà Nội</p>
                {/* <a
                  className="map"
                  href={
                    'https://www.google.com/maps/place/62+%C4%90%C6%B0%E1%BB%9Dng+2+B%C3%A3i+Th%E1%BB%A5y,+%C4%90%E1%BB%93ng+Th%C3%A1p,+%C4%90an+Ph%C6%B0%E1%BB%A3ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0823228,105.6465705,17z/data=!3m1!4b1!4m6!3m5!1s0x31345651bad78f07:0x654034b0802c3151!8m2!3d21.0823178!4d105.6491454!16s%2Fg%2F11kzkf03ss?entry=ttu'
                  }
                >
                  <img src={MapGaiImage} alt="map" />
                </a> */}
              </div>
              {/* <div className="txt loc">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.758070155192!2d105.64657047599945!3d21.082322785935233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345651bad78f07%3A0x654034b0802c3151!2zNjIgxJDGsOG7nW5nIDIgQsOjaSBUaOG7pXksIMSQ4buTbmcgVGjDoXAsIMSQYW4gUGjGsOG7o25nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1701835856508!5m2!1svi!2s"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </StyledWrapper>
  )
}
