body {
  font-family: Arial, sans-serif;
  text-align: center;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
}

h1 {
  color: #333;
}

.tabuleiro {
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 10px;
  justify-content: center;
  margin-top: 30px;
}

.carta {
  width: 100px;
  height: 100px;
  background-color: #4a90e2;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s;
}

.carta.revelada {
  background-color: #50e3c2;
}
