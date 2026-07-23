# TuShop (Shopping Cart)

A React shopping cart application where products are loaded from a live API and managed through a clean, dropdown-based cart experience.

## Description

TuShop is a single-page e-commerce front end: a product catalog fetched from a live [json-server](https://github.com/typicode/json-server) API, with a header cart that supports adding items, incrementing quantities, removing items, and clearing the cart, all with a live item-count badge and running total.

I built it to practice real-world React patterns, the Context API for global state, custom hooks, and data fetching with proper loading and error states, using modern tooling (Vite, Tailwind CSS v4) in a project shaped like something businesses actually ship.

<!-- It's for anyone learning React state management beyond `useState`, and for anyone evaluating my work, the codebase is intentionally small enough to read in one sitting. -->

## Demo

🔗 **Live demo:** https://shopping-cart-o75w.vercel.app/

📦 **Product API:** https://json-server-vercel-seven-sepia.vercel.app/products

<!-- TODO: add a screenshot or GIF here  e.g. ![ShopMate screenshot](docs/screenshot.png) -->

## Features

- **Product catalog** - products fetched from an API and rendered as cards with image, description, and price, with loading and error states handled
- **Add to cart** - adding the same product again increments its quantity instead of duplicating it
- **Cart dropdown** - the header cart icon shows a live item-count badge and opens a dropdown listing cart items with a running total
- **Remove & clear** - remove individual items or clear the whole cart

## Tech Stack

- [React 19](https://react.dev/) with the Context API for state management (`ProductContext` for product data, `CartContext` for cart state)
- [Vite](https://vite.dev/) for dev server and builds
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [react-icons](https://react-icons.github.io/react-icons/) for the cart icon
- [json-server](https://github.com/typicode/json-server) as the product API

## Folder Structure

```
shopping-cart/
├── src/
│   ├── components/     # Header (cart dropdown), ProductList, ProductCard
│   ├── context/        # ProductContext (API fetch), CartContext (cart state)
│   ├── data/db.json    # Product database for json-server
│   ├── App.jsx
│   └── main.jsx        # Wraps App in ProductProvider + CartProvider
├── public/images/      # Product images
└── vite.config.js      # React + Tailwind plugins, /api proxy, base path
```

## Installation

> **Note:** the app lives in the `shopping-cart/` subdirectory, run all commands from there.

```bash
git clone git@github.com:Mumbi286/shopping-cart.git
cd shopping-cart/shopping-cart
npm install
npm run dev
```

The app fetches products from a deployed json-server instance by default, so `npm run dev` is all you need.

To work against local product data instead, start the local API in a second terminal:

```bash
npm run json-server   # serves src/data/db.json
```

and point the fetch in `src/context/ProductContext.jsx` at `/api/products` 

### Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run json-server` | Serve `src/data/db.json` on port 8001 |

## Environment Variables

| Variable | Default | Description |
| --- | --- | --- |
| `VITE_BASE_PATH` | `/shopping-cart` | Base public path the built app is served under (set in `vite.config.js`). Override it when deploying to a host that serves from the root, e.g. `VITE_BASE_PATH=/ npm run build`. |

## Challenges

<!-- TODO: personalize - these are drafts based on the codebase; rewrite in your own words -->

- **Serving product data in production** - json-server only runs locally, so the deployed app needed a hosted API. Solved by deploying json-server to Vercel and fetching from it directly.
- **Shared state across unrelated components** - `ProductCard` adds items while `Header` displays them, with no parent-child relationship. Solved with the Context API and custom hooks (`useCart`, `useProducts`) instead of prop drilling.
- **Duplicate cart entries** - clicking "Add to Cart" twice initially created two rows. Solved by checking for an existing item in `addToCart` and incrementing its `qty` instead.

## Lessons Learned

<!-- TODO: personalize - these are drafts; rewrite in your own words -->

- How to design React Context providers and expose them through custom hooks for cleaner consumption
- Handling the full lifecycle of a fetch: loading, success, and error states
- Deriving values (item count, cart total) from state with `reduce` instead of storing them separately
- Configuring Vite: plugins, dev-server proxies, and base paths for deployment

## Future Improvements

- Persist the cart to `localStorage` so it survives page reloads
- Quantity controls (+/−) directly in the cart dropdown
- A dedicated cart/checkout page and product detail pages
- Search and category filtering for the catalog
- Tests (Vitest + React Testing Library)

## License

This project is licensed under the [MIT License](LICENSE).

## Author

**Christine Mumbi**

- GitHub: [@Mumbi286](https://github.com/Mumbi286)
- Project: [github.com/Mumbi286/shopping-cart](https://github.com/Mumbi286/shopping-cart)

## Acknowledgements

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [json-server](https://github.com/typicode/json-server)
- [react-icons](https://react-icons.github.io/react-icons/)
