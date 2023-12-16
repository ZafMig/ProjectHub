
export const joinProject = async () => {
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const project = {
          id: 123,
          name: 'Проект Примера',
         
        };
        resolve(project);
      }, 2000); 
    });
  };
  