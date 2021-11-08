import Image from 'next/image';
import {
  IoHomeOutline,
  IoCompassOutline,
  IoPaperPlaneOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from 'react-icons/io5';

import { Row } from 'src/components/Grid';
import NavigateButton from 'src/components/buttons/NavigateButton';
import LogoButton from 'src/components/buttons/LogoButton';
import IconButton from 'src/components/buttons/IconButton';
import SearchBox from 'src/components/SearchBox';

import { Wrapper, Section } from './style';

function Header() {
  return (
    <Wrapper>
      <Row>
        <Section>
          <LogoButton href='/home'>
            <Image src='/images/logo.svg' width='64' height='24' />
          </LogoButton>
          <SearchBox />
        </Section>

        <Section>
          <NavigateButton href='/home'>
            <IoHomeOutline />
          </NavigateButton>
          <NavigateButton href='/random'>
            <IoCompassOutline />
          </NavigateButton>
          <NavigateButton href='/echo'>
            <IoPaperPlaneOutline />
          </NavigateButton>
        </Section>

        <Section>
          <IconButton>
            <IoHeartOutline />
          </IconButton>
          <NavigateButton href='/users/tiger'>
            <IoPersonCircleOutline />
          </NavigateButton>
        </Section>
      </Row>
    </Wrapper>
  );
}

export default Header;
