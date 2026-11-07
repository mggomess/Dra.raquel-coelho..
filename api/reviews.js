/**
 * GET /api/reviews
 * Busca as avaliações reais do perfil no Google (Places API) e devolve JSON enxuto.
 * Variáveis de ambiente (Vercel > Settings > Environment Variables):
 *   GOOGLE_PLACES_API_KEY  (obrigatória)  chave da Places API (New)
 *   GOOGLE_PLACE_ID        (opcional)     se vazio, o Place ID é localizado pelo nome do escritório
 */
const BUSCA = 'Dra. Raquel Coelho Advocacia e Consultoria Jurídica, R. Jorge Amado 140, Eunápolis BA';

module.exports = async (req, res) => {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return res.status(503).json({ error: 'not_configured' });

  try {
    let id = process.env.GOOGLE_PLACE_ID;
    if (!id) {
      const s = await fetch('https://places.googleapis.com/v1/places:searchText', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id' },
        body: JSON.stringify({ textQuery: BUSCA, languageCode: 'pt-BR', regionCode: 'BR' }),
      });
      const sj = await s.json();
      id = sj.places && sj.places[0] && sj.places[0].id;
      if (!id) return res.status(404).json({ error: 'place_not_found' });
    }

    const r = await fetch('https://places.googleapis.com/v1/places/' + encodeURIComponent(id) + '?languageCode=pt-BR', {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews' },
    });
    if (!r.ok) return res.status(502).json({ error: 'google_error', status: r.status });
    const d = await r.json();

    const reviews = (d.reviews || []).map((v) => ({
      author: (v.authorAttribution && v.authorAttribution.displayName) || 'Cliente',
      rating: v.rating || 5,
      text: (v.originalText && v.originalText.text) || (v.text && v.text.text) || '',
      when: v.relativePublishTimeDescription || '',
    })).filter((v) => v.text);

    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');
    return res.status(200).json({ rating: d.rating || null, total: d.userRatingCount || reviews.length, mapsUri: d.googleMapsUri || null, reviews });
  } catch (e) {
    return res.status(500).json({ error: 'server_error' });
  }
};
