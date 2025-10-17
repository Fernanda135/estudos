const { createRoot } = ReactDOM; 

function ContagemRegressiva() {
    return (<>
        <h2>X vezes restante</h2>;
        <button>ContagemRegressiva</button>
    </>);
}

const root = document.querySelector("#root");
createRoot(root).render(<ContagemRegressiva />); 