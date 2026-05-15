const PORTUGUESE_COUNTRIES = new Set(['BR', 'PT']);

function navigatorSuggestsBrazilOrPortugal(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }

  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  return languages.some((tag) => {
    const lower = tag.toLowerCase();
    return lower === 'pt-br' || lower === 'pt-pt' || lower.startsWith('pt-br-') || lower.startsWith('pt-pt-');
  });
}

export async function shouldShowPortuguese(): Promise<boolean> {
  try {
    const response = await fetch('https://ipwho.is/', {
      signal: AbortSignal.timeout(5000),
    });

    if (response.ok) {
      const data = (await response.json()) as {
        success?: boolean;
        country_code?: string;
      };

      if (data.success !== false && data.country_code) {
        return PORTUGUESE_COUNTRIES.has(data.country_code.toUpperCase());
      }
    }
  } catch {
    // Fall through to navigator hint when geo lookup is unavailable.
  }

  return navigatorSuggestsBrazilOrPortugal();
}
