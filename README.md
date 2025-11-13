# @dep/http 🌐

> Type-safe, minimal, and flexible HTTP client with built-in timeout, delay, and Next.js caching support.

## [![JSR version](https://jsr.io/badges/@dep/http)](https://jsr.io/@dep/http)

## Features ✨

- ⚡ Simple and type-safe HTTP wrapper for `fetch`
- ⏱️ Timeout and delay support for better request control
- 🧠 Full TypeScript types for headers and HTTP methods
- 🧩 Works seamlessly with Next.js caching (`next.revalidate`, `next.tags`)
- 🖥️ Includes a lightweight CLI for quick requests from the terminal

---

## Installation 📦

- **Deno**:

  ```bash
  deno add jsr:@dep/http
  deno install -A -n http jsr:@dep/http/cli
  ```

* **Node.js (18+) or Browsers**:

  ```bash
  npx jsr add @dep/http
  ```

  Then import as an ES module:

  ```typescript
  import { get, post, http } from '@dep/http';
  ```

---

## Usage 🎯

### CLI 💻

```bash
http https://api.example.com/data --method GET --timeout 5000
```

```bash
http https://api.example.com/users --method POST --body '{"name": "John"}'
```

**Options:**

- `--method` → HTTP method (`GET`, `POST`, `DELETE`, `PATCH`)
- `--headers` → JSON string of headers
- `--body` → Request body data
- `--timeout` → Timeout in milliseconds

---

### API 🧩

#### Basic GET

```ts
import { get } from '@dep/http';

const response = await get('https://api.example.com/users');
const data = await response.json();
console.log(data);
```

#### POST with JSON Body

```ts
import { post } from '@dep/http';

const response = await post('https://api.example.com/users', {
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Estarlin', age: 24 }),
});
```

#### Using `http` directly

```ts
import { http } from '@dep/http';

const res = await http('https://api.example.com/data', {
  method: 'PATCH',
  timeout: 8000,
  headers: { Authorization: 'Bearer token' },
  body: JSON.stringify({ active: true }),
});
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
