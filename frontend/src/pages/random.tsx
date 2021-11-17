import Head from 'next/head';
import { useSetRecoilState } from 'recoil';
import { useQuery } from 'react-query';

import Timeline from 'src/components/Timeline';
import Header from 'src/components/Header';
import { Col } from 'src/components/Grid';

import { RANDOM_DESCRIPTION } from 'src/globals/descriptions';

import { Page } from 'src/styles';

import postsAtom from 'src/recoil/posts';

import { Fetcher } from 'src/utils';

function Random() {
  const setPosts = useSetRecoilState(postsAtom);
  const { isFetched } = useQuery(['random', 'posts'], () => Fetcher.getRandomPosts(), {
    onSuccess: (randomPosts) => setPosts(randomPosts),
  });
  return (
    <div>
      <Head>
        <title>COCOO</title>
        <meta name='description' content={RANDOM_DESCRIPTION} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Page.Main>
        <Col alignItems='center'>{isFetched && <Timeline />}</Col>
      </Page.Main>
      <footer />
    </div>
  );
}

export default Random;
