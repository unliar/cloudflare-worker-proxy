export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)
  // 目标地址
  const target = url.searchParams.get('target')

  // 需要目标地址
  if (!target) {
    return new Response(
      JSON.stringify({
        code: 422,
        message: 'Missing target',
      }),
      { status: 422, headers: { 'Content-Type': 'application/json' } },
    )
  }
  // 读取请求体
  const body = await request.json()
  // 发送请求
  return fetch(target, {
    method: request.method,
    headers: request.headers,
    body: request.method == 'POST' ? JSON.stringify(body) : null,
  })
}
