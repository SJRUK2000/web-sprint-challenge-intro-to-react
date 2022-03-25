// Write your Character component here
import React from "react";
import styled  from "styled-components";

const StyledCharacter = styled.div `
    display: flex;
    flex-flow: row-wrap;
    align-items: center;
    border: solid white 1px;
    margin: 0px auto;
    margin-top: 50px;
    padding: 50px;
    max-width: 60%;
    
`;
const StyledHeading = styled.h3`
    display: flex;
    flex-flow: row-wrap;
    justify-content: center;
`;

const Character = (props) => {
    return (
        <>
        {props.characterList.map((character, id) => {
            return (
                <StyledCharacter key={id}>
                    <StyledHeading>Name: {character.name}</StyledHeading>
                    <p>Year Born: {character.birth_year} </p>
                    <p>Height: {character.height} </p>
                    <p>Mass: {character.mass} </p>
                    <p>Skin Color: {character.skin_color} </p>
                    <p>Hair Color: {character.hair_color} </p>
                    <p>Eye Color: {character.eye_color} </p>
                </StyledCharacter>

            )
        })}
        </>
    )
}

export default Character