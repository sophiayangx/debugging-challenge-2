var stringWithDavid = "Yes there is David here."
var stringWithoutDavid = "Nope, none of that."

function containsDavid(str) {
  var davidLocation = str.indexOf("David");
  return davidLocation > -1}

  console.log(containsDavid(stringWithDavid)) // should log "true"
  console.log(containsDavid(stringWithoutDavid)) // should log "false"
