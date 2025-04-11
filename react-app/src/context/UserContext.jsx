import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // EditUser state variables
    const [showEditForm, setShowEditForm ] = useState(false);
    // DeleteUser state variables
    const [showDeleteForm, setShowDeleteForm ] = useState(false);
    
    const [selectedUser, setSelectedUser ] = useState(null);
    const [users, setUsers] = useState([]);

    return(
        <UserContext.Provider value={{
            showEditForm,
            setShowEditForm,
            selectedUser,
            setSelectedUser,
            showDeleteForm,
            setShowDeleteForm,
            users,
            setUsers
        }}>
            {children}
        </UserContext.Provider>
    );
};