# syntax=docker/dockerfile:1

FROM node:22-alpine AS build

WORKDIR /app

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY . .

ARG VITE_GTM_ID=GTM-TN6SPLVR
ENV VITE_GTM_ID=$VITE_GTM_ID

RUN npm run build

FROM alpine:3.20

WORKDIR /usr/share/html

COPY --from=build /app/dist ./
