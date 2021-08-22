import React, { useState } from 'react';
import styled from 'styled-components';
import ANIMATION_TIME from '../data/config';
import useInterval from '../hooks/useInterval';

export default function TextAnimation() {
  // const cookingArr = 'Cooking'.split('');
  // const buildArr = 'Building'.split('');
  const cookingArr = 'Cooking';
  const buildArr = 'Building';
  const [state, setState] = useState(true);

  function switchText() {
    setState(p => !p);
  }
  useInterval(switchText, 1000 * ANIMATION_TIME);
  const items = state ? cookingArr : buildArr;

  return <Wrapper>{items}</Wrapper>;
}

const Wrapper = styled.span``;
