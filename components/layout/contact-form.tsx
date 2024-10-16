'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import { useFormState, useFormStatus } from 'react-dom'
import { submit } from '@/app/actions'
import { useEffect, useState } from 'react'
import { saEvent } from '@/utils/analytics-utils'
import { useTranslation } from '@/app/i18n/client'

export default function ContactForm({ lng }: { lng: string }) {
  const { t } = useTranslation(lng)
  const { pending } = useFormStatus()
  const [formKey, setFormKey] = useState(0)
  const [state, formAction] = useFormState(submit, {
    success: '',
    error: '',
  })

  useEffect(() => {
    if (state.success) {
      setFormKey((prevKey) => prevKey + 1)
    }
  }, [state.success])

  return (
    <form key={formKey} className="space-y-4" action={formAction}>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="col-span-1 space-y-2">
            <Label htmlFor="name">{t('contact.name')}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t('contact.namePlaceholder')}
              disabled={pending}
            />
          </div>
          <div className="col-span-1 space-y-2">
            <Label htmlFor="email">{t('contact.email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('contact.emailPlaceholder')}
              disabled={pending}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t('contact.message')}</Label>
          <Textarea
            id="message"
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            className="min-h-[120px]"
            disabled={pending}
          />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Button
            variant="default"
            aria-disabled={pending}
            onClick={() => {
              saEvent('click_contact_button')
            }}
          >
            {pending ? <Spinner className="h-4 w-4" /> : t('contact.submit')}
          </Button>
          {state.success && <p className="text-primary">{t(state.success)}</p>}
          {state.error && <p className="text-red-500">{t(state.error)}</p>}
        </div>
      </div>
    </form>
  )
}
