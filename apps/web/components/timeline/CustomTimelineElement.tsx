import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useColorModeValue } from '@chakra-ui/react'
import { FaSchool } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'

interface ICustomChakraVerticalElementProps {
  children: React.ReactNode
  date: string
  experience?: boolean
}

const CustomChakraVerticalElement: React.FC<ICustomChakraVerticalElementProps> = ({
  children,
  date = '2019',
  experience = false,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      iconStyle={{
        background: useColorModeValue(
          'var(--chakra-colors-gray-300)',
          'var(--chakra-colors-gray-700)'
        ),
        color: useColorModeValue('var(--chakra-colors-gray-900)', 'var(--chakra-colors-gray-100)'),
      }}
      icon={experience ? <MdComputer /> : <FaSchool />}
      contentStyle={{
        background: useColorModeValue(
          'var(--chakra-colors-gray-100)',
          'var(--chakra-colors-gray-900)'
        ),
        color: useColorModeValue('var(--chakra-colors-gray-900)', 'var(--chakra-colors-gray-100)'),
        padding: 0,
      }}
    >
      {children}
    </VerticalTimelineElement>
  )
}
export default CustomChakraVerticalElement
