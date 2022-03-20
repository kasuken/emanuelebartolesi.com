import * as React from 'react';
import { VStack, Text, useColorModeValue, HStack } from '@chakra-ui/react';
import { PageSlideFade } from 'components/shared/animations/page-transitions';
import Header from 'components/shared/header';
import LiveData from 'components/open-source/live-data';
import PageLayout from 'components/layouts/pageLayout';

const TURQUOISE = '#06b6d4';

const RepositoriesList = () => {
  return (
    <PageLayout title="Open-source" keywords="A list of open source projects">
      <PageSlideFade>
        <VStack align="start" spacing={3}>
          <HStack justifyContent={'space-between'} width={'100%'}>
            <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Open Source
            </Header>
          </HStack>
          <Text color={useColorModeValue('gray.500', 'gray.200')} textAlign="left">
            This page lists some of the open source repositories I have published or contributed to on GitHub 🧑‍💻. <br />

            You can find more repositories on my GitHub profile: <a href="https://github.com/kasuken" target="_blank">https://github.com/kasuken</a>
          </Text>
        </VStack>
        <LiveData />
      </PageSlideFade>
    </PageLayout>
  );
};

export default RepositoriesList;
