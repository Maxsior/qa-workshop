const api = {
    get() {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        const timeout = Math.random() * 3000;

        return new Promise((resolve) => {
            setTimeout(() => resolve(todos), timeout)
        });
    },
    async save(todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    },
}

export function useApi() {
    return api;
}
