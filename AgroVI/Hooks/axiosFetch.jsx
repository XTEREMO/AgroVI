export const dataFetch_at_8000 = async (endpoint, config) => {
        const url = `http://localhost:8000/${endpoint}`;
        try {
          const data = await fetch(url, config)
                .then( response => response.json())
                .catch(error => console.log(error))
                return data
        } catch (error) {
          console.error(error);
            return null;
        }
    }

export const dataFetch_at_5000 = async (endpoint, config) => {
        const url = `http://127.0.0.1:5000/${endpoint}`;
        try {
          const data = await fetch(url, config)
                .then( response => response.json())
                .catch(error => console.log(error))
                return data
        } catch (error) {
          console.error(error);
            return null;
        }
    }