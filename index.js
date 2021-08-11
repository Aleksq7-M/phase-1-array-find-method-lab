function superbowlWin(array){
    const winningYear = array.find(element => element.result === 'W')
    console.log('LOG:', winningYear);
    if (winningYear !== undefined){
        return winningYear.year;
    }
}