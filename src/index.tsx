import ReactDOM from "react-dom/client";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
    return (
        <div>
            Hello
        </div>
    );
};

root.render(<App />);