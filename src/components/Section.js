import React from 'react'
import styled, { css } from 'styled-components'
import { grayscale } from '../utils/colors'

import hex from '../assets/hex.png'

const Section = styled.section`
  padding: 4rem 0 5rem 0;

  ${props => props.dark && css`
    background-color: ${grayscale('dark')};
    background-image: url(${hex});
    background-size: cover;
    color: ${grayscale('white')};
  `}

  ${props => props.light && css`
    background-color: ${grayscale('light')};
    border-bottom: 1px solid ${grayscale(7)};
  `}
`

export default Section