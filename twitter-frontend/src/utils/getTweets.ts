export const getTweets = async () => {
    try {
        const TweetsApi = 'http://localhost:3000/tweets';
        const response = await fetch(TweetsApi);
        
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Hubo un error en la obtención de los datos: " + error);
        return [];  // Devolver un array vacío en caso de error
    }
}