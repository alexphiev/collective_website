export async function sendMessageToSlack(message: string): Promise<void> {
  try {
    const response = await fetch("/api/contact/slack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      // Handle different status codes
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    console.log("Message sent successfully to Slack");
  } catch (error) {
    console.error("Failed to send message to Slack:", error);
    // Optionally, you can rethrow the error or handle it in another way
    throw error;
  }
}
