# POS Backend (NestJS)

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" />
</p>

<p align="center">
  API de punto de venta construida con <strong>NestJS</strong>, <strong>TypeORM</strong> y <strong>PostgreSQL</strong>.
</p>

---

## Características
- **NestJS + TypeScript**
- **TypeORM** con relaciones y seeds
- **Módulos**: categorías, productos, cupones y transacciones
- Configuración por **variables de entorno**

## Requisitos
- Node.js 18+
- PostgreSQL 13+

## Instalación
```bash
npm install
```

## Variables de entorno
Crea un archivo `.env` en `backend/`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=pos
# Opcional
PORT=3001
```

## Scripts
```bash
# desarrollo
npm run start:dev

# producción
npm run build && npm run start:prod

# ejecutar seeder (borra y recrea la BD)
npm run seed

# pruebas
npm run test         # unit
npm run test:e2e     # e2e
npm run test:cov     # cobertura
```

## Endpoints (ejemplos)
- GET `/categories`
- GET `/categories/:id?products=true`
- GET `/products`

## Seeder
El seeder limpia y repuebla la base de datos con categorías y productos de ejemplo:
```bash
npm run seed
```
Esto ejecuta `onModuleInit()` para `dropDatabase()` y `synchronize()`, luego inserta datos.

## Despliegue
- Ajusta variables de entorno para tu entorno productivo
- Genera build: `npm run build`
- Arranca: `npm run start:prod`

## Licencia
MIT
