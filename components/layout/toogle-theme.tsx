import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from '@/app/i18n/client'

export const ToggleTheme = ({ lng }: { lng: string }) => {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation(lng)
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size="sm"
      variant="ghost"
      className="justify-start hover:bg-transparent/20"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
        <span className="block lg:hidden">{t('theme.dark')}</span>
      </div>

      <div className="hidden gap-2 dark:flex">
        <Sun className="size-5" />
        <span className="block lg:hidden">{t('theme.light')}</span>
      </div>

      <span className="sr-only">{t('theme.toggle')}</span>
    </Button>
  )
}
