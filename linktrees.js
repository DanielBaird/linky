
// =============================================================
// render a tree
// -------------------------------------------------------------

// direction is one of 'left' or 'right', whichever is
// considered "root-wards" for this connType. In a real project
// I'd probably make it always right-goes-to-the-root.
//
// Note that tech convenntion generally refers to root-wards as
// being "up", which doesn't agree with the tree analogy, since
// trees branch off going upward, so the root of a tree is down.
function renderTree(connType, direction="right") {
    const roots = findRoots(connType, direction)
    return [
        '<h3>',
        titleCase(connType) + ' Tree',
        '</h3>',
        roots.map( r => renderNode(connType, r.name, direction) ).join('\n')
    ].join('\n')
}

// render one tree node (name and immediate children)
function renderNode(connType, entityName, direction) {
    const childLinks = getLinkedItems(connType, entityName, direction)

    console.log(entityName, childLinks)
    const children = childLinks.map( c => renderNode(connType, c[flip(direction)], direction) )

    return [
        '<li>',
        renderEntityNameLink(entityName),
        '<ul>',
        ...children,
        '</ul>',
        '</li>'
    ].join('\n')
}

// =============================================================
// handle nesting
// -------------------------------------------------------------

function flip(direction) {
    if (direction === 'right') return 'left'
    return 'right'
}

// find the top-est things in a link tree/forest
function findRoots(connType, direction) {
    return entities.filter( e => {
        let linkCount = {}

        linkCount.left = getLeftLinkedItems(connType, e.name).length
        linkCount.right = getRightLinkedItems(connType, e.name).length

        // no links means this entity isn't in the tree at all
        if (linkCount.left === 0 && linkCount.right === 0) return false

        // if there's 0 links "up", it's a root
        return (linkCount[flip(direction)] === 0)
    })
}
