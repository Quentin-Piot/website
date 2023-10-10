import React from 'react'
import { ListItem, Text, UnorderedList, useColorModeValue, VStack } from '@chakra-ui/react'
import BasicCard from 'components/cards/BasicCard'
import { useTranslation } from 'react-i18next'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import CustomChakraVerticalElement from 'components/timeline/CustomTimelineElement'
import 'react-vertical-timeline-component/style.min.css'

const Education: React.FC = () => {
  const { t } = useTranslation()
  return (
    <VerticalTimeline
      lineColor={useColorModeValue(
        'var(--chakra-colors-gray-900)',
        'var(--chakra-colors-gray-100)'
      )}
    >
      <CustomChakraVerticalElement date="2016-2021">
        <BasicCard subtitle="UTT" categorie={t('pages.education.utt.subtitle')}>
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text color={useColorModeValue('gray.700', 'gray.300')}>
              {t('pages.education.utt.title')}
            </Text>
            <Text style={{ fontWeight: 700 }}>{t('pages.education.followedCourses')}</Text>
            <UnorderedList w="100%" px={3}>
              <ListItem>{t('pages.education.utt.courses.course1')}</ListItem>
              <ListItem>{t('pages.education.utt.courses.course2')}</ListItem>
              <ListItem>{t('pages.education.utt.courses.course3')}</ListItem>
              <ListItem>{t('pages.education.utt.courses.course4')}</ListItem>
              <ListItem>{t('pages.education.utt.courses.course5')}</ListItem>
            </UnorderedList>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>
      <CustomChakraVerticalElement date="2019">
        <BasicCard subtitle="KAIST" categorie={t('pages.education.kaist.subtitle')}>
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text color={useColorModeValue('gray.700', 'gray.300')}>
              {t('pages.education.kaist.title')} <br />
              (QS :<strong> #41</strong>)
            </Text>
            <Text style={{ fontWeight: 700 }}>{t('pages.education.followedCourses')}</Text>
            <UnorderedList w="100%" px={3}>
              <ListItem>{t('pages.education.kaist.courses.course1')}</ListItem>
              <ListItem>{t('pages.education.kaist.courses.course2')}</ListItem>
              <ListItem>{t('pages.education.kaist.courses.course3')}</ListItem>
              <ListItem>{t('pages.education.kaist.courses.course4')}</ListItem>
            </UnorderedList>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>{' '}
      <CustomChakraVerticalElement date="2016">
        <BasicCard
          subtitle="Lycée Saint-Louis Villa Pia"
          categorie={t('pages.education.bac.subtitle')}
        >
          <VStack color={useColorModeValue('gray.900', 'gray.100')} textAlign="left">
            <Text color={useColorModeValue('gray.700', 'gray.300')}>
              {t('pages.education.bac.title')} <br />
            </Text>
          </VStack>
        </BasicCard>
      </CustomChakraVerticalElement>
    </VerticalTimeline>
  )
}

export default Education
