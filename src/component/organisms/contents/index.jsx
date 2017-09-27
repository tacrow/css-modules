import React from 'react';
import styles from './style.css';

import MediaModule from '../mediaModule/';

const MediaList = [
  {
    id: 0,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル1',
      url: '',
    },
    dl: {
      title: 'タイトル1',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 1,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル2',
      url: '',
    },
    dl: {
      title: 'タイトル2',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 2,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル3',
      url: '',
    },
    dl: {
      title: 'タイトル3',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 3,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル4',
      url: '',
    },
    dl: {
      title: 'タイトル4',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 4,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル5',
      url: '',
    },
    dl: {
      title: 'タイトル5',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 5,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル6',
      url: '',
    },
    dl: {
      title: 'タイトル6',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 6,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル7',
      url: '',
    },
    dl: {
      title: 'タイトル7',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 7,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル8',
      url: '',
    },
    dl: {
      title: 'タイトル8',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 8,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル9',
      url: '',
    },
    dl: {
      title: 'タイトル9',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
  {
    id: 9,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル10',
      url: '',
    },
    dl: {
      title: 'タイトル10',
      text: 'テキストテキストテキストテキストテキスト',
    },
  },
];

export default class Contents extends React.Component {
  render() {
    return (
      <div className={styles.Contents}>
        {MediaList.map(type => (
          <MediaModule
            key={type.id}
            thumbnail={type.thumbnail}
            dl={type.dl}
          />
        ))}
      </div>
    );
  }
}
