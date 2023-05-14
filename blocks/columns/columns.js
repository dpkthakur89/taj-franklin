export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  //if(block.classList.contains('offers')){
    var rowCount = 1;
    const ul = document.createElement('ul');
  //}
  [...block.children].forEach((row) => {
    //alert('rowCount :'+rowCount);
    //if(block.classList.contains('offers')){
      const li = document.createElement('li');
      var colCount = 1;
    //}
    [...row.children].forEach((col) => {
      //alert('colCount :'+col.innerHTML);
      /*const pic = col.querySelector('picture');
      const picWrapper = pic.closest('div');
      if (picWrapper && picWrapper.children.length === 1) {
        // picture is only content in column
        picWrapper.classList.add('columns-img-col');
      }*/

      if(block.classList.contains('offers')){
        
        if(colCount === 1){
          li.innerHTML = col.querySelector('li').innerHTML;
          li.className = rowCount;
          li.onclick = function() {
            //alert(li.className);
            var linkClassName = li.className;
            var newDisplayItem = document.querySelectorAll(`.columns.offers > .number-${linkClassName}-offer > .displayNo`);
            var oldDisplayItem = document.querySelectorAll('.columns.offers .displayYes');
            oldDisplayItem.forEach((itemOld) => {
              itemOld.classList.remove('displayYes');
              itemOld.classList.add('displayNo');
            });
            
            newDisplayItem.forEach((itemNew) => {
              itemNew.classList.add('displayYes');
              itemNew.classList.remove('displayNo');
            });
          }
          //alert(col.innerHTML);
          //if(rowCount == 1){
            col.innerHTML = '';
          //}
        }
        
        col.parentNode.classList.add(`number-${rowCount}-offer`);
        if(rowCount > 1 ){
          //col.parentNode.classList.add('displayNo');
          if(colCount === 1){
            col.classList.add('displayNoAlways');
          }else{
            col.classList.add('displayNo');
          }
          
          //const picWrapper = pic.closest('div');
          
        }else{
          //col.parentNode.classList.add('displayYes');
          if(colCount === 1){
            col.classList.add('displayAlways');
          }else{
            col.classList.add('displayYes');
          }
          
          //col.parentNode.classList.add('displayNo');
          //col.querySelector('ul').classList.add('displayNo');
          
        }
        
      }

      

      /*if(colCount === 1){
        const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }else{
        if(rowCount > 1){
          col.classList.add('noDisplay');
        }else{
          col.classList.add('yesDisplay')
        }
      }
      }*/
      
      colCount++;
    });
    ul.append(li);
    rowCount++;
  });

  block.firstElementChild.firstElementChild.append(ul);

  const offerItemLink = document.querySelectorAll('.columns.offers > .displayYes li');
  offerItemLink.onclick = function() {
    alert(offerItemLink.className);
    var linkClassName = offerItemLink.className;
    var newDisplayItem = document.querySelector(`columns.offers > div:nth{${linkClassName}}`);
    //var oldDisplayItem = document.querySelector(`columns.offers > .displayYes-${*}`);
    newDisplayItem.classList.append('displayYes');
    newDisplayItem.classList.remove('displayNo');
    //oldDisplayItem.classList.remove('displayYes');
    //oldDisplayItem.classList.append('displayNo');
  }

}
