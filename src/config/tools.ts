export interface Tool {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  tags: string[];
  route: string;
}

export const tools: Tool[] = [
  // CATEGORY 1: DATA TRANSFORMERS (1–10)
  {
    id: '1',
    name: 'JSON to TypeScript Interface',
    slug: 'json-to-typescript',
    category: 'Data Transformers',
    description: 'Convert raw JSON into TypeScript interfaces, handling nested structures and arrays.',
    tags: ['json', 'typescript', 'convert', 'interface'],
    route: '/tools/data/json-to-typescript'
  },
  {
    id: '2',
    name: 'JSON to Go Struct',
    slug: 'json-to-go',
    category: 'Data Transformers',
    description: 'Generate idiomatic Go struct definitions from JSON input.',
    tags: ['json', 'go', 'golang', 'struct'],
    route: '/tools/data/json-to-go'
  },
  {
    id: '3',
    name: 'JSON to Java POJO',
    slug: 'json-to-java',
    category: 'Data Transformers',
    description: 'Convert JSON to Java POJO classes with fields and Lombok annotations.',
    tags: ['json', 'java', 'pojo', 'lombok'],
    route: '/tools/data/json-to-java'
  },
  {
    id: '4',
    name: 'JSON to Python Class',
    slug: 'json-to-python',
    category: 'Data Transformers',
    description: 'Transform JSON into Python dataclasses or Pydantic models.',
    tags: ['json', 'python', 'dataclass', 'pydantic'],
    route: '/tools/data/json-to-python'
  },
  {
    id: '5',
    name: 'XML to JSON Converter',
    slug: 'xml-to-json',
    category: 'Data Transformers',
    description: 'Convert XML strings to JSON representation with attribute handling.',
    tags: ['xml', 'json', 'convert'],
    route: '/tools/data/xml-to-json'
  },
  {
    id: '6',
    name: 'YAML ↔ JSON Converter',
    slug: 'yaml-json-converter',
    category: 'Data Transformers',
    description: 'Bidirectional conversion between YAML and JSON formats.',
    tags: ['yaml', 'json', 'convert'],
    route: '/tools/data/yaml-json'
  },
  {
    id: '7',
    name: 'CSV ↔ JSON Converter',
    slug: 'csv-json-converter',
    category: 'Data Transformers',
    description: 'Convert between CSV and JSON formats with header support.',
    tags: ['csv', 'json', 'convert'],
    route: '/tools/data/csv-json'
  },
  {
    id: '8',
    name: 'TOML to JSON',
    slug: 'toml-to-json',
    category: 'Data Transformers',
    description: 'Convert TOML configuration files to JSON.',
    tags: ['toml', 'json', 'convert'],
    route: '/tools/data/toml-to-json'
  },
  {
    id: '9',
    name: 'SQL to JSON',
    slug: 'sql-to-json',
    category: 'Data Transformers',
    description: 'Convert SQL result sets or INSERT statements into JSON arrays.',
    tags: ['sql', 'json', 'convert'],
    route: '/tools/data/sql-to-json'
  },
  {
    id: '10',
    name: 'JSON to HTML Table',
    slug: 'json-to-html-table',
    category: 'Data Transformers',
    description: 'Transform a JSON array of objects into a formatted HTML table.',
    tags: ['json', 'html', 'table', 'render'],
    route: '/tools/data/json-to-html-table'
  },
  // CATEGORY 2: ENCODERS & DECODERS (11–20)
  {
    id: '11',
    name: 'Base64 Encoder/Decoder',
    slug: 'base64-encode-decode',
    category: 'Encoders & Decoders',
    description: 'Encode or decode text and files to/from Base64 format.',
    tags: ['base64', 'encode', 'decode'],
    route: '/tools/encoding/base64'
  },
  {
    id: '12',
    name: 'URL Encoder/Decoder',
    slug: 'url-encode-decode',
    category: 'Encoders & Decoders',
    description: 'Safely encode or decode URLs for web use.',
    tags: ['url', 'encode', 'decode'],
    route: '/tools/encoding/url'
  },
  {
    id: '13',
    name: 'JWT Decoder',
    slug: 'jwt-decoder',
    category: 'Encoders & Decoders',
    description: 'Decode JSON Web Tokens (JWT) to view header and payload (client-side only).',
    tags: ['jwt', 'json', 'token', 'decode'],
    route: '/tools/encoding/jwt'
  },
  {
    id: '14',
    name: 'HTML Entity Encoder/Decoder',
    slug: 'html-entity-encoder',
    category: 'Encoders & Decoders',
    description: 'Convert characters to HTML entities or vice versa.',
    tags: ['html', 'entity', 'encode', 'decode'],
    route: '/tools/encoding/html-entities'
  },
  {
    id: '15',
    name: 'Binary ↔ Text Converter',
    slug: 'binary-text-converter',
    category: 'Encoders & Decoders',
    description: 'Convert text to binary representation and back.',
    tags: ['binary', 'text', 'convert'],
    route: '/tools/encoding/binary-text'
  },
  {
    id: '16',
    name: 'Hex ↔ String Converter',
    slug: 'hex-string-converter',
    category: 'Encoders & Decoders',
    description: 'Convert between hexadecimal and plain string formats.',
    tags: ['hex', 'string', 'convert'],
    route: '/tools/encoding/hex-string'
  },
  {
    id: '17',
    name: 'Base32 / Base58 Encoder',
    slug: 'base32-base58-encoder',
    category: 'Encoders & Decoders',
    description: 'Encode and decode using Base32 or Base58 algorithms.',
    tags: ['base32', 'base58', 'encode', 'decode'],
    route: '/tools/encoding/base32-base58'
  },
  {
    id: '18',
    name: 'Punycode Converter',
    slug: 'punycode-converter',
    category: 'Encoders & Decoders',
    description: 'Convert Unicode domain names to ASCII Punycode and back.',
    tags: ['punycode', 'unicode', 'ascii', 'domain'],
    route: '/tools/encoding/punycode'
  },
  {
    id: '19',
    name: 'Rot13 / Caesar Cipher',
    slug: 'rot13-caesar-cipher',
    category: 'Encoders & Decoders',
    description: 'Apply Rot13 or Caesar shift ciphers to text.',
    tags: ['cipher', 'rot13', 'caesar', 'encryption'],
    route: '/tools/encoding/rot13-caesar'
  },
  {
    id: '20',
    name: 'Morse Code Converter',
    slug: 'morse-code-converter',
    category: 'Encoders & Decoders',
    description: 'Translate text to Morse code and back.',
    tags: ['morse', 'code', 'convert'],
    route: '/tools/encoding/morse'
  },
  // CATEGORY 3: FORMATTERS & BEAUTIFIERS (21–30)
  {
    id: '21',
    name: 'JSON Formatter & Validator',
    slug: 'json-formatter',
    category: 'Formatters & Beautifiers',
    description: 'Pretty-print and validate JSON data with adjustable indentation.',
    tags: ['json', 'format', 'beautify', 'validate'],
    route: '/tools/format/json'
  },
  {
    id: '22',
    name: 'SQL Formatter',
    slug: 'sql-formatter',
    category: 'Formatters & Beautifiers',
    description: 'Format SQL queries for better readability.',
    tags: ['sql', 'format', 'beautify'],
    route: '/tools/format/sql'
  },
  {
    id: '23',
    name: 'HTML/CSS/JS Beautifier',
    slug: 'html-css-js-beautifier',
    category: 'Formatters & Beautifiers',
    description: 'Beautify HTML, CSS, or JavaScript code.',
    tags: ['html', 'css', 'js', 'format', 'beautify'],
    route: '/tools/format/code'
  },
  {
    id: '24',
    name: 'XML Formatter',
    slug: 'xml-formatter',
    category: 'Formatters & Beautifiers',
    description: 'Pretty-print XML files with proper indentation.',
    tags: ['xml', 'format', 'beautify'],
    route: '/tools/format/xml'
  },
  {
    id: '25',
    name: 'GraphQL Prettifier',
    slug: 'graphql-prettifier',
    category: 'Formatters & Beautifiers',
    description: 'Format GraphQL queries and schemas.',
    tags: ['graphql', 'format', 'beautify'],
    route: '/tools/format/graphql'
  },
  {
    id: '26',
    name: 'C# Formatter',
    slug: 'csharp-formatter',
    category: 'Formatters & Beautifiers',
    description: 'Format C# code snippets.',
    tags: ['csharp', 'format', 'beautify'],
    route: '/tools/format/csharp'
  },
  {
    id: '27',
    name: 'PHP Formatter',
    slug: 'php-formatter',
    category: 'Formatters & Beautifiers',
    description: 'Beautify PHP code files.',
    tags: ['php', 'format', 'beautify'],
    route: '/tools/format/php'
  },
  {
    id: '28',
    name: 'Markdown Table Generator',
    slug: 'markdown-table-generator',
    category: 'Formatters & Beautifiers',
    description: 'Interactively build and generate Markdown tables.',
    tags: ['markdown', 'table', 'generate'],
    route: '/tools/format/markdown-table'
  },
  {
    id: '29',
    name: 'LaTeX Equation Editor',
    slug: 'latex-equation-editor',
    category: 'Formatters & Beautifiers',
    description: 'Write and preview LaTeX mathematical equations.',
    tags: ['latex', 'math', 'equation', 'editor'],
    route: '/tools/format/latex'
  },
  {
    id: '30',
    name: 'Crontab Expression Explainer',
    slug: 'cron-explainer',
    category: 'Formatters & Beautifiers',
    description: 'Translate crontab expressions into human-readable text and show next run times.',
    tags: ['cron', 'schedule', 'explain'],
    route: '/tools/format/cron'
  },
  // CATEGORY 4: SECURITY & Hashing (31-40)
  {
    id: '31',
    name: 'SHA-256 / SHA-512 Generator',
    slug: 'sha-generator',
    category: 'Security & Hashing',
    description: 'Generate SHA-256 and SHA-512 hashes for text and files.',
    tags: ['sha', 'hash', 'security'],
    route: '/tools/security/sha'
  },
  {
    id: '32',
    name: 'MD5 Hash Generator',
    slug: 'md5-generator',
    category: 'Security & Hashing',
    description: 'Generate MD5 hashes for input text.',
    tags: ['md5', 'hash'],
    route: '/tools/security/md5'
  },
  {
    id: '33',
    name: 'Bcrypt Hash Checker',
    slug: 'bcrypt-checker',
    category: 'Security & Hashing',
    description: 'Generate and verify bcrypt hashes (client-side).',
    tags: ['bcrypt', 'hash', 'verify'],
    route: '/tools/security/bcrypt'
  },
  {
    id: '34',
    name: 'Secure Password Generator',
    slug: 'password-generator',
    category: 'Security & Hashing',
    description: 'Create cryptographically secure passwords with custom options.',
    tags: ['password', 'generator', 'security'],
    route: '/tools/security/password'
  },
  {
    id: '35',
    name: 'UUID/GUID Generator',
    slug: 'uuid-generator',
    category: 'Security & Hashing',
    description: 'Generate single or bulk UUID v4 strings.',
    tags: ['uuid', 'guid', 'generate'],
    route: '/tools/security/uuid'
  },
  {
    id: '36',
    name: 'HMAC Generator',
    slug: 'hmac-generator',
    category: 'Security & Hashing',
    description: 'Generate Hash-based Message Authentication Codes.',
    tags: ['hmac', 'security', 'hash'],
    route: '/tools/security/hmac'
  },
  {
    id: '37',
    name: 'RSA Key Pair Generator',
    slug: 'rsa-generator',
    category: 'Security & Hashing',
    description: 'Generate RSA public and private key pairs client-side.',
    tags: ['rsa', 'key', 'security'],
    route: '/tools/security/rsa'
  },
  {
    id: '38',
    name: 'AES Encrypt/Decrypt',
    slug: 'aes-encrypt-decrypt',
    category: 'Security & Hashing',
    description: 'Encrypt and decrypt text using AES algorithm.',
    tags: ['aes', 'encryption', 'decryption'],
    route: '/tools/security/aes'
  },
  {
    id: '39',
    name: 'Password Strength Meter',
    slug: 'password-strength',
    category: 'Security & Hashing',
    description: 'Analyze and visualize the strength of a password.',
    tags: ['password', 'strength', 'security'],
    route: '/tools/security/password-strength'
  },
  {
    id: '40',
    name: 'Escaped String Unescaper',
    slug: 'string-unescaper',
    category: 'Security & Hashing',
    description: 'Unescape strings with various escape sequences.',
    tags: ['string', 'escape', 'unescape'],
    route: '/tools/security/unescape'
  },
  // CATEGORY 5: VISUAL & CSS TOOLS (41–50)
  {
    id: '41',
    name: 'CSS Gradient Generator',
    slug: 'css-gradient-generator',
    category: 'Visual & CSS Tools',
    description: 'Interactively create complex CSS linear and radial gradients.',
    tags: ['css', 'gradient', 'design'],
    route: '/tools/visual/css-gradient'
  },
  {
    id: '42',
    name: 'CSS Box Shadow Generator',
    slug: 'css-box-shadow',
    category: 'Visual & CSS Tools',
    description: 'Visual editor for CSS box-shadow properties.',
    tags: ['css', 'shadow', 'design'],
    route: '/tools/visual/box-shadow'
  },
  {
    id: '43',
    name: 'Glassmorphism CSS Builder',
    slug: 'glassmorphism-generator',
    category: 'Visual & CSS Tools',
    description: 'Generate CSS for glassmorphism effects.',
    tags: ['css', 'glassmorphism', 'design'],
    route: '/tools/visual/glassmorphism'
  },
  {
    id: '44',
    name: 'SVG to Data URI Converter',
    slug: 'svg-to-data-uri',
    category: 'Visual & CSS Tools',
    description: 'Convert SVG code to Base64 Data URIs for CSS/HTML.',
    tags: ['svg', 'data-uri', 'convert'],
    route: '/tools/visual/svg-to-data-uri'
  },
  {
    id: '45',
    name: 'Favicon Generator',
    slug: 'favicon-generator',
    category: 'Visual & CSS Tools',
    description: 'Generate standard favicons from images or text client-side.',
    tags: ['favicon', 'icon', 'design'],
    route: '/tools/visual/favicon'
  },
  {
    id: '46',
    name: 'Color Converter',
    slug: 'color-converter',
    category: 'Visual & CSS Tools',
    description: 'Convert between HEX, RGB, HSL, and CMYK color formats.',
    tags: ['color', 'convert', 'design'],
    route: '/tools/visual/color-converter'
  },
  {
    id: '47',
    name: 'Aspect Ratio Calculator',
    slug: 'aspect-ratio-calculator',
    category: 'Visual & CSS Tools',
    description: 'Calculate dimensions based on aspect ratios.',
    tags: ['aspect-ratio', 'math', 'design'],
    route: '/tools/visual/aspect-ratio'
  },
  {
    id: '48',
    name: 'Border Radius Visualizer',
    slug: 'border-radius-visualizer',
    category: 'Visual & CSS Tools',
    description: 'Interactively design complex border-radius shapes.',
    tags: ['css', 'border-radius', 'design'],
    route: '/tools/visual/border-radius'
  },
  {
    id: '49',
    name: 'CSS Flexbox Playground',
    slug: 'css-flexbox-playground',
    category: 'Visual & CSS Tools',
    description: 'Interactive tool to experiment with CSS Flexbox properties.',
    tags: ['css', 'flexbox', 'design'],
    route: '/tools/visual/flexbox'
  },
  {
    id: '50',
    name: 'CSS Grid Generator',
    slug: 'css-grid-generator',
    category: 'Visual & CSS Tools',
    description: 'Visually design and generate CSS Grid layouts.',
    tags: ['css', 'grid', 'design'],
    route: '/tools/visual/grid'
  },
  // CATEGORY 6: NETWORK & INFRASTRUCTURE (51–60)
  {
    id: '51',
    name: 'IPv4 to IPv6 Converter',
    slug: 'ipv4-ipv6-converter',
    category: 'Network & Infrastructure',
    description: 'Convert IPv4 addresses to IPv6 mapped format.',
    tags: ['ipv4', 'ipv6', 'network'],
    route: '/tools/network/ipv4-ipv6'
  },
  {
    id: '52',
    name: 'Subnet Mask Calculator',
    slug: 'subnet-calculator',
    category: 'Network & Infrastructure',
    description: 'Calculate subnets, hosts, and ranges for IP addresses.',
    tags: ['subnet', 'ip', 'network'],
    route: '/tools/network/subnet'
  },
  {
    id: '53',
    name: 'DNS Lookup',
    slug: 'dns-lookup',
    category: 'Network & Infrastructure',
    description: 'Check DNS records (A, AAAA, MX, TXT) via public API.',
    tags: ['dns', 'lookup', 'network'],
    route: '/tools/network/dns'
  },
  {
    id: '54',
    name: 'Whois Lookup',
    slug: 'whois-lookup',
    category: 'Network & Infrastructure',
    description: 'Retrieve domain registration information.',
    tags: ['whois', 'domain', 'network'],
    route: '/tools/network/whois'
  },
  {
    id: '55',
    name: 'HTTP Status Code Reference',
    slug: 'http-status-codes',
    category: 'Network & Infrastructure',
    description: 'Quick reference for HTTP response status codes.',
    tags: ['http', 'status-code', 'reference'],
    route: '/tools/network/http-status'
  },
  {
    id: '56',
    name: 'cURL to Fetch/Axios Converter',
    slug: 'curl-converter',
    category: 'Network & Infrastructure',
    description: 'Convert cURL commands to JavaScript Fetch or Axios code.',
    tags: ['curl', 'fetch', 'axios', 'convert'],
    route: '/tools/network/curl-converter'
  },
  {
    id: '57',
    name: '.htaccess Redirect Generator',
    slug: 'htaccess-generator',
    category: 'Network & Infrastructure',
    description: 'Generate common Apache .htaccess redirect rules.',
    tags: ['htaccess', 'apache', 'redirect'],
    route: '/tools/network/htaccess'
  },
  {
    id: '58',
    name: 'Nginx Config Generator',
    slug: 'nginx-generator',
    category: 'Network & Infrastructure',
    description: 'Create basic Nginx configuration files for common setups.',
    tags: ['nginx', 'config', 'server'],
    route: '/tools/network/nginx'
  },
  {
    id: '59',
    name: 'Dockerfile Generator',
    slug: 'dockerfile-generator',
    category: 'Network & Infrastructure',
    description: 'Generate Dockerfile templates for various tech stacks.',
    tags: ['docker', 'dockerfile', 'devops'],
    route: '/tools/network/dockerfile'
  },
  {
    id: '60',
    name: 'Crontab One-Liner Explainer',
    slug: 'cron-oneliner',
    category: 'Network & Infrastructure',
    description: 'Brief one-line explanation of cron expressions.',
    tags: ['cron', 'linux', 'devops'],
    route: '/tools/network/cron-explain'
  },
  // CATEGORY 7: TEXT MANIPULATION (61–70)
  {
    id: '61',
    name: 'Word & Character Counter',
    slug: 'word-character-counter',
    category: 'Text Manipulation',
    description: 'Count words, characters, and sentences in real-time.',
    tags: ['word-count', 'text', 'analysis'],
    route: '/tools/text/counter'
  },
  {
    id: '62',
    name: 'Remove Duplicate Lines',
    slug: 'remove-duplicates',
    category: 'Text Manipulation',
    description: 'Clean up lists by removing duplicate text lines.',
    tags: ['duplicates', 'text', 'cleanup'],
    route: '/tools/text/remove-duplicates'
  },
  {
    id: '63',
    name: 'Sort Lines',
    slug: 'sort-lines',
    category: 'Text Manipulation',
    description: 'Sort lines of text alphabetically or naturally.',
    tags: ['sort', 'text'],
    route: '/tools/text/sort'
  },
  {
    id: '64',
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum-generator',
    category: 'Text Manipulation',
    description: 'Generate placeholder Lorem Ipsum text with custom options.',
    tags: ['lorem-ipsum', 'placeholder', 'generate'],
    route: '/tools/text/lorem-ipsum'
  },
  {
    id: '65',
    name: 'Regex Tester & Explainer',
    slug: 'regex-tester',
    category: 'Text Manipulation',
    description: 'Test regular expressions and get detailed explanations.',
    tags: ['regex', 'test', 'explain'],
    route: '/tools/text/regex'
  },
  {
    id: '66',
    name: 'Diff Checker',
    slug: 'diff-checker',
    category: 'Text Manipulation',
    description: 'Compare two text snippets and see differences.',
    tags: ['diff', 'compare', 'text'],
    route: '/tools/text/diff'
  },
  {
    id: '67',
    name: 'Find and Replace',
    slug: 'find-replace',
    category: 'Text Manipulation',
    description: 'Search and replace text with regex support.',
    tags: ['search', 'replace', 'regex'],
    route: '/tools/text/find-replace'
  },
  {
    id: '68',
    name: 'String Length Calculator',
    slug: 'string-length',
    category: 'Text Manipulation',
    description: 'Simple tool to get precise string length and byte size.',
    tags: ['length', 'string', 'bytes'],
    route: '/tools/text/length'
  },
  {
    id: '69',
    name: 'Multiple Whitespace Remover',
    slug: 'whitespace-remover',
    category: 'Text Manipulation',
    description: 'Collapse multiple spaces/tabs into a single space.',
    tags: ['whitespace', 'cleanup', 'text'],
    route: '/tools/text/whitespace'
  },
  {
    id: '70',
    name: 'Markdown to HTML Converter',
    slug: 'markdown-to-html',
    category: 'Text Manipulation',
    description: 'Convert Markdown text into raw HTML markup.',
    tags: ['markdown', 'html', 'convert'],
    route: '/tools/text/markdown-html'
  },
  // CATEGORY 8: UNIT & TIME CONVERTERS (71–80)
  {
    id: '71',
    name: 'Unix Timestamp to Human Date',
    slug: 'unix-timestamp-converter',
    category: 'Unit & Time Converters',
    description: 'Convert Unix epoch timestamps to readable dates.',
    tags: ['unix', 'timestamp', 'date'],
    route: '/tools/unit/timestamp'
  },
  {
    id: '72',
    name: 'ISO 8601 Date Generator',
    slug: 'iso8601-generator',
    category: 'Unit & Time Converters',
    description: 'Generate various ISO 8601 date format strings.',
    tags: ['iso8601', 'date', 'generate'],
    route: '/tools/unit/iso8601'
  },
  {
    id: '73',
    name: 'Timezone Converter',
    slug: 'timezone-converter',
    category: 'Unit & Time Converters',
    description: 'Convert time between common developer timezones (UTC, EST, PST, etc.).',
    tags: ['timezone', 'time', 'convert'],
    route: '/tools/unit/timezone'
  },
  {
    id: '74',
    name: 'Epoch Time Converter',
    slug: 'epoch-converter',
    category: 'Unit & Time Converters',
    description: 'Convert human dates to Unix epoch timestamps.',
    tags: ['epoch', 'unix', 'timestamp'],
    route: '/tools/unit/epoch'
  },
  {
    id: '75',
    name: 'Bytes to MB/GB/TB Calculator',
    slug: 'byte-calculator',
    category: 'Unit & Time Converters',
    description: 'Convert between different digital storage units.',
    tags: ['bytes', 'size', 'convert'],
    route: '/tools/unit/bytes'
  },
  {
    id: '76',
    name: 'Pixels to REM/EM Converter',
    slug: 'px-rem-converter',
    category: 'Unit & Time Converters',
    description: 'Convert CSS pixel units to REM or EM based on root font size.',
    tags: ['px', 'rem', 'em', 'css'],
    route: '/tools/unit/px-rem'
  },
  {
    id: '77',
    name: 'Percentage Calculator',
    slug: 'percentage-calculator',
    category: 'Unit & Time Converters',
    description: 'Quick tool for common percentage calculations.',
    tags: ['math', 'percentage'],
    route: '/tools/unit/percentage'
  },
  {
    id: '78',
    name: 'Scientific Calculator',
    slug: 'scientific-calculator',
    category: 'Unit & Time Converters',
    description: 'Simple scientific calculator with expression evaluation.',
    tags: ['math', 'calculator'],
    route: '/tools/unit/calculator'
  },
  {
    id: '79',
    name: 'JSON Size Calculator',
    slug: 'json-size',
    category: 'Unit & Time Converters',
    description: 'Calculate the serialized size of JSON data (minified vs pretty).',
    tags: ['json', 'size', 'bytes'],
    route: '/tools/unit/json-size'
  },
  {
    id: '80',
    name: 'Milliseconds to Human Time',
    slug: 'ms-to-human',
    category: 'Unit & Time Converters',
    description: 'Convert milliseconds into hours, minutes, and seconds.',
    tags: ['milliseconds', 'time', 'convert'],
    route: '/tools/unit/ms-human'
  },
  // CATEGORY 9: DEVELOPER CHECKLISTS & DOCS (81–90)
  {
    id: '81',
    name: 'Git Cheat Sheet',
    slug: 'git-cheat-sheet',
    category: 'Developer Checklists & Docs',
    description: 'Interactive reference for common Git commands.',
    tags: ['git', 'cheat-sheet', 'reference'],
    route: '/tools/docs/git'
  },
  {
    id: '82',
    name: 'Docker Cheat Sheet',
    slug: 'docker-cheat-sheet',
    category: 'Developer Checklists & Docs',
    description: 'Essential Docker CLI commands and concepts.',
    tags: ['docker', 'cheat-sheet', 'devops'],
    route: '/tools/docs/docker'
  },
  {
    id: '83',
    name: 'Kubernetes Cheat Sheet',
    slug: 'kubernetes-cheat-sheet',
    category: 'Developer Checklists & Docs',
    description: 'Common kubectl commands and K8s object references.',
    tags: ['kubernetes', 'k8s', 'cheat-sheet'],
    route: '/tools/docs/kubernetes'
  },
  {
    id: '84',
    name: 'OWASP Top 10 Checklist',
    slug: 'owasp-checklist',
    category: 'Developer Checklists & Docs',
    description: 'Interactive security checklist based on OWASP Top 10.',
    tags: ['security', 'checklist', 'owasp'],
    route: '/tools/docs/owasp'
  },
  {
    id: '85',
    name: 'Linux Command Finder',
    slug: 'linux-commands',
    category: 'Developer Checklists & Docs',
    description: 'Searchable database of common Linux/Unix commands.',
    tags: ['linux', 'unix', 'commands'],
    route: '/tools/docs/linux'
  },
  {
    id: '86',
    name: 'Port Number Reference',
    slug: 'port-reference',
    category: 'Developer Checklists & Docs',
    description: 'Lookup common TCP/UDP port numbers and services.',
    tags: ['network', 'ports', 'reference'],
    route: '/tools/docs/ports'
  },
  {
    id: '87',
    name: 'Content-Type (MIME) Lookup',
    slug: 'mime-lookup',
    category: 'Developer Checklists & Docs',
    description: 'Find MIME types by file extension or vice versa.',
    tags: ['mime', 'content-type', 'http'],
    route: '/tools/docs/mime'
  },
  {
    id: '88',
    name: 'HTML Tags Reference',
    slug: 'html-tags',
    category: 'Developer Checklists & Docs',
    description: 'Complete list of HTML5 elements and their usage.',
    tags: ['html', 'tags', 'reference'],
    route: '/tools/docs/html-tags'
  },
  {
    id: '89',
    name: 'CSS Selectors Cheat Sheet',
    slug: 'css-selectors',
    category: 'Developer Checklists & Docs',
    description: 'Interactive guide to CSS selectors and combinators.',
    tags: ['css', 'selectors', 'reference'],
    route: '/tools/docs/css-selectors'
  },
  {
    id: '90',
    name: 'JS Array Methods Visualizer',
    slug: 'js-array-visualizer',
    category: 'Developer Checklists & Docs',
    description: 'Visual reference for JavaScript array manipulation methods.',
    tags: ['javascript', 'arrays', 'reference'],
    route: '/tools/docs/js-arrays'
  },
  // CATEGORY 10: “SMART” ANALYZERS (91–100)
  {
    id: '91',
    name: 'Bundle Size Estimator',
    slug: 'bundle-size-estimator',
    category: 'Smart Analyzers',
    description: 'Approximate the bundle size impact of npm packages.',
    tags: ['npm', 'bundle', 'performance'],
    route: '/tools/analyzers/bundle-size'
  },
  {
    id: '92',
    name: 'User Agent Parser',
    slug: 'ua-parser',
    category: 'Smart Analyzers',
    description: 'Decode and analyze browser user agent strings.',
    tags: ['user-agent', 'browser', 'analysis'],
    route: '/tools/analyzers/user-agent'
  },
  {
    id: '93',
    name: 'URL Parser',
    slug: 'url-parser',
    category: 'Smart Analyzers',
    description: 'Deconstruct URLs into components, query params, and hash.',
    tags: ['url', 'params', 'analysis'],
    route: '/tools/analyzers/url-parse'
  },
  {
    id: '94',
    name: 'JSON Schema Validator',
    slug: 'json-schema-validator',
    category: 'Smart Analyzers',
    description: 'Validate JSON data against a provided JSON Schema.',
    tags: ['json', 'schema', 'validate'],
    route: '/tools/analyzers/json-schema'
  },
  {
    id: '95',
    name: 'Certificate (X.509) Decoder',
    slug: 'certificate-decoder',
    category: 'Smart Analyzers',
    description: 'Parse and view X.509 certificate details client-side.',
    tags: ['ssl', 'certificate', 'security'],
    route: '/tools/analyzers/certificate'
  },
  {
    id: '96',
    name: 'Cron Job Health Checker',
    slug: 'cron-health',
    category: 'Smart Analyzers',
    description: 'Help generate monitoring configs and interpret cron logs.',
    tags: ['cron', 'monitoring', 'devops'],
    route: '/tools/analyzers/cron-health'
  },
  {
    id: '97',
    name: 'YAML Validator',
    slug: 'yaml-validator',
    category: 'Smart Analyzers',
    description: 'Validate YAML syntax and structure.',
    tags: ['yaml', 'validate', 'analysis'],
    route: '/tools/analyzers/yaml-validate'
  },
  {
    id: '98',
    name: 'HTML Link Extractor',
    slug: 'link-extractor',
    category: 'Smart Analyzers',
    description: 'Extract all links (href) from a snippet of HTML.',
    tags: ['html', 'links', 'extract'],
    route: '/tools/analyzers/link-extractor'
  },
  {
    id: '99',
    name: 'Image to Base64',
    slug: 'image-to-base64',
    category: 'Smart Analyzers',
    description: 'Convert images to Base64 strings for CSS/HTML.',
    tags: ['image', 'base64', 'convert'],
    route: '/tools/analyzers/image-base64'
  },
  {
    id: '100',
    name: '“Surprise Me” Button',
    slug: 'surprise-me',
    category: 'Smart Analyzers',
    description: 'Randomly discover one of the 100 developer tools.',
    tags: ['random', 'discovery'],
    route: '/tools/analyzers/surprise-me'
  }
];

export const categories = [
  'Data Transformers',
  'Encoders & Decoders',
  'Formatters & Beautifiers',
  'Security & Hashing',
  'Visual & CSS Tools',
  'Network & Infrastructure',
  'Text Manipulation',
  'Unit & Time Converters',
  'Developer Checklists & Docs',
  'Smart Analyzers'
];
