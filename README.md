
# Invox - Sprint 3 (React + Vite + TypeScript + Tailwind + React Router)

Projeto reestruturado a partir da Sprint 2 em SPA com componentização, rotas estáticas e dinâmicas e uso de hooks.

## Tecnologias
- React 18 + TypeScript (Vite)
- React Router v6 (rotas estáticas/dinâmicas, `useNavigate`, `useParams`)
- TailwindCSS (estilização e responsividade)
- Hooks: `useState`, `useEffect`

## Rodando localmente
```bash
npm i
npm run dev
```
Abra o link exibido no terminal.

## Estrutura de rotas
- `/` Home
- `/integrantes` Lista de integrantes
- `/integrantes/:id` Detalhe do integrante (rota dinâmica)
- `/faq` FAQ
- `/projeto` Projeto
- `/contato` Contato
```

## Observações
- Imagens dos integrantes usam placeholders (Unsplash). Você pode substituir por arquivos locais em `public/` e atualizar as URLs.
- Paleta de cores mantém o azul `#0066cc` como cor principal (`brand.blue` no Tailwind).
