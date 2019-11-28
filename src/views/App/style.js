import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Sulphur Point';

    background: #8E2DE2;
    background: -webkit-linear-gradient(to bottom, #571d8a, #8E2DE2);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #571d8a, #8E2DE2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    min-height: 100vh;
`;

export const Row = styled.div`
    background-color: #fff;
    min-height: calc(100vh - 30px);
    margin: 15px 0;
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
        
        button {
            display: none;
        }
    }

    pre {
        margin: 35px; 
        font-size: 13px;
    }

`;

export const Spinner = styled.div`
    margin-top: 35px;
    border: 4px solid transparent;
    border-top: 4px solid #8E2DE2;
    border-right: 4px solid #8E2DE2;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

`;