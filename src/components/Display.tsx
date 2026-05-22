import './styles/Display.css';



export default function Display({ component: Component }: { component: React.ComponentType }) 
{
    return (
        <div>
            <div id="display">
                <Component />
            </div>
        </div>
    );
}

