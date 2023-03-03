const listItemsRef = document.querySelectorAll('#categories li.item');
const count = listItemsRef.length;
console.log(`Number of categories: ${count}`);

listItemsRef.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});