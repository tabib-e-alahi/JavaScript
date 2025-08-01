const names = ["Abul", "Babul", "kabul", "Abul", "Babul", "Sabul"]

function remove_duplicates(dupli_arra) {
    const unique = [];
    for (const name of dupli_arra) {
        if (!unique.includes(name))
            unique.push(name)
    }

    return unique
}

const no_duplicates = remove_duplicates(names);
console.log(no_duplicates)