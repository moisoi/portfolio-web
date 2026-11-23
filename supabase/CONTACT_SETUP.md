# Portfolio contact email setup

The contact function uses Resend to send a plain-text notification to `messaymohammed@gmail.com`. It requires a Resend API key and an email sender on a domain verified with Resend. Add these as **Supabase Edge Function secrets**, not to source control or browser code:

- `RESEND_API_KEY`: the Resend API key.
- `RESEND_FROM_EMAIL`: a verified sender, e.g. `Portfolio <contact@your-verified-domain>`.

Deploy `portfolio-contact` after setting secrets. Then send a real test message from the site and confirm its arrival in the inbox (including spam). An HTTP 201 means Resend accepted the request, not that the email was delivered or read. Until configured, the function returns 503 and the visitor is directed to email directly. Resend's test sender may only send to the account owner's verified address; a verified domain is needed for reliable public use. After confirming delivery, publish the updated site.

The function stores messages in the existing private Supabase table for duplicate detection and retains uncertain deliveries to avoid automatically resending an email that may have been accepted. Visitor message data is also sent to Resend for email delivery.
