import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [showEditForm, setShowEditForm ] = useState(false);
    const [selectedUser, setSelectedUser ] = useState(null);

    return(
        <UserContext.Provider value={{
            showEditForm,
            setShowEditForm,
            selectedUser,
            setSelectedUser
        }}>
            {children}
        </UserContext.Provider>
    );
};