# Kamas Lau

**I turn scattered infrastructure into units that survive being handed over.**

I do this for foreign companies operating in China — on their own hardware, behind their firewall, without a vendor console in the loop, and usually as the only technical person in the room. Since 2023 that has meant compliance architecture, head-office systems localised for the mainland, and the infrastructure underneath both.

## What is here

Three things, each of which started as a client problem rather than a side project.

| Repository | The question it answers | Stack |
|---|---|---|
| [infra-blocks](https://github.com/kamaslau/infra-blocks) | "How do we stand this service up on a client's machine, and hand it over?" — twelve disposable units: one service, one port, one documented credential | Docker Compose · k3s · Caddy |
| [chinese_regions](https://github.com/kamaslau/chinese_regions) | "Where is this address actually located?" — provinces, cities, counties and districts of the PRC as a callable dataset | TypeScript |
| [http-response-text](https://github.com/kamaslau/http-response-text) | "What does a 503 mean to an operator who does not read English?" — status codes as text in the caller's language | TypeScript |

The units are disposable on purpose. A handover should not depend on me staying.

## How I work

- Documents written for the person who will maintain the thing, not for the person who asked for it.
- Every claim in a README has a command under it that proves the claim. If it cannot be run, it does not go in.
- Nothing clever. The clever version is the one nobody can operate at 2am.

## Elsewhere

[kamaslau.com](https://www.kamaslau.com/works?utm_source=github&utm_medium=profile&utm_campaign=always-on) — the work itself, in more detail · kamaslau@dingtalk.com
