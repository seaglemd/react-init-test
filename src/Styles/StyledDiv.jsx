import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 50%;
    margin: 10px auto 10px auto;
    border: 1px solid rgb(189, 189, 189);
    box-shadow: 0 2px 3px rgb(54, 54, 54);
    padding: 16px;
    text-align: center;        
    
    @media (min-width: 500px) {
        width: 450px
    }
`;

export default StyledDiv;