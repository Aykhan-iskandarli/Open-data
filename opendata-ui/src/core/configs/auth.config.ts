
export function getToken(): string | null {
    return localStorage.getItem("authToken");
}
