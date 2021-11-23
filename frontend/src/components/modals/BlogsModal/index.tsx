import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import PropTypes from 'prop-types';

import ModalCommon from 'src/components/modals/Common';
import ButtonCommon from 'src/components/buttons/Common';
import { Col } from 'src/components/Grid';

import { Fetcher } from 'src/utils';

import { EXTERNAL_MODAL_HEIGHT } from 'src/globals/constants';

import { BlogType } from 'src/types';

import userAtom from 'src/recoil/user';

import { Wrapper, Blogs } from './style';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelect: (problem: BlogType) => void;
  onClose: () => void;
}

function BlogsModal({ onClose, onSelect }: Props) {
  const user = useRecoilValue(userAtom);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { data: blogs } = useQuery(['blogs', user._id], () => Fetcher.getUserBlogs(user));

  const handleConfirm = () => {
    onSelect(blogs![selectedIndex]);
  };

  const handleBlogClick = (index: number) => {
    if (index === selectedIndex) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <Wrapper>
      <ModalCommon
        onClose={onClose}
        close='취소'
        confirm='선택'
        height={EXTERNAL_MODAL_HEIGHT}
        onConfirm={handleConfirm}
        disabled={selectedIndex === -1}
      >
        <Blogs>
          {(blogs ?? [])!.map(({ postID, postTitle }, index) => (
            <Col key={postID}>
              <ButtonCommon
                onClick={() => handleBlogClick(index)}
                clicked={index === selectedIndex}
              >
                {postTitle}
              </ButtonCommon>
            </Col>
          ))}
        </Blogs>
      </ModalCommon>
    </Wrapper>
  );
}

BlogsModal.propTyes = {
  onClose: PropTypes.func.isRequired,
};

export default BlogsModal;
