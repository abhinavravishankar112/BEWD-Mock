# Deployment Report

## Platform Used
The application was deployed using Render.

---

## Deployment Steps

1. Pushed code to GitHub
2. Connected repository to Render
3. Configured build and start commands
4. Added environment variables
5. Deployed successfully

---

## Challenges Faced

- Initial deployment failed due to missing environment variables
- Fixed by adding MONGO_URI and JWT_SECRET in Render dashboard

---

## API Testing

The following endpoints were tested using Postman:

- POST /register
- POST /login
- POST /tasks
- GET /tasks (cache verified)
- PUT /tasks/:id

---

## Performance Observations

| Endpoint | Response Time |
|----------|-------------|
| GET /tasks (DB) | ~120ms |
| GET /tasks (Cache) | ~20ms |
| POST /tasks | ~100ms |

---

## Live URL

https://your-app.onrender.com