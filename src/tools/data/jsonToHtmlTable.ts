export function jsonToHtmlTable(json: string): string {
  try {
    const data = JSON.parse(json);
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error("Input must be a non-empty array of objects");
    }

    const headers = Object.keys(data[0]);
    let html = '<table class="min-w-full divide-y divide-gray-200">\n';
    
    // Header
    html += '  <thead class="bg-gray-50">\n    <tr>\n';
    headers.forEach(header => {
      html += `      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">${header}</th>\n`;
    });
    html += '    </tr>\n  </thead>\n';

    // Body
    html += '  <tbody class="bg-white divide-y divide-gray-200">\n';
    data.forEach(row => {
      html += '    <tr>\n';
      headers.forEach(header => {
        const val = row[header];
        html += `      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${typeof val === 'object' ? JSON.stringify(val) : val}</td>\n`;
      });
      html += '    </tr>\n';
    });
    html += '  </tbody>\n</table>';

    return html;
  } catch (e: any) {
    throw new Error(`Error: ${e.message}`);
  }
}
