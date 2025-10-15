# 📖 Guía Rápida - 10 Days of Base

## 🗂️ Estructura del Proyecto

```
10DaysofBase/
├── dia1/              # ✅ Día 1: First Smart Contract + Hardhat
├── dia2/              # 🔄 Día 2: Frontend with OnchainKit
├── dia3-10/           # ⏳ Próximos módulos
├── package.json       # Dependencias compartidas
├── .env               # Variables de entorno (crear desde .env.example)
└── README.md          # Índice general
```

---

## ⚡ Comandos Básicos

### Para el Día 1 (Hardhat + Smart Contracts)
```bash
# Navegar al día 1
cd dia1

# Compilar contratos
npx hardhat compile

# Deploy en Base Sepolia
npx hardhat run scripts/deploy-with-checks.js --network baseSepolia

# Abrir frontend
# Abrir dia1/frontend/index.html en tu navegador
```

### Para el Día 2 (Frontend OnchainKit)
```bash
# Navegar al día 2
cd dia2

# TODO: Comandos específicos del día 2
```

---

## 🔧 Configuración Inicial (Una sola vez)

### 1. Instalar dependencias
```bash
# Desde la raíz del proyecto
npm install
```

### 2. Configurar variables de entorno
```bash
# Crear archivo .env en la raíz
cp .env.example .env
```

Editar `.env` con tus credenciales:
```bash
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org
PRIVATE_KEY=tu_private_key_sin_0x
ETHERSCAN_API_KEY=tu_basescan_api_key
```

### 3. Obtener recursos
- **Base Sepolia ETH**: [Faucets oficiales](https://docs.base.org/tools/network-faucets)
- **BaseScan API Key**: [Crear cuenta](https://basescan.org/apis)

---

## 📍 Ubicación del archivo `.env`

**IMPORTANTE**: El archivo `.env` va en la **raíz del proyecto** (`10DaysofBase/.env`), NO dentro de cada carpeta de día.

```
10DaysofBase/
├── .env           ← AQUÍ va el archivo
├── dia1/
├── dia2/
└── ...
```

Cada `hardhat.config.js` está configurado para leer las variables desde `../.env`.

---

## 🚀 Workflow Típico

1. **Navegar al día correspondiente**: `cd dia1` o `cd dia2`
2. **Leer el README del día**: `cat README.md`
3. **Seguir las instrucciones específicas** de ese módulo
4. **Ejecutar comandos desde dentro de la carpeta del día**

---

## ✅ Checklist por Día

### Día 1
- [x] Compilar contrato Greeter
- [x] Deploy en Base Sepolia
- [x] Verificar en BaseScan
- [x] Interactuar via frontend

### Día 2
- [ ] Scaffold con create-onchain
- [ ] Conectar wallet
- [ ] Mostrar balance ETH
- [ ] Deploy en Base

---

## 🆘 Problemas Comunes

### Error: "Cannot find module 'dotenv'"
```bash
# Instalar desde la raíz
npm install
```

### Error: "Invalid private key"
- Verifica que tu `PRIVATE_KEY` en `.env` NO tenga el prefijo `0x`
- Verifica que el archivo `.env` esté en la raíz del proyecto

### Error: "Insufficient funds"
- Obtén Base Sepolia ETH de los [faucets](https://docs.base.org/tools/network-faucets)

---

## 🔗 Links Rápidos

- [Base Docs](https://docs.base.org/)
- [BaseScan Sepolia](https://sepolia.basescan.org/)
- [OnchainKit](https://onchainkit.xyz/)
- [Base Discord](https://discord.gg/buildonbase)

---

**📅 Última actualización**: Día 1 completado | Día 2 en progreso

