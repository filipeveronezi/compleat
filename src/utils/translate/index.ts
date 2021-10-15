export const translate = async (text: string, target: 'pt-BR' | 'en') => {
  const response = await fetch(
    `https://translation.googleapis.com/language/translate/v2?key=${process.env.NEXT_PUBLIC_GOOGLE_KEY}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        target,
        format: 'text',
        q: text
      })
    }
  )
  const data = await response.json()
  const translatedText = data.data.translations[0].translatedText
  return translatedText
}
