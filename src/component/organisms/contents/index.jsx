import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.css'

import MediaModule from '../mediaModule/'

let MediaList = [
  {
    id: 0,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル1'
    },
    dl: {
      title: 'タイトル1',
      text: 'テキストテキストテキストテキストテキスト'
    }
  },
  {
    id: 1,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル2'
    },
    dl:{
      title: 'タイトル2',
      text: 'テキストテキストテキストテキストテキスト'
    }
  },
  {
    id: 2,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル3'
    },
    dl:{
      title: 'タイトル3',
      text: 'テキストテキストテキストテキストテキスト'
    }
  },
  {
    id: 3,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル4'
    },
    dl:{
      title: 'タイトル4',
      text: 'テキストテキストテキストテキストテキスト'
    }
  },
  {
    id: 4,
    thumbnail: {
      src: './public/img/react.png',
      alt: 'サムネイル5'
    },
    dl:{
      title: 'タイトル5',
      text: 'テキストテキストテキストテキストテキスト'
    }
  },
  {
    id: 5,
    thumbnail: {
      src: './public/img/react2.png',
      alt: 'サムネイル6'
    },
    dl:{
      title: 'タイトル6',
      text: 'テキストテキストテキストテキストテキスト'
    }
  }
];

export default class Contents extends React.Component {
  render() {
    return(
      <div className={styles.Contents}>
      {MediaList.map(type => (
        <MediaModule
          key={type.id} 
          thumbnail={type.thumbnail} 
          dl={type.dl} />
      ))}
      </div>
    );
  }
}
