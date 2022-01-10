class Category {

  difficulty = 1
  
  constructor() {
  }

  getDifficulty() {
    return this.difficulty;
  }

  increaseDifficulty() {
    this.difficulty ++
  }

}

export { Category };