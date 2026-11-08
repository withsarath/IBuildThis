## Next notes

---SERVER COMPONENTS---

- By default next is server components
- its dont re-render
- HOOKS not allowed
- not included in browser bundle
1. HTML: Allows the browser to display the page immediately.
2. RSC Payload: Helps React understand the Server Component tree and 3. Client Component boundaries.
4. JavaScript Bundle: Provides the JavaScript needed to make Client Components interactive.
- it uses RSC(React Server Component) stream
- we cannot pass a function as a prop in server components (because server components runs on server not client)

- no browser API's

---CLIENT COMPONENTS---

- To use components as client we need to type use 'use client' as top of file 
- HOOKS Allowed
- it can re-render
- it has browser bundle
- can't have RSC as a child
- Browser API's are allowed

## Rendering Spectrum in Nextjs

- Static: pre-build and cached forever
- Dynamic: rendered per request
- Revalidated: rebuild periodically
- Streaming: Progressively streamed chucks