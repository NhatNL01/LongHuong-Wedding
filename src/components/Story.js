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
    title: 'Phần 1: Tôi yêu',
    datetime: '2022.05.06',
    desc: `<span>“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” – John Green. 
    </span><span>“Loved you yesterday, love you still, always have, always will. ” – Elaine Davis</span>
    <span>“I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.” – Angelita Lim. </span>`,
    picture: `${prefix}first.jpg?x-oss-process=image/resize,w_300`
  },
  {
    title: 'Phần 2: Bạn yêu',
    datetime: '2022.09.23',
    desc: `<span>“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” – John Green. </span>
    <span>“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.” – Elizabeth Barrett Browning. </span>
    <span>“The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.” – Marilyn Monroe. </span>
    <span>“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.” – Maya Angelou. </span>
    <span>“I’ll be loving you, always with a love that’s true” – Patsy Cline. </span>
    <span>“Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.” – Unknown. </span>
    <span>“I need you like a heart needs a beat.” – One Republic. </span>
    <span>“If I know what love is, it is because of you.” – Hermann Hesse. </span>
    <span>“I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.” – Leo Christopher. </span>
    <span>“Take my hand, take my whole life too. For I can’t help falling in love with you.” – Elvis Presley </span>`,
    picture: `${prefix}bws.png?x-oss-process=image/resize,w_300`
  },
  {
    title: 'Phần 3: Chúng ta yêu',
    datetime: '2020.06.06',
    desc: `<span>“As he read, I fell in love the way you fall asleep: slowly, and then all at once.” – John Green. </span>
    <span>“I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.” – Elizabeth Barrett Browning. </span>
    <span>“The real lover is a man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.” – Marilyn Monroe. </span>
    <span>“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.” – Maya Angelou. </span>
    <span>“I’ll be loving you, always with a love that’s true” – Patsy Cline. </span>
    <span>“Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.” – Unknown. </span>
    <span>“I need you like a heart needs a beat.” – One Republic. </span>
    <span>“If I know what love is, it is because of you.” – Hermann Hesse. </span>
    <span>“I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.” – Leo Christopher. </span>
    <span>“Take my hand, take my whole life too. For I can’t help falling in love with you.” – Elvis Presley </span>`,
    picture: `${prefix}banjia.jpg?x-oss-process=image/resize,w_300`
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
