import Image from 'next/image';
import { BiHomeAlt, BiSearch } from 'react-icons/bi';
import { ImCompass2 } from 'react-icons/im';
import { FaPaperPlane, FaHeart } from 'react-icons/fa';
import { IoPersonCircle } from 'react-icons/io5';

import { Row } from 'src/components/Grid';
import NavigateButton from 'src/components/buttons/NavigateButton';
import LogoButton from 'src/components/buttons/LogoButton';

import { Wrapper, Section } from './style';

function Header() {
  return (
    <Wrapper>
      <Row>
        <Section>
          <LogoButton href='/home'>
            <Image src='/images/logo.svg' width='64' height='24' />
          </LogoButton>
          <div className='input-container'>
            <input type='text' placeholder='search' />
            <BiSearch size='20' />
          </div>
        </Section>

        <Section>
          <NavigateButton href='/home'>
            <BiHomeAlt />
          </NavigateButton>
          <NavigateButton href='/random'>
            <ImCompass2 />
          </NavigateButton>
          <NavigateButton href='/echo'>
            <FaPaperPlane />
          </NavigateButton>
        </Section>

        <Section>
          <button type='button'>
            <FaHeart size='25' />
          </button>
          <NavigateButton href='/users/tiger'>
            <IoPersonCircle size='30' />
          </NavigateButton>
        </Section>
      </Row>
    </Wrapper>
  );
}

export default Header;
