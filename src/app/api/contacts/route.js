import fetch from 'node-fetch';

export async function POST(req) {
    const HUBSPOT_API_URL = 'https://api.hubapi.com/crm/v3/objects/contacts';
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY; // Ensure you have this in your environment variables

    if (!HUBSPOT_API_KEY) {
        return new Response(JSON.stringify({ error: 'HubSpot API key is missing' }), { status: 500 });
    }

    const createContactInHubSpot = async (contactData) => {
        const response = await fetch(HUBSPOT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify(contactData),
        });

        if (!response.ok) {
            console.error(response)
            return { error: true, data: response.statusText }
            // throw new Error(`Failed to create contact: ${response.statusText}`);
        }

        return { success: true, data: response.json() }
    };

    try {
        const { firstname, lastname, email } = await req.json();
        const contactData = {
            properties: {
                firstname : `${firstname} ${lastname}`,
                email,
            },
        };
        const { error, success, data } = await createContactInHubSpot(contactData);

        if (success) {
            return new Response(JSON.stringify(data), { status: 200 });
        }

        throw new Error(data)

    } catch (error) {
        console.error('Error creating contact:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}