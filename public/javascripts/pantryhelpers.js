
let change = false;

(() => {
  const setup = () => {
    let pantryItems = Array.from(document.getElementsByClassName('pantryitem'));
    let archiveItems = Array.from(document.getElementsByClassName('archiveitem'));
    let pantryContainer = document.getElementById('pantrycontainer');
    let archiveContainer = document.getElementById('archive');

    const init = () => {
      pantryItems.forEach((item, index) => {
        let deleteButton = item.querySelector('.delete');
        deleteButton.addEventListener('click', (e) => deleteFoodItem(e, item.dataset.id, index));
        let archiveButton = item.querySelector('.archive');
       archiveButton.addEventListener('click', (e) => archiveFoodItem(e, item.dataset.id, index));
      });
    };
    
    const rerenderPage = () => {
      pantryContainer.innerHTML = '';
      pantryItems.forEach((item) => {
        pantryContainer.appendChild(item);
      });
      archiveContainer.innerHTML = '';
      archiveItems.forEach((item) => {
        archiveContainer.appendChild(item);
      });
      change = false;
    };

    const deleteFoodItem = (e,id,index) => {
      console.log('click');
      console.log(id,index);
      pantryItems.splice(index,1);
      axios.delete(`/foods/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      rerenderPage();
    };

    const archiveFoodItem = (e,id,index) => {
      axios.patch(`/foods/archive/${id}`, { updated: true })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      pantryItems[index].classList.add('archiveitem');
      pantryItems[index].classList.remove('pantryitem');
      archiveItems.push(pantryItems[index]);
      pantryItems.splice(index,1);
      rerenderPage();
    };
    
    return {
      init,
      deleteFoodItem,
      archiveFoodItem,
      rerenderPage
    };
  };
  window.setup = setup;
})();

function changeTracker() {
  if (!change) {
    const arrayManip = setup();
    arrayManip.init();
    change = true;
  }
}


changeTracker();
document.addEventListener('click', () => changeTracker()); // this is the least elegant way to do this possible but couldn't figure out how else