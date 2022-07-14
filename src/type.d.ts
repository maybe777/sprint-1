interface IBurgerItem {
    _id: string,
    name: string,
    type?: String,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number
}

type IIngredientState = {
    dataRequest?: boolean,
    dataFailed?: boolean,
    data: Array<IBurgerItem>
}

type IOrderState = Omit<IIngredientState, 'data'> & {
    number: number
}

interface IHeaderData {
    title?: String,
    data: Array<IBurgerItem>,
    ref?: MutableRefObject<null>,
}

interface IConstructorState {
    items: Array<IBurgerItem>
}

interface IDetailsState {
    item: any
}

interface IUserCredentials {
    user: TUser,
    accessToken: string,
    refreshToken: string
}

type TUser = {
    name: string,
    email: string,
}

type TRegisterForm = TUser & {
    password: string,
}

type TOptions = {
    method: string,
    headers: { [name: string]: string },
    body?: string
}

type TBurgerProps = {
    item : IBurgerItem,
    count: number
}

type TConstructorProps = Omit<TBurgerProps, 'count'> & {
    index: number
}

type TOrderDetails = {
    orderNumber: number,
    orderFailed: Boolean
}

interface IModal {
    title: string,
    onClose: () => void,
    children: any
}

type TProtectedRoute = {
    isAuthOnly?: boolean,
    path: string,
    exact: boolean
}

interface IElementCalc {
    currentPosition: number,
    sectionPositionArray: IHeaderData[],
    startIndex: number,
    endIndex: number
}