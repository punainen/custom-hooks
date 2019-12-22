import { useState, useEffect } from 'react'
import axios from 'axios'

export const useResource = (baseUrl) => {
    const [resources, setResources] = useState([])

    const setAll = () => {
        const request = axios.get(baseUrl)
        request.then(response => setResources(response.data))
    }

    useEffect(setAll, [])

    const create = async newObject => {
        const response = await axios.post(baseUrl, newObject)
        setResources(resources.concat(response.data))
        return response.data
    }

    const service = {
        create,
    }

    return [
        resources, service
    ]
}