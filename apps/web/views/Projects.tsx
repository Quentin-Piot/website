import React from 'react'

import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

import ChakraCarousel from 'components/caroussel/Caroussel'
import BasicCard from 'components/cards/BasicCard'
import { useTranslation } from 'react-i18next'
import NavItem from 'components/navbar/NavItem'
import { AiFillPlayCircle } from 'react-icons/ai'

interface ICarousselItemProps {
  children: React.ReactNode
  categorie: string
  subtitle: string
}

const CustomProjectTab = ({ project }: { project: string }) => {
  const borderColor = useColorModeValue('gray.400', 'gray.100')
  const { t } = useTranslation()
  return (
    <Box borderWidth={1} width="100%" borderColor={borderColor}>
      {['duration', 'numberOfPeople', 'primaryRole', 'skillsUsed', 'lessonsLearned'].map(
        (value) => (
          <HStack
            borderBottom="1px solid"
            borderColor={borderColor}
            key={value}
            minHeight={12}
            px={5}
          >
            <Box w={100} borderRight="1px solid" borderColor={borderColor} height={'100%'} py={3}>
              {t(`pages.projects.tab.categories.${value}`)}
            </Box>
            <Box flex={2} px={5}>
              {t(`pages.projects.${project}.tab.categories.${value}`)}
            </Box>
          </HStack>
        )
      )}
    </Box>
  )
}
const CarouselItem: React.FC<ICarousselItemProps> = ({ children, categorie, subtitle }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.900')
  const textColor = useColorModeValue('gray.900', 'gray.100')
  return (
    <Flex
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      justifyContent="space-between"
      flexDirection="column"
      overflow="hidden"
      color={textColor}
      bg={bgColor}
      rounded={5}
      flex={1}
    >
      <BasicCard subtitle={subtitle} categorie={categorie}>
        {children}
      </BasicCard>
    </Flex>
  )
}
const Projects = () => {
  const { t } = useTranslation()

  return (
    <ChakraCarousel gap={32}>
      <CarouselItem categorie={'Rust game'} subtitle={'Rhythm game'}>
        <Tabs isFitted variant="enclosed" py={5}>
          <TabList mb="1em">
            <Tab>Description</Tab>
            <Tab>Demo</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex flex={1} flexDirection={{ base: 'column', md: 'row' }}>
                <Image
                  userSelect="none"
                  src="images/rust.png"
                  alt="rustlogo"
                  height="50vh"
                  display={{ base: 'none', md: 'flex' }}
                />
                <VStack pl={{ base: 0, md: 10 }}>
                  <Heading>{t('pages.projects.rhythm-game.title')}</Heading>
                  <Text pt={3} fontSize={16}>
                    {t('pages.projects.rhythm-game.description')}
                  </Text>
                  <CustomProjectTab project="rhythm-game" />
                </VStack>
              </Flex>
            </TabPanel>
            <TabPanel>
              <NavItem
                icon={AiFillPlayCircle}
                route="https://rhythm-game.quentinpiot.com/"
                active={false}
                suppressHydrationWarning
                openInNewTab
                minWidth="100px"
              >
                Rust Rhythm Game : Web version
              </NavItem>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CarouselItem>
      <CarouselItem categorie={'Android application'} subtitle={'Safe Trip'}>
        <Tabs isFitted variant="enclosed" py={5}>
          <TabList mb="1em">
            <Tab>Description</Tab>
            <Tab>Demo</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex flex={1} flexDirection={{ base: 'column', md: 'row' }}>
                <Image
                  userSelect="none"
                  src="images/screenshot-safe-trip.png"
                  alt="safe trip logo"
                  height="50vh"
                  display={{ base: 'none', md: 'flex' }}
                />
                <VStack pl={{ base: 0, md: 10 }}>
                  <Heading>{t('pages.projects.safeTrip.title')}</Heading>
                  <Text pt={3} fontSize={16}>
                    {t('pages.projects.safeTrip.description')}
                  </Text>
                  <CustomProjectTab project="safeTrip" />
                </VStack>
              </Flex>
            </TabPanel>
            <TabPanel>
              <AspectRatio maxW="100%" maxH={'60vh'} ratio={1}>
                <iframe
                  src="https://www.youtube-nocookie.com/embed/bmwq72qgbX0"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </AspectRatio>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CarouselItem>
      <CarouselItem categorie={'React Web application'} subtitle={'Football Match'}>
        <Flex flex={1} py={5} flexDirection={{ base: 'column', md: 'row' }}>
          <Image
            src="images/screenshot-football-match.png"
            alt="football match logo"
            userSelect="none"
            maxWidth={{ base: '100vw', md: '40vw' }}
            display={{ base: 'none', md: 'flex' }}
          />
          <VStack pl={{ base: 0, md: 10 }}>
            <Heading>{t('pages.projects.footballMatch.title')}</Heading>
            <Text pt={3} fontSize={16}>
              {t('pages.projects.footballMatch.description')}
            </Text>
            <CustomProjectTab project="safeTrip" />
          </VStack>
        </Flex>
      </CarouselItem>
      <CarouselItem categorie={'Arduino / Kotlin'} subtitle={'Inaudible communication'}>
        <Flex flex={1} py={5} flexDirection={{ base: 'column', md: 'row' }}>
          <VStack pt={5}>
            <Image
              src="images/screenshot-inaudible.png"
              alt="inaudible sounds logo"
              userSelect="none"
              maxHeight={{ base: '100vw', md: '40vh' }}
              display={{ base: 'none', md: 'flex' }}
            />
            <Image
              src="images/screenshot-inaudible-2.png"
              alt="inaudible sounds logo"
              userSelect="none"
              maxHeight={{ base: '100vw', md: '30vh' }}
              maxWidth={{ base: '100vw', md: '25vw' }}
              display={{ base: 'none', md: 'flex' }}
            />
          </VStack>

          <VStack pl={{ base: 0, md: 10 }}>
            <Heading>{t('pages.projects.inaudibleSounds.title')}</Heading>
            <Text pt={3} fontSize={16}>
              {t('pages.projects.inaudibleSounds.description')}
            </Text>
            <CustomProjectTab project="inaudibleSounds" />
          </VStack>
        </Flex>
      </CarouselItem>
    </ChakraCarousel>
  )
}
export default Projects
