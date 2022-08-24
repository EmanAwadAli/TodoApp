const ItemPriority = ({ priority }) => {
    let priorityIcon = '';
    if (priority === 'URGENT') {
        priorityIcon = '🔴'
    } else if (priority === 'HIGH'){
        priorityIcon = '🟠'
    } else if (priority === 'MEDIUM') {
        priorityIcon = '🟡'
    } else if (priority === 'LOW') {
        priorityIcon = '🟢'
    }

    return priorityIcon;
}

export default ItemPriority;