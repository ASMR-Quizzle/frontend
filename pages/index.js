import Home from './home/index.js';
import React from 'react';
import MetaComponent from '../components/meta-tags-component/index.js';

export default function Quizzle() {
  return <><MetaComponent page="Home" /><Home /></>;
}
