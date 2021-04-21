const RUNTIME = 'docsify'
const HOSTNAME_WHITELIST = [
	self.location.hostname,
	'fonts.gstatic.com',
	'fonts.googleapis.com',
	'unpkg.com'
]

// Функция Util для взлома URL адресов, перехватывает запросы
const getFixedUrl = (req) => {
	var now = Date.now()
	var url = new URL(req.url)

	// 1. исправляет URL http
	// просто продолжает синхронизацию с location.protocol
	// fetch(httpURL) принадлежит активированному смешанному контенту.
	// И fetch(httpRequest) пока не поддерживается.
	url.protocol = self.location.protocol

	// 2. добавит запрос для кэширования-перебора.
	// Github Pages обслуживаются с Cache-Control: max-age = 600,
	// max-age на мутабельном контенте подвержен ошибкам, и жизнь SW ошибок может даже расширяться.
	// До тех пор пока не будет применен режим кэширования Fetch API-интерфейса, мы должны обходить работу с кешем строкой запроса.
	// Cache-Control-Bug: https://bugs.chromium.org/p/chromium/issues/detail?id=453190
	if (url.hostname === self.location.hostname) {
		url.search += (url.search ? '&' : '?') + 'cache-bust=' + now
	}
	return url.href
}

/**
 *  @Lifecycle Activate
 *  Новый активируется, когда старый не используется.
 *
 *  waitUntil(): активация ====> активирован
 */
self.addEventListener('activate', event => {
	event.waitUntil(self.clients.claim())
})

/**
 *  @Functional Fetch
 *  Все сетевые запросы перехватываются здесь.
 *
 *  void respondWith(Promise<Response> r)
 */
self.addEventListener('fetch', event => {
	// Пропустит некоторые запросы с кросс-началом, например, для Google Analytics.
	if (HOSTNAME_WHITELIST.indexOf(new URL(event.request.url).hostname) > -1) {
		// Stale-while-revalidate (неготов-пока-ревалидация)
		// похожий на HTTP's stale-while-revalidate: https://www.mnot.net/blog/2007/12/12/stale
		// Обновление от Jake's to Surma's: https://gist.github.com/surma/eb441223daaedf880801ad80006389f1
		const cached = caches.match(event.request)
		const fixedUrl = getFixedUrl(event.request)
		const fetched = fetch(fixedUrl, {
			cache: 'no-store'
		})
		const fetchedCopy = fetched.then(resp => resp.clone())

		// Вызывает responseWith() с тем, что получает первым.
		// Если сбой извлечения (например, отключен), дожидается кеша.
		// Если в кеше ничего нет, дожидается fetch.
		// Если ни один из них не дает ответа, возвращает offline страницы.
		event.respondWith(
			Promise.race([fetched.catch(_ => cached), cached])
			.then(resp => resp || fetched)
			.catch(_ => {
				/* съедает любые ошибки */ })
		)

		// Обновляет кэш с версией, которую мы выбрали (только для статуса ok)
		event.waitUntil(
			Promise.all([fetchedCopy, caches.open(RUNTIME)])
			.then(([response, cache]) => response.ok && cache.put(event.request, response))
			.catch(_ => {
				/* съедает любые ошибки */ })
		)
	}
})
