interface adminId {
    fname: string
    username: string
    _id: string
}

interface categoryId {
    title: string
    _id: string
}



export interface datas {
    adminId: adminId,
    available: string
    categoryId:categoryId
    createdAt: string
    desc: string
    info: [any]
    oldprice: number
    price: number
    rating: number
    stock: number
    title: string
    units: string
    updatedAt: string
    urls: [string]
    views: number
    __v: number
    _id: string
}

interface getData{
    limit: number
    skip: number
}

interface getDatabyId{
    id: string
}

export interface product_request{
    getData: (data:getData) => any
    getDatabyId: (data: getDatabyId) => any
}