

const RecipeBook = ({recipes}) => {

  return (
    <main>
      {recipes.length ? (
        <ul>
          {recipes.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
  ) : (
    <p>Geen gerechten gevonden</p>
  )}
    </main>
  );
}

export default RecipeBook