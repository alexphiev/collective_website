'use server'

import { WebClient } from '@slack/web-api'

export interface ActionState {
  success: string
  error: string
}

export async function submit(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // Validation for non-empty fields
  if (!name || !email || !message) {
    return {
      success: '',
      error: 'contact.validationErrorTitle',
    }
  }

  const slackMessage = `New contact request received!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  try {
    const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

    // Send message to Slack
    const result = await slack.chat.postMessage({
      channel: 'contact',
      text: slackMessage,
    })

    if (result.ok) {
      return {
        success: 'contact.successTitle',
        error: '',
      }
    } else {
      return {
        success: '',
        error: 'contact.errorTitle',
      }
    }
  } catch (error) {
    console.error('Error sending message to Slack:', error)
    return {
      success: '',
      error: 'contact.errorTitle',
    }
  }
}
