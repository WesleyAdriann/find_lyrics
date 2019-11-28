import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Sulphur Point';
`;

export const Row = styled.div`
    width: 75%;
    max-width: 1140px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    h1 {  
        font-size: 45px;
    }

    form {
        display: flex;
        text-align: left;

        label {
            display: flex;
            flex-direction: column;
            margin: 5px;
            font-size: 18px;

            input {
                padding: 10px;
                font-size: 15px;
                border-radius: 7px;
                border: 1px solid #ccc;

                &:focus {
                    outline: none;
                }
            }
        } 
    }

`;
