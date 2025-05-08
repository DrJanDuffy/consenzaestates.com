
// Follow Up Boss API integration

/**
 * Send form data to Follow Up Boss CRM
 * @param {Object} leadData - The lead data to send to Follow Up Boss
 * @returns {Promise} - A promise that resolves to the API response
 */
export async function sendToFollowUpBoss(leadData) {
  const API_KEY = 'fka_0N4mnNH3mzSyXDV5aoWtCFCkgb2hIesrXB';
  const API_URL = 'https://api.followupboss.com/v1/people';
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${API_KEY}:`)}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(leadData)
    });
    
    if (!response.ok) {
      throw new Error(`Error sending data to Follow Up Boss: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Failed to send data to Follow Up Boss:', error);
    throw error;
  }
}

/**
 * Format contact form data for Follow Up Boss
 * @param {Object} formData - The form data from the contact form
 * @returns {Object} - Formatted data for Follow Up Boss API
 */
export function formatContactFormData(formData) {
  return {
    firstName: formData.firstName || '',
    lastName: formData.lastName || '',
    emails: [{ value: formData.email }],
    phones: formData.phone ? [{ value: formData.phone }] : [],
    source: 'Website Contact Form',
    notes: formData.message || '',
    tags: ['website-lead', 'contact-form']
  };
}

/**
 * Format market analysis form data for Follow Up Boss
 * @param {Object} formData - The form data from the market analysis form
 * @returns {Object} - Formatted data for Follow Up Boss API
 */
export function formatMarketAnalysisData(formData) {
  const [firstName, ...lastNameParts] = formData.ownerName?.split(' ') || ['', ''];
  const lastName = lastNameParts.join(' ');
  
  return {
    firstName: firstName || '',
    lastName: lastName || '',
    emails: [{ value: formData.ownerEmail }],
    phones: formData.ownerPhone ? [{ value: formData.ownerPhone }] : [],
    source: 'Website Market Analysis Request',
    addresses: [
      {
        value: formData.propertyAddress,
        type: 'home'
      }
    ],
    tags: ['website-lead', 'market-analysis', formData.timeframe || ''],
    customFields: {
      timeframe: formData.timeframe || 'Not specified'
    }
  };
}
