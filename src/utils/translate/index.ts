import { LanguageType } from '@/types/Language'

export const translate = async (
  text: string,
  target: LanguageType,
  source: LanguageType
) => {
  try {
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          target,
          source,
          format: 'text',
          q: text
        })
      }
    )
    const data = await response.json()
    const translatedText = data.data
      ? data.data.translations[0].translatedText
      : ''
    return translatedText
  } catch (error) {
    throw new Error(error as string)
  }
}
