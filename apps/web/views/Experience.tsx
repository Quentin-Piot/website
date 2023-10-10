import React from 'react'
import { ListItem, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react'
import BasicCard from 'components/cards/BasicCard'
import { useTranslation } from 'react-i18next'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import CustomChakraVerticalElement from 'components/timeline/CustomTimelineElement'
import 'react-vertical-timeline-component/style.min.css'

const Experience: React.FC = () => {
  const { t } = useTranslation()
  return (
    <VerticalTimeline
      lineColor={useColorModeValue(
        'var(--chakra-colors-gray-900)',
        'var(--chakra-colors-gray-100)'
      )}
    >
      <CustomChakraVerticalElement date="08/2021 - 2022" experience>
        <BasicCard
          subtitle="SPARKMATE"
          categorie={t('pages.experience.sparkmate.subtitle')}
          logo="/images/sparkmate-logo.jpeg"
        >
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text
              style={{ fontWeight: 700 }}
              color={useColorModeValue('gray.700', 'gray.300')}
              pb={3}
            >
              {t('pages.experience.sparkmate.title')}
            </Text>
            <Text style={{ fontWeight: 700 }}>{t('pages.experience.description')}</Text>
            <UnorderedList w="100%" px={3}>
              {t('pages.experience.sparkmate.description')
                .split('•')
                .map((text, i) => (
                  <ListItem key={i}>{text}</ListItem>
                ))}
            </UnorderedList>
            <Text style={{ fontWeight: 700 }}>{t('pages.experience.mainStacks')}</Text>
            <UnorderedList w="100%" px={3}>
              <ListItem>React, Next.js, Redux, Typescript</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>Node.js, Hapi, Strapi, NestJs</ListItem>é<ListItem>GraphQL, REST</ListItem>
              <ListItem>PostgreSQL, MongoDB</ListItem>
              <ListItem>GCP, AWS, DOCKER, GitLab CI/CD</ListItem>
            </UnorderedList>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>
      <CustomChakraVerticalElement date="01/2021-07/2021" experience>
        <BasicCard
          subtitle="Dassault Systèmes"
          categorie={t('pages.experience.ds.subtitle')}
          logo="/images/ds-logo.jpeg"
        >
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text
              style={{ fontWeight: 700 }}
              color={useColorModeValue('gray.700', 'gray.300')}
              pb={3}
            >
              {t('pages.experience.ds.title')}
            </Text>
            <Text style={{ fontWeight: 700 }}>{t('pages.experience.description')}</Text>
            <UnorderedList w="100%" px={3}>
              {t('pages.experience.ds.description')
                .split('•')
                .map((text, i) => (
                  <ListItem key={i}>{text}</ListItem>
                ))}
            </UnorderedList>
            <Text style={{ fontWeight: 700 }}>{t('pages.experience.mainStacks')}</Text>
            <UnorderedList w="100%" px={3}>
              <ListItem>React, Vue.js, d3.js, Typescript</ListItem>
              <ListItem>Nest.js, Express.js</ListItem>
              <ListItem>REST, AWS</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>AWS, DOCKER, CI/CD</ListItem>
            </UnorderedList>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>
      <CustomChakraVerticalElement date="01/2020-07/2020" experience>
        <BasicCard
          subtitle="Air France"
          categorie={t('pages.experience.af.subtitle')}
          logo="/images/af-logo.jpeg"
        >
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text
              style={{ fontWeight: 700 }}
              color={useColorModeValue('gray.700', 'gray.300')}
              pb={3}
            >
              {t('pages.experience.af.title')}
            </Text>
            <Text style={{ fontWeight: 700 }}>{t('pages.experience.description')}</Text>
            <UnorderedList w="100%" px={3}>
              {t('pages.experience.af.description')
                .split('•')
                .map((text, i) => (
                  <ListItem key={i}>{text}</ListItem>
                ))}
            </UnorderedList>
            <Text style={{ fontWeight: 700 }}>{t('pages.experience.mainStacks')}</Text>
            <UnorderedList w="100%" px={3}>
              <ListItem>Angular</ListItem>
              <ListItem>Electron</ListItem>
              <ListItem>Java, Kotlin, Spring</ListItem>
              <ListItem>REST</ListItem>
              <ListItem>PostgreSQL</ListItem>
            </UnorderedList>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>
      <CustomChakraVerticalElement date="02/2017" experience>
        <BasicCard
          subtitle="Alfa Romeo - Fiat"
          categorie={t('pages.experience.ar.subtitle')}
          logo="/images/ar-logo.jpeg"
        >
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text
              style={{ fontWeight: 700 }}
              color={useColorModeValue('gray.700', 'gray.300')}
              pb={3}
            >
              {t('pages.experience.ar.title')}
            </Text>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>
    </VerticalTimeline>
  )
}

export default Experience
