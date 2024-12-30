document.addEventListener('DOMContentLoaded', async () => {
    const zoneID = '09cf4c9e8bab82c96c691d746f1d31d4';
    const accountID = '27d7371edbc1158be95c31ae04bc1d2f';
    const apiKey = 'b7642f58d0cf36031a69409abca1976f021e2'; // Replace with your Cloudflare API key
    const originKey = 'v1.0-17a01245d4c3cab84759888d-27a0d1657c9e0a39d8d38ae3ee24f7857eb8e661a020dce8a3f95517af72e0e9da0bbbad6f7e21a180f3ada5194c3e3740affb0bdba8281dba823a449f6cde03a01e148f9f0dfe9f37'; // Replace with your origin key
    const email = 'yavari.milad@yahoo.com'; // Replace with your Cloudflare account email

    const url = `https://api.cloudflare.com/client/v4/zones/${zoneID}/analytics/dashboard`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-Auth-Email': email,
                'X-Auth-Key': apiKey,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        displayAnalyticsData(data);
    } catch (error) {
        console.error('Error fetching analytics data:', error);
        document.getElementById('analytics-report').innerText = `Failed to load analytics data: ${error.message}`;
    }
});

// Placeholder function for displaying analytics data
function displayAnalyticsData(data) {
    console.log('Analytics Data:', data);
    document.getElementById('analytics-report').innerText = JSON.stringify(data, null, 2);
}


function displayAnalyticsData(data) {
    const analyticsReport = document.getElementById('analytics-report');
    analyticsReport.innerHTML = `
        <p>Total Requests: ${data.totals.requests.all}</p>
        <p>Total Bandwidth: ${data.totals.bandwidth.all} bytes</p>
        <p>Total Unique Visitors: ${data.totals.uniques.all}</p>
        <p>Page Views: ${data.totals.pageviews.all}</p>
    `;
}
