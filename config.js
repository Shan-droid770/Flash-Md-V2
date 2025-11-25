require('dotenv').config();

function mapPresence(val) {
    const mapping = {
        typing: 'composing',
        online: 'available',
        recording: 'recording',
        paused: 'paused',
        offline: 'unavailable'
    };
    return mapping[val?.toLowerCase()?.trim()] || 'available';
}

module.exports = {
    prefixes: process.env.PREFIX
        ? process.env.PREFIX.split(',').map(p => p.trim())
        : ['.'],

    NUMBER: process.env.YOUR_NUMBER || '94763952882',
    MODE: (process.env.MODE || 'public').toLowerCase().trim(),
    WARN_LIMIT: process.env.WARNINGS || '3',
    ON: process.env.YOUR_NAME || 'Sahan Dissanayaka',
    ANTICALL: process.env.ANTICALL || 'off',
    ADM: process.env.ANTIDELETE || 'on',
    AR: process.env.AUTO_REACTION || 'off',

    AUTO_VIEW_STATUS: process.env.AUTO_READ_STATUS === 'on',
    AUTO_LIKE: process.env.AUTO_LIKE === 'on',
    AUTO_READ_MESSAGES: process.env.AUTO_READ_DM === 'off',
    HEROKU_API_KEY: process.env.HEROKU_API_KEY,
    HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
    sessionBase64: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxMVGhqZG1tdklPRDhkazcrWTJjYlBPbytVSjhTL2pvOElCbDQ1NzVsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamxlcUR5QXlmMXF4Mkg2UEc0R09hNWpLbWFGam5BUGl3czlqR3RFcXRnaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTDdPUEZ0QVNoN1JXQkUrL3VnSlRlVVBGTHRZZUFGWTNDZHorT0JiVEdRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5eWIzNGNlVGlyZCt5VmZxdDdMZFl6L1N0cysyZjJ0L0Q4NjUxQXlJbUVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNTlJSOGZrMzJCRzh3Rm15L2hPSVA3bXgvYS9pTGRaczdaV3g1Y0ZObU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllSQ0VaTzJjcmVNaGZZTzgrcVBJQXM4ZU8zc1FtMDM0Rkp1STRpNUFRM0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZoMzd6OHhiTHFuMmhWcFhJbXMrRExkRVNMQnR3a29nMGtrTjFaZVEwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVJmM1ZvMXFrOXZBMWhJSGRma3FNUGRvOEwrMFVUa2toU1Qvc1JSSzBDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVQZEoxeTNmSnFKbnFyeEZsbC9kdEdtYUhQMjI4SVBDQm9mNXdGU2R2bys5UFg0VzhyOU5vUHRHNXBnR3k4eGlNcnUrZHR4d1pIeXB4NWpvdEE2ZGpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiJjbEI0QmEyMjhHUzNwQVhQMWxNWXdQeGVRTDlseHVTdTZESy9GNVg5Z1dVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJOM0hXNUw4SyIsIm1lIjp7ImlkIjoiOTQ3NjM5NTI4ODI6MTlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKlRSWFNIQU5BKiIsImxpZCI6IjEzMjY0NjQwNzUyMDM1ODoxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0p2MjhxSUVFSzJRbHNrR0dHWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlZmSUJTVFFMajFTbFNtV215ckUyQVRsSkptRXBqS015T2ZPY3NhTTk0QTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlB5TzRrazQrREVnL0RxSGF3NWF1bVZ0em91VERNYzR2KytWWk5hNklMZnl1K2NZdXZtQ0dVWlp6eXpXWFNvY3EvUzNEU0JBRndQSWNKMDI3cWE3ckFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqT2F5eVREYTVPMUZJWWVLYzhaMzAvVFgxSERRYUpYbVhvTE1tUmgxTFFEaENJTnYzdHZUSGc2dlBBZG5XcUwzNlUrOTdiZjRrTnJKKzlKOVIwdmpnQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYzOTUyODgyOjE5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZYeUFVazBDNDlVcFVwbHBzcXhOZ0U1U1NaaEtZeWpNam56bkxHalBlQU4ifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZ2dDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NDA2NzM3OCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVMYSJ9',
    timezone: 'Asia/India',

    USER_LID: process.env.YOUR_LID, 

    PRESENCE_DM: mapPresence(process.env.PRESENCE_DM || 'available'),
    PRESENCE_GROUP: mapPresence(process.env.PRESENCE_GROUP || 'available'),

    mapPresence
};
