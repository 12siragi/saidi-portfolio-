// src/app/api/send-email/route.js

export async function POST(request) {
    const { name, email, message } = await request.json();

    // Your email sending logic here
    // For example, using a service like Nodemailer or a third-party API
    try {
        // Simulate sending an email
        console.log(`Sending email to: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Message: ${message}`);

        // Return success response
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        // Handle errors
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
