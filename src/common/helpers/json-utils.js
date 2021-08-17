/**
 * Returns a map of seating allocation against
 * the halls available at the facility (i.e. the cinema)
 *
 * @param layout, groups
 * @returns []
 */
export const mapReservationsOnFacility = (layout, groups) => {
    const reservations = getFlatReservations(groups);

    for (let section of layout['sections']) {
        for (let row of section['rows']) {
            for (let seat of row['seats']) {
                const matched = reservations.find(rsv =>
                    rsv['section'] == section['name'] &&
                    rsv['row'] == row['row'] && seat['seat'] == rsv['seat']);

                if (matched) {
                     Object.assign(seat, matched);
                }
            }
        }
    }
    return layout;
};


/**
 * returns a flat array of seat reservations
 * from its grouped data
 *
 * @param groups
 * @returns {*[]}
 */
export const getFlatReservations = (groups) => {
    // moves parent level props into seats array
    const flatGroups = groups.map((item, idx) => {
        item['seats'].map((seat) => {
            seat.label = `G${idx+1}`;
            // seat.id = item['id'];
            return seat;
        });
        return item;
    });

    // returns a flat array of seat reservations
    return [].concat(...flatGroups.map((ap) => ap['seats']));
};



function isEmpty(obj){
    return (Object.keys(obj).length) === 0;
}

function isObj(obj) {
    return (typeof obj === 'object') && (obj !== null);
}

/**
 * returns if the passed object is valid &
 * it contains any keys (properties)
 *
 * @param obj
 * @retrun boolean
 */
export function containsData(obj) {
    return isObj(obj) && !isEmpty(obj);
}


