import React, { createContext, useState } from 'react'

const FavAccountContext = createContext()

export function AccountProvider({ children }) {
    const [favAccounts, setFavAccounts] = useState([])
    
    const addAccount = ( account ) => {
        setFavAccounts((prevState) => [...prevState, account ])
        console.log('add');
        console.log(favAccounts);
    }

    const isTheAccountOn = ( account ) => {
        for (let i = 0; i < favAccounts.length; i++) {
            if(favAccounts[i].name === account.name)  {
                return true
            }
        }
    
    }

    const deleteAllAccounts = () => {
        for (let i = 0; i < favAccounts.length; i++) {
            setFavAccounts(favAccounts.pop())
        }
        console.log(favAccounts);
    }

    const deleteAccount = ( account ) => {
        let DONDELASTENES
        for (let i = 0; i < favAccounts.length; i++) {
            if(favAccounts[i].name === account.name)  {
                DONDELASTENES = i
            }
        }
        setFavAccounts(favAccounts.slice(1, DONDELASTENES))
        console.log('delete');
        console.log(favAccounts);

    }

    return(
        <FavAccountContext.Provider value={{ favAccounts, addAccount, deleteAccount, isTheAccountOn, deleteAllAccounts}}>
            {children}
        </FavAccountContext.Provider>
    )
}

export default FavAccountContext