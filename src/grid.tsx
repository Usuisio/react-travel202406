import styled from 'styled-components';

const GridStyle = styled.div`
    display: grid;
    grid-template-areas:
                "header header header"
                "side main main"
                "footer footer footer";
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 1fr 2fr 2fr;
            gap: 10px;
            height: 100vh;
            margin: 0;
            
        .header {
            grid-area: header;
            background: lightblue;
        }
        .side {
            grid-area: side;
            background: lightgreen;
        }
        .main {
            grid-area: main;
            background: lightcoral;
        }
        .footer {
            grid-area: footer;
            background: lightgoldenrodyellow;
        }
    `;

export const Grid = () => {
    return (
        <GridStyle>
            <header className="header">Header</header>
            <div className="side">Side</div>
            <div className="main">Main</div>
            <footer className="footer">Footer</footer>
        </GridStyle>
    );
}


