export async function handleRequest(request: Request): Promise<Response> {
  // 需要目标地址

  // 读取请求体
  const r = (await request.json()) as any
  const { url, body } = r
  if (!url) {
    return new Response(
      JSON.stringify({
        code: 422,
        message: 'Missing url',
      }),
      { status: 422, headers: { 'Content-Type': 'application/json' } },
    )
  }

  // 发送请求
  return fetch(url, {
    method: request.method,
    headers: request.headers,
    body: request.method == 'POST' ? JSON.stringify(body) : null,
  })
}
