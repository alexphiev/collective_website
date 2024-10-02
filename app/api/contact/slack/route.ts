import { NextResponse } from 'next/server'
import { WebClient } from '@slack/web-api'

// Initialize the Slack Web Client inside the POST method
const slack = new WebClient(process.env.SLACK_BOT_TOKEN)

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Send message to Slack
    const result = await slack.chat.postMessage({
      channel: 'contact',
      text: message,
    })

    if (result.ok) {
      return NextResponse.json({ message: 'Message sent successfully' })
    } else {
      throw new Error('Failed to send message to Slack')
    }
  } catch (error) {
    console.error('Error sending message to Slack:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
