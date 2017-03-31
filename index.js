function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {

  return document.getElementById('nested').getElementsByClassName('target')[0];

}


function increaseRankBy(n) {

  const rankedLi = document.querySelectorAll('.ranked-list li');

  for(var i = 0; i < rankedLi.length; i++) {

    let liNumber = parseInt(rankedLi[i].textContent);
    rankedLi[i].textContent = (liNumber + n);

  }

}

function deepestChild() {

  const grandDiv = document.getElementById('grand-node');

  const grandDivChildren = grandDiv.querySelectorAll('div');

  for(var i = 0; i < grandDivChildren.length; i++) {

    if(grandDivChildren[i].textContent !== '') {
      return grandDivChildren[i]
    }

  }


}
