import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import resources from 'utils/translation/languages'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

const languages = Object.keys(resources)

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation()
  const [selectedLanguageIndex, setSelectedLanguageIndex] = useState(0)

  const handleChange = useCallback(
    async (index: number) => {
      await i18n.changeLanguage(languages[index], (err) => {
        if (err) return console.log('Translation: something went wrong loading', err)
      })
    },
    [i18n]
  )

  useEffect(() => {
    let index = languages.indexOf(i18n.language)
    if (index === -1) index = 0
    if (selectedLanguageIndex !== index) {
      setSelectedLanguageIndex(index)
    }
  }, [i18n.language, selectedLanguageIndex])

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FiChevronDown />} mx={2} suppressHydrationWarning>
        {i18n.language?.split('-')[0]?.toLocaleUpperCase()}
      </MenuButton>
      <MenuList>
        {languages.map((language: string, i) => {
          return (
            <MenuItem
              suppressHydrationWarning
              key={i}
              onClick={() => handleChange(i)}
              _dark={{
                bg: selectedLanguageIndex === i ? 'white' : 'gray.700',
                color: selectedLanguageIndex === i ? 'black' : 'white',
                _hover: { bg: selectedLanguageIndex === i ? 'white' : 'gray.500' },
              }}
              _light={{
                bg: selectedLanguageIndex === i ? 'gray.700' : 'grey.white',
                color: selectedLanguageIndex === i ? 'white' : 'black',
                _hover: { bg: selectedLanguageIndex === i ? 'gray.700' : 'gray.300' },
              }}
            >
              {language.split('-')[0].toUpperCase()}
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default LanguageSelector
