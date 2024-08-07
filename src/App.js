// App.js
import React, { useState, useEffect } from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(8);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, [currentPage]);

  useEffect(() => {
    const calculateTotalPages = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        if (!response.ok) throw new Error('Error fetching total Pokemon');
        const data = await response.json();
        setTotalPages(Math.ceil(data.count / pokemonPerPage));
      } catch (err) {
        setError(err.message);
      }
    };
    calculateTotalPages();
  }, [pokemonPerPage]);

  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonPerPage}&offset=${(currentPage - 1) * pokemonPerPage}`);
      if (!response.ok) throw new Error('Error fetching total Pokemon');
      const data = await response.json();
      const pokemonData = await Promise.all(data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        if (!res.ok) throw new Error('Error fetching total Pokemon');
        return res.json();
      }));
      setPokemon(pokemonData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredPokemon = pokemon.filter(p => 
    p.name.toLowerCase().includes(search)
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div>
        <h1>Pokedex</h1>
        <div>
          <input
            type="text"
            placeholder="Cari Pokemon"
            onChange={handleSearch}
          />
        </div>
        {loading && <p>Memuat...</p>}
        {error && <p>{error}</p>}
        <div>
          {filteredPokemon.map(p => (
            <div key={p.id}>
              <div>
                <img src={p.sprites.front_default} alt={p.name} />
              </div>
              <div>
                <h2>{p.name}</h2>
                <p>Tipe: {p.types.map(t => t.type.name).join(', ')}</p>
                <div>
                  <div>
                    <span>HP:</span>
                    <div>
                      <div style={{width: `${(p.stats.find(stat => stat.stat.name === 'hp').base_stat / 255) * 100}%`}}></div>
                    </div>
                  </div>
                  <div>
                    <span>ATK:</span>
                    <div>
                      <div style={{width: `${(p.stats.find(stat => stat.stat.name === 'attack').base_stat / 255) * 100}%`}}></div>
                    </div>
                  </div>
                  <div>
                    <span>DEF:</span>
                    <div>
                      <div style={{width: `${(p.stats.find(stat => stat.stat.name === 'defense').base_stat / 255) * 100}%`}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Sebelumnya
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;