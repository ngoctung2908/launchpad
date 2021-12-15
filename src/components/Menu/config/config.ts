import { MenuItemsType } from '@bitcityz/uikit'
import { ContextApi } from 'contexts/Localization/types'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Launchpad'),
    to: '/launchpad',
    items: [],
  },
  {
    label: t('Launchpool'),
    to: '/Launchpool',
    items: [],
  },
  {
    label: t('Github'),
    href: 'https://github.com',
    items: [],
  },
  {
    label: t('Document'),
    to: '/document',
    items: [],
  },
]

export default config
