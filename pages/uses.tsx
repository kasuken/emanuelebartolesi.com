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

const Uses: NextPage<SkillProps> = () => {
  return (
    <PageLayout title="Uses" keywords="uses">
      <PageSlideFade>
        <VStack align="start">
          <Header mt={0} mb={2}>
            Uses
          </Header>
          <Text
            fontSize={'xl'}
            color={useColorModeValue('gray.500', 'gray.200')}
            maxW="lg"
            textAlign="left"
          >
            A list of my favorite tools that I use every day.
          </Text>
        </VStack>
        <VStack zIndex={5} align="start">
          <Heading as="h3" size="lg" textAlign="left">
            Developer tools
          </Heading>

          <UnorderedList textAlign="left">
            <ListItem><a href="https://code.visualstudio.com" target='_blank'>Visual Studio Code</a> - my first editor during the day</ListItem>
            <ListItem><a href="https://www.visualstudio.com" target='_blank'>Visual Studio 2022</a> - switch to VS since theme are supported</ListItem>
            <ListItem><a href="https://github.com/microsoft/terminal" target='_blank'>Windows Terminal</a> - my primary terminal shell (with ohmyposh theme). I shared my settings <a href="https://gist.github.com/kasuken/9f79317531e783a58117abc0b71f5d03">here</a></ListItem>
            <ListItem><a href="https://www.jetbrains.com/rider/" target='_blank'>Rider</a> - my favorite IDE for full stack development</ListItem>
            <ListItem><a href="https://www.mozilla.org/it/firefox/developer/" target='_blank'>Firefox Developer</a> - the only browser I use to debug web application</ListItem>
            <ListItem><a href="https://www.gitkraken.com/" target='_blank'>GitKraken</a> - one of the best and complete Git client</ListItem>
            <ListItem><a href="https://desktop.github.com/" target='_blank'>GitHub Desktop</a> - I use this Git client when I work on opensource projects</ListItem>
          </UnorderedList>

          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--DyigdCu_--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://raw.githubusercontent.com/iSatishYadav/Visual-Studio-2022-will-write-code-for-you/master/images/VisualStudio2022IntelliCode.gif" alt="Visual Studio 2022" />

          <hr />

          <Heading as="h3" size="lg" textAlign="left">
            VSCode Extensions
          </Heading>

          <UnorderedList textAlign="left">
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=eliostruyf.vscode-front-matter" target='_blank'>Front Matter</a> - a must have extension if you have a blog or a website based on a static site generators like nextjs, gatsby, hugo, and more...</ListItem>
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai" target='_blank'>One Monokai Theme</a> - A cross between Monokai and One Dark theme. I use the same theme on VS2022.</ListItem>
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client" target='_blank'>Thunder Client</a> - a REST client inside Visual Studio Code</ListItem>
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=pnp.polacode" target='_blank'>Polacode</a> - Polaroid for your code 📸</ListItem>
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target='_blank'>Prettier</a> - Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.</ListItem>
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons" target='_blank'>VSCode Great Icons</a> - A big pack of icons (200+) for your files.</ListItem>
            <ListItem><a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.vs-keybindings" target='_blank'>Visual Studio Keymap</a> - For productivity reason I use the same keymap for VS Code, Visual Studio 2022 and Rider.</ListItem>
          </UnorderedList>

          I have many other extensions that I use frequently, but I don't list them here.

          <img src="https://github.com/rangav/thunder-client-support/blob/master/images/thunder-client.gif?raw=true" alt="Thunder Client" />

          <hr />

          <Heading as="h3" size="lg" textAlign="left">
            Useful apps
          </Heading>

          <UnorderedList textAlign="left">
            <ListItem><a href="https://www.notion.so/" target='_blank'>Notion</a> - Literally I have all my life inside Notion. From my todo to my content calendar.</ListItem>
            <ListItem><a href="https://todo.microsoft.com/tasks/" target='_blank'>Microsoft ToDo</a> - I use ToDo just for my morning routine with repetitive tasks.</ListItem>
            <ListItem><a href="https://lastpass.com/" target='_blank'>LastPass</a> - My only one and favorite credentials manager that I use. I use it for generating passowords for Azure Services and stuff like that.</ListItem>
            <ListItem><a href="https://app.grammarly.com/" target='_blank'>Grammarly</a> - At the moment I am using the free version of this amazing service, but I reccomend to you to use the paid version.</ListItem>
          </UnorderedList>

          <img src="https://media2.giphy.com/media/3o7btNQXpJisSAgPpC/giphy.gif" alt="Notion" />

          <hr />

        </VStack>
      </PageSlideFade>
    </PageLayout>
  );
};

export default Uses;
