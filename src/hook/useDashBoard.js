import { useHttpRequest } from "./useHttpRequest"

export function useDashBoard() {
    const { isLoading, error, data } = useHttpRequest("http://localhost:8080/api/fiches-frais")
    return { isLoading, error, data }
}