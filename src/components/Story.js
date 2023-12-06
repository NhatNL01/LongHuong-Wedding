import React from 'react'
import styled, { keyframes } from 'styled-components'
import Title from './SectionTitle'
const AniBeating = keyframes`
    from{
        opacity:.1;
    }
    to{
        opacity:1;
    }
`
const StyledWrapper = styled.section`
  width: 100%;
  background-color: #e2ddd4;
  padding: 0.3rem 0;
  font-family: 'Roboto', sans-serif;
  .tl {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .items {
      overflow-y: scroll;
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      .item {
        display: flex;
        align-items: center;
        margin-bottom: 0.4rem;
        .content {
          position: relative;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid #eef;
          padding: 0.2rem;
          border-radius: 0.12rem;
          width: 4rem;
          .title {
            font-size: 0.3rem;
          }
          .date {
            margin: 0.1rem 0;
            font-style: oblique;
            font-size: 0.12rem;
            color: #666;
          }
          .desc {
            height: 1.5rem;
            overflow: scroll;
            line-height: 1.5;
            margin-top: 0.12rem;
            font-size: 0.15rem;
            display: flex;
            flex-direction: column;
            span {
              margin-bottom: 0.1rem;
            }
          }
        }
        &:nth-child(even) {
          flex-direction: row-reverse;
        }
        .heart {
          margin: 0 0.2rem;
          font-size: 0.3rem;
          animation: ${AniBeating} 1s ease-in-out infinite;
          animation-direction: alternate;
          animation-delay: inherit;
        }
        .pic {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          img {
            z-index: 8;
            border-radius: 50%;
            border: 3px solid #999;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
          }
        }
        @media screen and (max-width: 414px) {
          flex-direction: column-reverse;
          .heart {
            margin: 0.2rem 0;
          }
          &:nth-child(even) {
            flex-direction: column-reverse;
          }
        }
      }
    }
  }
`
const prefix =
  'https://g-store.oss-cn-beijing.aliyuncs.com/works/wedding/story.'
const items = [
  {
    title: 'Phần 1: Gặp gỡ',
    datetime: '01.10.2021',
    desc: `<span> Lần đầu tiên gặp nhau vào một  ngày tháng 10 năm 2021 tại thành phố Uông Bí xinh đẹp, chúng mình đã có cơ hội gặp gỡ, làm việc, nói chuyện và biết nhau từ đó.</span>`,
    picture: `https://res.cloudinary.com/dizzfltgh/image/upload/c_scale,w_500/v1701839146/str-1_ywfxj5.jpg`
  },
  {
    title: 'Phần 2: Yêu',
    datetime: '10.03.2022',
    desc: `<span>Sau thời gian biết đến nhau và xa cách, chỉ tương tác online, vào một dịp đặc biệt và bằng  một cách thần kì, chúng mình gặp lại nhau một lần nữa tại Tp Uông  Bí và chính thức bên nhau.</span>`,
    picture: `https://res.cloudinary.com/dizzfltgh/image/upload/c_scale,w_500/v1701839254/str-2.jpg`
  },
  {
    title: 'Phần 3: Cưới',
    datetime: '24.12.2023',
    desc: `<span>Sau những câu chuyện vui buồn có nhau, và luôn mồm câu:“ Anh chưa thấy ai điên như em”, tháng 12 này chúng mình quyết định về chung một nhà.</span>`,
    picture: `https://res.cloudinary.com/dizzfltgh/image/upload/c_scale,w_500/v1701839476/str-3.jpg`
  }
]
function createMarkup(html) {
  return { __html: html }
}

export default function Couple() {
  return (
    <StyledWrapper>
      <Title title="Câu chuyện của chúng mình" />
      <div className="tl">
        <ul className="items">
          {items.map(({ title, datetime, desc, picture }, idx) => (
            <li key={title} className="item">
              <div className="pic">
                <img src={picture} alt="picture" />
              </div>
              <i className="heart">💓</i>
              <div
                className="content"
                style={{ animationDelay: `0.${idx * 5}s` }}
              >
                <h4 className="title">{title}</h4>
                <time className="date">{datetime}</time>
                <p
                  className="desc"
                  dangerouslySetInnerHTML={createMarkup(desc)}
                ></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledWrapper>
  )
}
