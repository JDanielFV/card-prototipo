import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.img`
  height: 50px;
  margin: 10px;
`;

const Logo = ({ src, alt }) => (
  <LogoWrapper src={src} alt={alt} />
);

export default Logo;
