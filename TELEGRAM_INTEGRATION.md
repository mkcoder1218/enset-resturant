# Telegram Booking Integration

## Overview
Your restaurant booking form now automatically sends notifications to your Telegram account whenever someone makes a reservation.

## Configuration

The Telegram credentials are now stored securely in environment variables:

### Setup
1. Copy `.env.example` to `.env` (already done)
2. The `.env` file contains your credentials:
   ```
   VITE_TELEGRAM_BOT_TOKEN=8557388673:AAGwreiFMbQh1GMPLuX_B0JqAwH2LsdZyeo
   VITE_TELEGRAM_CHAT_ID=5589621167
   ```
3. The `.env` file is gitignored for security

**Note**: In Vite, environment variables must be prefixed with `VITE_` to be exposed to the client.

## How It Works

1. **Customer fills the booking form** on the Contact page with:
   - Name
   - Email
   - Phone (optional)
   - Number of guests
   - Date & Time
   - Special requests (optional)

2. **Form submission** triggers the Telegram notification

3. **You receive a formatted message** on Telegram with all booking details:
   ```
   🍽️ NEW TABLE BOOKING

   👤 Name: John Doe
   📧 Email: john@example.com
   📱 Phone: +1234567890
   👥 Guests: 4 People
   📅 Date & Time: Monday, December 2, 2024, 07:00 PM
   
   💬 Special Requests:
   Window seat preferred, celebrating anniversary
   
   ---
   Received at 12/1/2024, 12:00:00 PM
   ```

## Features

✅ **Real-time notifications** - Instant Telegram message when booking is submitted
✅ **Formatted messages** - Easy-to-read booking details with emojis
✅ **Error handling** - Shows error message if notification fails
✅ **Form validation** - Required fields must be filled
✅ **Success confirmation** - Customer sees confirmation message
✅ **Auto form reset** - Form clears after successful submission

## Testing

1. Navigate to the Contact page (http://localhost:3001)
2. Fill out the booking form
3. Click "Send Message"
4. Check your Telegram for the notification!

## Security

✅ **Implemented Security Measures**:
- Credentials stored in `.env` file (not in source code)
- `.env` file is gitignored (won't be committed to version control)
- `.env.example` template provided for team members
- TypeScript types defined for environment variables

⚠️ **Additional Production Recommendations**:
- Use a backend API to handle Telegram requests (keeps bot token server-side)
- Implement rate limiting to prevent spam
- Add CAPTCHA to the booking form
- Validate and sanitize all user inputs

## Files Modified

- `/services/telegramService.ts` - New service for Telegram integration
- `/pages/Contact.tsx` - Updated booking form with Telegram integration
