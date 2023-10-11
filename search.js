export function searchInList(list, searchField, searchValue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const results = list.filter(item => item[searchField] === searchValue);
        if (results.length > 0) {
          resolve(results);
        } else {
          reject(`За пошуком по ${searchField}:${searchValue} не знайдено.`);
        }
      }, 1000);
    });
  }
  