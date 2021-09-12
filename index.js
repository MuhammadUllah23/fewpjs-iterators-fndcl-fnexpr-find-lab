function superbowlWin(superbowl) {
    let result = superbowl.find( record => record.result === "W" )
return !!result ? result.year : undefined
}