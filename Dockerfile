# Build stage
FROM node:22-slim AS build
WORKDIR /app
COPY yarn.json yarn-lock.json ./
RUN npm install --frozen-lockfile
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
