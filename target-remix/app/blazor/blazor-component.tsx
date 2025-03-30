import "./blazor-component.css";
import { BlazorComponentSetup } from "./blazor-component-setup";
import React, { useEffect, useRef, useState } from "react";

export default function BlazorComponent() {
    const [count, setCount] = useState(0);
    const [isInitialized, setIsInitialized] = useState(false);
    const blazorComponentSetupRef = useRef(new BlazorComponentSetup());

    const initialize = async () => {
        const blazorComponentSetup = blazorComponentSetupRef.current;
        setIsInitialized(await blazorComponentSetup.initializeAsync());
    };

    const sendMessage = () => {
        const blazorComponentSetup = blazorComponentSetupRef.current;
        blazorComponentSetup.sendMessage();
    }

    const incrementCount = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
        initialize();
        return () => {
            setIsInitialized(false);
        }
    }, []);
    return (
        <div className="flex-column-center">{
            isInitialized &&
            <div className='card-blazor'>
                {React.createElement('blazor-custom-element-scoped', { 'element-title': 'Blazor Micro Frontend (Scoped)' })}
                {React.createElement('blazor-custom-element', { 'element-title': 'Blazor Micro Frontend (Unscoped)' })}
            </div>}
            <div id="blazor-message">No message from blazor received.</div>
            <div className="card">
                <div>
                    <button onClick={sendMessage}>
                        Send message to blazor
                    </button>
                    <button onClick={incrementCount}>
                        Count is {count}
                    </button>
                </div>
            </div>
        </div>
    );
}