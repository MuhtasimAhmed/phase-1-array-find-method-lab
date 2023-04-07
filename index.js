function superbowlWin(array){
    let foundYear = array.find(findWin)
    if (typeof foundYear === 'undefined'){
      return foundYear
    } else {
      return foundYear.year
    }
        
    }
function findWin(object){
    return object.result === "W"
}

