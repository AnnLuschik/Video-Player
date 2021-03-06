import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PauseButton = ({ onClick }) => (
  <StyledButton onClick={onClick} />
)

PauseButton.propTypes = {
  onClick: PropTypes.func,
};

const StyledButton = styled.button`
  position: relative;
  width: 20px;
  margin: 0 5px;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    border-right: 20px double #ffffff;
  }
`;

export default PauseButton;
