import { useState } from "react";

const AddRecipe = ({ setRecipes }) => {
    const [nameRecipe, setNameRecipe] = useState('');
    const [submittedBy, setSubmittedBy] = useState('');
    const [contextRecipe, setContextRecipe] = useState('');
    const [persons, setPersons] = useState(0);
    const [preparationTime, setPreparationTime] = useState(0);
    const [ingredients, setIngredients] = useState(["", "", "", ""]);
    const [quantities, setQuantities] = useState(["", "", "", ""]);
    const [utilities, setUtilities] = useState([""]);
    const [instructions, setInstructions] = useState(["", ""]);
 
  return (
    <main className="AddRecipe">
        <h1>Recept toevoegen aan Cuisine Escalée</h1>
        <form>
            <label htmlFor="nameRecipe">Naam van het Recept:</label>
            <input
                id="nameRecipe"
                type="text"
                required
                value={nameRecipe}
                onChange={(e) => setNameRecipe(e.target.value)}
            />
            <label htmlFor="submittedBy">Jouw naam:</label>
            <input
                id="submittedBy"
                type="text"
                placeholder="Jefke Vanderlinden"
                required
                value={submittedBy}
                onChange={(e) => setSubmittedBy(e.target.value)}
            />
            <label htmlFor="contextRecipe">Context:</label>
            <input
                id="contextRecipe"
                type="text"
                placeholder="Mijn lievelingsgerecht"
                value={contextRecipe}
                onChange={(e) => setContextRecipe(e.target.value)}
            />
            {/*switch toevoegen om url/screenshot te uploaden ipv informatie*/}
            <label htmlFor="persons">Aantal personen:</label>
            <input 
                //to do: validate input data
                id="persons"
                type="number"
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
            />
            <label htmlFor="preparationTime">Bereidingstijd:</label>
            <input 
                id="preparationTime"
                type="time"
                value={preparationTime}
                onChange={(e) => setPreparationTime(e.target.value)}
            />
            <label>Ingredienten</label>
            {ingredients.map((item, index) => (
                <>
                <label htmlFor={`ingredient${index}`}></label>
                <input
                    id={`ingredient${index}`}
                    type="text"
                    value={ingredients[index]}
                    onChange={(e) => setIngredients(ingredients.map((ingredient, i) => i===index ? e.target.value : ingredient))}
                />
                
                <label htmlFor={`quantity${index}`}></label>
                <input
                    id={`quantity${index}`}
                    type="text"
                    value={quantities[index]}
                    onChange={(e) => setQuantities(quantities.map((quanity, i) => i===index ? e.target.value : quanity))}
                />
                </>
            ))}
                <button type="button" name="addIngredient" onClick={() => {setIngredients([...ingredients, ""]); setQuantities([...quantities, ""])}}>+</button>
                {ingredients.length > 1 ? ( <button type="button" name="deleteIngredient" onClick={() => {setIngredients(ingredients.slice(0, -1)); setQuantities(quantities.slice(0, -1))}}>-</button> ) : (<></>)}
            
                <label>Benodigdheden: </label>
            {utilities.map((item, index) => (
                <>
                <label htmlFor={`utility${index}`}></label>
                <input
                    id={`utility${index}`}
                    type="text"
                    value={utilities[index]}
                    onChange={(e) => setUtilities(utilities.map((utility, i) => i===index ? e.target.value : utility))}
                />
                </>
            ))}
                <button type="button" name="addUtility" onClick={() => {setUtilities([...utilities, ""])}}>+</button>
                {utilities.length > 1 ? ( <button type="button" name="deleteUtility" onClick={() => {setUtilities(utilities.slice(0, -1))}}>-</button> ) : (<></>)}
            
                <label>Instructies: </label>
            {instructions.map((item, index) => (
                <>
                <label htmlFor={`instruction${index}`}></label>
                <input
                    id={`instruction${index}`}
                    type="text"
                    value={instructions[index]}
                    onChange={(e) => setInstructions(instructions.map((instruction, i) => i===index ? e.target.value : instruction))}
                />
                </>
            ))}
                <button type="button" name="addInstruction" onClick={() => {setInstructions([...instructions, ""])}}>+</button>
                {instructions.length > 1 ? ( <button type="button" name="deleteInstruction" onClick={() => {setInstructions(instructions.slice(0, -1))}}>-</button> ) : (<></>)}

            <p>Uploadzone toevoegen voor foto's</p>
            <button type="submit">Recept toevoegen</button>
        </form>
        <p>{ingredients}</p>
    </main>
  )
}

export default AddRecipe