import { useState } from "react";

const AddRecipe = ({ setRecipes }) => {
    const [form, setForm] = useState({
        nameRecipe: '',
        submittedBy: '',
        contextRecipe: '',
        persons: 0,
        preparationTime: 0,
        ingredients: ['', '', ''],
        quantities: ['', '', ''],
        utilities: [''],
        instructions: ['', '', ''],
    })
    const [ingredients, setIngredients] = useState(["", "", "", ""]);
    const [quantities, setQuantities] = useState(["", "", "", ""]);
    const [utilities, setUtilities] = useState([""]);
    const [instructions, setInstructions] = useState(["", ""]);
    // refactor to 1 useState object
    // setForm({...form, nameRecipe: e.target.value})
    {/*switch toevoegen om url/screenshot te uploaden ipv informatie*/}
    const handleFormChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

  return (
    <main className="AddRecipe">
        <h1>Recept toevoegen aan Cuisine Escalée</h1>
        <form>
            <label htmlFor="nameRecipe">Naam van het Recept:</label>
            <input
                id="nameRecipe"
                name="nameRecipe"
                type="text"
                required
                value={form.nameRecipe}
                onChange={handleFormChange}
            />
            <label htmlFor="submittedBy">Jouw naam:</label>
            <input
                id="submittedBy"
                name="submittedBy"
                type="text"
                placeholder="Jefke Vanderlinden"
                required
                value={form.submittedBy}
                onChange={handleFormChange}
            />
            <label htmlFor="contextRecipe">Context:</label>
            <input
                id="contextRecipe"
                name="contextRecipe"
                type="text"
                placeholder="Mijn lievelingsgerecht"
                value={form.contextRecipe}
                onChange={handleFormChange}
            />

            <label htmlFor="persons">Aantal personen:</label>
            <input 
                //to do: validate input data
                id="persons"
                name="persons"
                type="number"
                value={form.persons}
                onChange={handleFormChange}
            />
            <label htmlFor="preparationTime">Bereidingstijd:</label>
            <input 
                id="preparationTime"
                name="preparationTime"
                type="time"
                value={form.preparationTime}
                onChange={handleFormChange}
            />
            <label>Ingredienten</label>
            {ingredients.map((item, index) => (
                <>
                <label htmlFor={`ingredients[${index}]`}></label>
                <input
                    id={`ingredients[${index}]`}
                    name={`ingredients[${index}]`}
                    type="text"
                    value={form.ingredients[index]}
                    onChange={handleFormChange}
                />
                
                <label htmlFor={`quantities[${index}]`}></label>
                <input
                    id={`quantities[${index}]`}
                    name={`quantities[${index}]`}
                    type="text"
                    value={form.quantities[index]}
                    onChange={handleFormChange}
                />
                </>
            ))}
                <button type="button" name="addIngredient" onClick={() => {setIngredients([...ingredients, ""]); setQuantities([...quantities, ""])}}>+</button>
                {ingredients.length > 1 ? ( <button type="button" name="deleteIngredient" onClick={() => {setIngredients(ingredients.slice(0, -1)); setQuantities(quantities.slice(0, -1))}}>-</button> ) : (<></>)}
            
                <label>Benodigdheden: </label>
            {utilities.map((item, index) => (
                <>
                <label htmlFor={`utilities[${index}]`}></label>
                <input
                    id={`utilities[${index}]`}
                    name={`utilities[${index}]`}
                    type="text"
                    value={form.utilities[index]}
                    onChange={(e) => setUtilities(utilities.map((utility, i) => i===index ? e.target.value : utility))}
                />
                </>
            ))}
                <button type="button" name="addUtility" onClick={() => {setUtilities([...utilities, ""])}}>+</button>
                {utilities.length > 1 ? ( <button type="button" name="deleteUtility" onClick={() => {setUtilities(utilities.slice(0, -1))}}>-</button> ) : (<></>)}
            
                <label>Instructies: </label>
            {instructions.map((item, index) => (
                <>
                <label htmlFor={`instructions[${index}]`}></label>
                <input
                    id={`instructions[${index}]`}
                    name={`instructions[${index}]`}
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
        <p>{form.nameRecipe}</p>
    </main>
  )
}

export default AddRecipe