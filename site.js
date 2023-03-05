const charactersData = [
    {
        title: "Jobalk the Brave",
        weapon: "hammer",
        race: "Human"
    },
    {
        title: "Mordum the Vile",
        weapon: "throwing knife",
        race: "Goblin"
    },
    {
        title: "Silvia the Humble",
        weapon: "staff",
        race: "Human"
    },
    {
        title: "Snivvler the Cunning",
        weapon: "bow and arrow",
        race: "Elf"
    },
    {
        title: "Lillia the Hero",
        weapon: "greatsword",
        race: "Ogre"
    },
    {
        title: "Falmir the Righteous",
        weapon: "spear",
        race: "Angel"
    }
]

const setCharacterList = () => {
    const listElement = document.querySelector("#charactersList");
    listElement.innerHTML = "";

    charactersData.forEach(character => {
        let characterListItem = document.createElement('li');
        characterListItem.textContent = character.title;
        listElement.append(characterListItem);
    });
}

const setCharacterInfo = (character) => {

    let characterInfoElement = document.querySelector("#characterInfo");
    characterInfoElement.innerHTML = "";

    if (character != null) {
        let characterInfoParagraph = document.createElement('p');
        characterInfoParagraph.innerHTML = "Character Info:";

        let characterInfo = document.createElement('p');
        characterInfo = `${character.title} wields a ${character.weapon} and is a(n) ${character.race}`;

        characterInfoElement.append(characterInfoParagraph);
        characterInfoElement.append(characterInfo);
    }
}

const createCharacter = () => {
    setCharacterInfo(null);
    let titleInput = prompt("Enter this new character's title");
    let weaponInput = prompt("Enter this new character's weapon of choice");
    let raceInput = prompt("Enter this new character's race");

    charactersData.push({
        title: titleInput,
        weapon: weaponInput,
        race: raceInput
    });
};

const readCharacter = () => {
    let characterSelection = prompt("Which character would you like to read");
    let characterObject = charactersData.find(character => character.title == characterSelection);
    setCharacterInfo(characterObject);
}

const updateCharacter = () => {
    setCharacterInfo(null);
    let characterSelection = prompt("Which character would you like to update?");
    let characterIndex = charactersData.findIndex(character => character.title == characterSelection);
    if (characterIndex == -1) {
        alert("No character found by that title");
    }
    else {
        let newTitle = prompt(`What is ${charactersData[characterIndex].title}'s new title?`);
        let newWeapon = prompt(`What is ${newTitle}'s new weapon of choice?`);
        let newRace = prompt(`What is ${newTitle}'s new race?`);

        charactersData[characterIndex] = {
            title: newTitle,
            weapon: newWeapon,
            race: newRace
        };
    }
}

const deleteCharacter = () => {
    setCharacterInfo(null);
    let characterSelection = prompt("Which character would you like to delete?");
    let characterIndex = charactersData.findIndex(character => character.title == characterSelection);
    if (characterIndex == -1) {
        alert("No character found by that title");
    }
    else {
        charactersData.splice(characterIndex);
    }
}

const act = () => {
    let action = document.querySelector("#choice").value;
    switch(action) {
        case "C":
            createCharacter();
            setCharacterList();
            break;
        case "R":
            readCharacter();
            break;
        case "U":
            updateCharacter();
            setCharacterList();
            break;
        case "D":
            deleteCharacter();
            setCharacterList();
            break;
    }
};

setCharacterList();