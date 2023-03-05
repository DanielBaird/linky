
// =============================================================
// render things
// -------------------------------------------------------------

function elementContainingString(str, tag='div') {
    const elem = document.createElement(tag)
    elem.innerHTML = str
    return elem
}

function renderEntityFull(entity) {
    return [
        '<h4 id="entity-' + entity.name + '">' + renderEntityNameLink(entity.name) + '</h4>',
        '<p>',
            entity.info,
        '</p>',
        renderEntityLinks(entity)
    ].join('\n')
}

function renderEntityLinks(entity) {
    const links = getEntityLinks(entity.name).map( l => renderLink(l) )
    return [
        '<ul style="font-size: smaller">',
        ...links,
        '</ul>',
    ].join('\n')
}

function renderLink(link) {
    return `<li>${renderEntityNameLink(link.left)} >> <i>${link.conn}</i> >> ${renderEntityNameLink(link.right)}</li>\n`
}

function renderEntityNameLink(entityName) {
    return `<a href="#entity-${entityName}">${entityName}</a>`
}

// =============================================================
// Handle Links
// -------------------------------------------------------------

// get links of specified type
function getLinks(connType) {
    return links.filter( l => l.conn === connType )
}

// get links of specified type with specified entity on left
function getLeftLinkedItems(connType, entityName) {
    return getLinkedItems(connType, entityName, 'left')
}

// get links of specified type with specified entity on right
function getRightLinkedItems(connType, entityName) {
    return getLinkedItems(connType, entityName, 'right')
}

// get links of specified type, entity, and side
function getLinkedItems(connType, entityName, side) {
    return links.filter( l => (l.conn === connType && l[side] === entityName) )
}

// get links for the named entity
function getEntityLinks(entityName) {
    return links.filter( l => (l.left === entityName || l.right === entityName) )
}

// =============================================================
// Handle Entities
// -------------------------------------------------------------

// given a entityName, get the entity
function getEntity(entityName) {
    return entities.find( e => e.name === entityName )
}

// =============================================================
// Can't resist not sucking
// -------------------------------------------------------------

function titleCase(str) {
    return str.split(/\s+/).map( w => w[0].toUpperCase() + w.slice(1) ).join(' ')
}
