const content = document.querySelector('.container').innerHTML?.split('');
console.log('content', content);

const validElems = content
    .filter(char => char.match(/[a-zA-Z0-9]/i))
    .map(char => char.toLowerCase())
    .reduce((tot, item) => {
        tot[item] = tot[item] + 1 || 1;
        return tot;
    }, {});

console.log(validElems);

const sortedElems = Object.entries(validElems).sort((a, b) => a[1] - b[1]);

console.log(sortedElems);
