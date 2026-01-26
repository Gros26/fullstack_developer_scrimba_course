function setPermissionLevel(permissionLevel, name1, name2, name3) {
    console.log(`Now ${name1} has ${permissionLevel} level access.`)
    console.log(`Now ${name2} has ${permissionLevel} level access.`)
    console.log(`Now ${name2} has ${permissionLevel} level access.`)
}

setPermissionLevel("admin", "Clare", "Josh", "Per")

function setPermissionLevelImprove(permissionLevel, ...names) {
    names.forEach(element => {
        console.log(`Now ${element} has ${permissionLevel} level access.`)
    });
}

setPermissionLevelImprove("admin", "Kare", "Per", "Justin", "Kevin")