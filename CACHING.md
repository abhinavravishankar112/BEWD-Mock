# Caching Strategy

## Why this endpoint was cached

The GET /tasks endpoint was chosen because:
- It is frequently accessed
- It involves database reads which are expensive
- Caching reduces repeated database queries

---

## How caching works

- The result of GET /tasks is stored in memory
- A timestamp is stored along with the data
- If a request comes within 60 seconds, cached data is returned
- Otherwise, fresh data is fetched from the database

---

## Cache Invalidation

The cache is cleared whenever data changes:
- Task is created
- Task is updated
- Task is deleted

This ensures users always receive up-to-date data.

---

## Limitations of In-Memory Caching

- Cache is lost when server restarts
- Not suitable for distributed systems (multiple servers)
- Limited by server memory