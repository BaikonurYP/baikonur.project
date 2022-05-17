import Skin1 from '../../images/skins/plain_1.svg'
import Skin2 from '../../images/skins/plain_2.svg'
import Skin3 from '../../images/skins/plain_3.svg'

export const fetchLeadersApi = () =>
    Promise.resolve({
        leaders: [
            { id: 1, name: 'Уничтожитель 1', avatar: Skin1, cost: 7896540 },
            { id: 2, name: 'Разрушитель', avatar: Skin2, cost: 7896540 },
            { id: 3, name: 'Уничтожитель 2', avatar: Skin3, cost: 7896540 },
            { id: 4, name: 'Уничтожитель', avatar: Skin1, cost: 7896540 },
            { id: 5, name: 'Уничтожитель', avatar: Skin1, cost: 7896540 },
        ],
        loading: false,
        error: null,
    })
