import React, { createContext, useState } from 'react'
import { API_KEY } from '../Utils/LolApiHelpers'
const FavAccountContext = createContext()

export function AccountProvider({ children }) {
    const [favAccounts, setFavAccounts] = useState([])
    const addAccount = ( account ) => {
        setFavAccounts((prevState) => [...prevState, account ])
    }

    const isTheAccountOn = ( account ) => {
        let isThere = false
        for (let i = 0; i < favAccounts.length; i++) {
            if(favAccounts[i].name === account.name)  {
                isThere = true
            }
            console.log(i + " " +favAccounts[i].name+ " " +account.name+" "+ isThere);
            
        }
        if (isThere) {
            return true
        } else {
            return false
        }

    }

    const deleteAllAccounts = () => {
        for (let i = 0; i < favAccounts.length; i++) {
            setFavAccounts(favAccounts.pop())
        }
    }

    const deleteAccount = ( account ) => {
        let DONDELASTENES
        for (let i = 0; i < favAccounts.length; i++) {
            if(favAccounts[i].name === account.name)  {
                DONDELASTENES = i
            }
        }
        setFavAccounts(favAccounts.slice(0, DONDELASTENES))

    }

    return(
        <FavAccountContext.Provider value={{ favAccounts, API_KEY, addAccount, deleteAccount, isTheAccountOn, deleteAllAccounts}}>
            {children}
        </FavAccountContext.Provider>
    )
}

export default FavAccountContext