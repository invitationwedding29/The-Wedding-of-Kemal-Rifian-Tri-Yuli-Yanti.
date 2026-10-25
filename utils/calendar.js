/**
 * Utilitas untuk membuat tautan Google Calendar dan format tanggal
 */

/**
 * Format tanggal ISO ke format Google Calendar (YYYYMMDDTHHmmssZ atau YYYYMMDDTHHmmss)
 */
function toCalendarUtcString(isoString, fallbackStartIso) {
  let d = new Date(isoString);
  if (isNaN(d.getTime())) {
    if (fallbackStartIso && !isNaN(new Date(fallbackStartIso).getTime())) {
      d = new Date(new Date(fallbackStartIso).getTime() + 3 * 60 * 60 * 1000);
    } else {
      d = new Date();
    }
  }
  return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

/**
 * Menghasilkan URL Google Calendar untuk suatu acara
 */
export function createGoogleCalendarUrl({ title, startIso, endIso, venue, address }) {
  const baseUrl = 'https://calendar.google.com/calendar/render';
  const action = 'TEMPLATE';
  const text = encodeURIComponent(title);
  const startDateStr = toCalendarUtcString(startIso);
  const endDateStr = toCalendarUtcString(endIso, startIso);
  const dates = `${startDateStr}/${endDateStr}`;
  const details = encodeURIComponent(`Menghadiri ${title} di ${venue}`);
  const location = encodeURIComponent(`${venue}, ${address}`);

  return `${baseUrl}?action=${action}&text=${text}&dates=${dates}&details=${details}&location=${location}`;
}

/**
 * Format tanggal human-readable Indonesia
 */
export function formatIndonesianDate(isoString) {
  const d = new Date(isoString);
  return d.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
