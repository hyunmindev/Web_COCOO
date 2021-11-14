import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';

import IconButton from 'src/components/buttons/IconButton';

import { SOCIAL_BUTTON_WIDTH, SOCIAL_BUTTON_HEIGHT, SOCIAL_ICON_SIZE } from 'src/globals/constants';

interface Props {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

function Social({ children, onClick }: Props) {
  return (
    <IconButton
      onClick={onClick}
      width={SOCIAL_BUTTON_WIDTH}
      height={SOCIAL_BUTTON_HEIGHT}
      size={SOCIAL_ICON_SIZE}
    >
      {children}
    </IconButton>
  );
}

Social.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Social.defaultProps = {
  onClick: () => {},
};

export default Social;
