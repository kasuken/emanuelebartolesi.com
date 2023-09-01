import * as React from 'react';
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  Heading,
  UnorderedList
} from '@chakra-ui/react';
import { NextPage } from 'next';
import Section from 'components/skills/section';
import Header from 'components/shared/header';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import PageLayout from '../components/layouts/pageLayout';
import { SkillProps } from 'interfaces/interface';

const Newsletter: NextPage<SkillProps> = () => {
  return (
    <PageLayout title="Newsletter" keywords="newsletter">
      <PageSlideFade>
        <VStack align="start">
          <Header mt={0} mb={2}>
            Newsletter
          </Header>
          <Text
            fontSize={'xl'}
            color={useColorModeValue('gray.500', 'gray.200')}
            textAlign="left"
          >
            I send out a newsletter every <b>two weeks</b> or so with things I've been working on, things I've been reading, and <b>interesting things</b> I've found on the internet.
            <br />
            Content is usually about software development, design, and product management. Sometimes I write about other things like music, or life in general.

            <br />
            <br />

            I won't spam though, I promise. <b>You can unsubscribe at any time</b>. I also won't share your email with anyone else.
            <br />
            If you're interested in any of that, sign up with the link below!

            <br />
            <br />

            <center>
              <a href="https://buttondown.email/kasuken" target="_blank">Subscribe to my newsletter</a>
            </center>

            <br />

            <center>
              <a href="https://buttondown.email/kasuken/archive" target="_blank">View previous issues</a> - <a href="https://buttondown.email/kasuken/rss" target="_blank">Subscribe via rss</a>
            </center>

          </Text>
        </VStack>
        <VStack align="start">
          <Header mt={6} mb={2}>
            Sponsor
          </Header>
          <Text
            fontSize={'xl'}
            color={useColorModeValue('gray.500', 'gray.200')}
            textAlign="left"
          >
            I'm currently looking for sponsors for my newsletter. If you're interested in sponsoring, please <a href="mailto:bartolesiemanuele@hotmail.com?subject=sponsorship for newsletter">send me an email</a>!

            <br />
            <br />

            The format of the sponsorship is very easy and straightforward. You'll get a short paragraph at the top of the newsletter, with a link to your website. I'll also include a short description of your product or service, and a link to your website at the bottom of the newsletter.
                      
            <br />
            <br />

            The newsletters will be included in the archive, so you'll get a permanent link to your website from the archive page as well.

            <br />
            <br />

            If everything sounds good, please <a href="mailto:bartolesiemanuele@hotmail.com?subject=sponsorship for newsletter">send me an email</a> and we can discuss the details!

            At the moment I have <b>1000+ subscribers</b>, and the newsletter is growing every week. I'm also getting a very high open rate, so you'll get a lot of exposure for your product or service.
            <br />
            Email open rates are around 65%, and click rates are around 24%.

            <br />
            <br />

            Thanks for your interest!

          </Text>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export default Newsletter;