import { useState } from "react";

import FilterCategories from './FilterCategory.jsx';
import FilterPrice from './FilterPrice.jsx';
import ListDishes from './ListDishes.jsx';

function App() {

  const [maxPrice, setMaxPrice] = useState(9);

  return (
    <main>
      <section aria-label="filters">
        <div className="sticky">
          <h1>Burger Place</h1>
          <form>
            <h2>Filter dishes</h2>
            <FilterPrice setMaxPrice={setMaxPrice}/>
            <FilterCategories />
          </form>
        </div>
      </section>
      <ListDishes maxPrice={maxPrice}/>
    </main>
  );
}

export default App;

// function App() {
//   return (
//     <main>
//       <section aria-label="filters">
//         <div className="sticky">
//           <h1>Burger Place</h1>
//           <form>
//             <h2>Filter dishes</h2>
//             <fieldset>
//               <legend>Price</legend>
//               <label htmlFor="max-price">
//                 Max price
//                 <input
//                   type="range"
//                   id="max-price"
//                   min="0.5"
//                   max="9"
//                   step="0.25"
//                 />
//               </label>
//             </fieldset>
//             <fieldset>
//               <legend>Category</legend>
//               <label htmlFor="all">
//                 <input type="radio" name="categories" id="all" value="all" />
//                 all
//               </label>
//               {categories.map((c) => (
//                 <label htmlFor={c} key={c}>
//                   <input type="radio" name="categories" id={c} value={c} />
//                   {c}
//                 </label>
//               ))}
//             </fieldset>
//           </form>
//         </div>
//       </section>
//       <section aria-label="dishes">
//         <ul className="grid">
//           {dishes.map((dish) => (
//             <li key={dish.id} className="card">
//               <h3>{dish.name}</h3>
//               {dish.description && <p>{dish.description}</p>}
//               <div>£{dish.price.toFixed(2)}</div>
//             </li>
//           ))}
//         </ul>
//       </section>
//     </main>
//   );
// }
