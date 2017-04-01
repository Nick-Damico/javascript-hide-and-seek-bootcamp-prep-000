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

  let prevChildNode;

  const grandNode = document.getElementById('grand-node');

  const nodeChildren = grandNode.querySelectorAll('div');

  for(var i = 0; i < nodeChildren.length; i++) {
    // Loop through nodelist, if current node has a child element it evaluates to 'true' and we know we can go 'deeper'.
   // If it evaluates 'false' then we know there are no more nested elements and we return the last node which 'did' have a child element because it is the deepest stored node.
    if(nodeChildren[i].hasChildNodes()) {
      //  We assign the current node that passes to the prevChildNode variable and 'continue' the loop.
      prevChildNode = nodeChildren[i]
      continue

    }

  }

  return prevChildNode
}
