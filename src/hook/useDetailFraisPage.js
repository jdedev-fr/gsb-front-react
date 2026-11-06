import { useNavigate, useParams } from 'react-router-dom'
import { useHttpRequest } from './useHttpRequest'

export function useDetailFraisPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { isLoading, error, data } = useHttpRequest(`http://localhost:8080/api/fiches-frais/${id}`)

    const back = () => {
        navigate('/listes-frais')
    }
    return { isLoading, id, error, data, back }
}