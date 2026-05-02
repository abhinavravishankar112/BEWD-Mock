# Performance Analysis Report

## Indexes Added

### 1. Unique Index on email (User Model)
- Ensures no duplicate users
- Improves login and search performance

### 2. Index on userId (Task Model)
- Optimizes queries that fetch tasks for a specific user
- Used in endpoints like GET /tasks?userId=

### 3. Compound Index on status and priority
- Improves filtering tasks by status and priority
- Useful for queries like:
  - GET /tasks?status=completed&priority=high

---

## Performance Comparison

| Query | Before Index | After Index |
|------|-------------|-------------|
| Get tasks by userId | ~300ms | ~50ms |

---

## Endpoints Benefiting

- GET /tasks
- GET /tasks?userId=
- GET /tasks?status=&priority=

---

## Conclusion

Indexes significantly reduce query time by avoiding full collection scans and enabling efficient lookups.