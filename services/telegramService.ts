// Telegram Bot Configuration from environment variables
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  dateTime: string;
  message?: string;
}

/**
 * Send booking notification to Telegram
 */
export const sendBookingToTelegram = async (booking: BookingData): Promise<boolean> => {
  try {
    // Format the message with booking details
    const message = `
🍽️ *NEW TABLE BOOKING*

👤 *Name:* ${booking.name}
📧 *Email:* ${booking.email}
📱 *Phone:* ${booking.phone || 'Not provided'}
👥 *Guests:* ${booking.guests}
📅 *Date & Time:* ${formatDateTime(booking.dateTime)}
${booking.message ? `\n💬 *Special Requests:*\n${booking.message}` : ''}

---
_Received at ${new Date().toLocaleString('en-US', { timeZone: 'Africa/Addis_Ababa' })}_
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Telegram API Error:', data);
      return false;
    }

    return data.ok;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
};

/**
 * Format datetime for better readability
 */
function formatDateTime(dateTimeString: string): string {
  if (!dateTimeString) return 'Not specified';
  
  try {
    const date = new Date(dateTimeString);
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Africa/Addis_Ababa'
    });
  } catch {
    return dateTimeString;
  }
}
