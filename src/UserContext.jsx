import { createContext, useState } from "react";

export const UserContext = createContext();
// context lai initialize gareko

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("dinesh");

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <div style={{ backgroundColor: "pink", padding: "30px" }}>
                {children}
            </div>
        </UserContext.Provider>
        // provider ley data lai update garera arko ma pathai dinxa
        // user ra setUser lai child components ley use garna sakxa
    );
};
