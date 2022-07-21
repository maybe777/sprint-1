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
    __v: string
}

type IIngredientState = {
    dataRequest?: boolean,
    dataFailed?: boolean,
    data: Array<IBurgerItem>
}

type IOrderState = {
    orderRequest: boolean,
    orderFailed: boolean,
    number: number
}

interface IHeaderData {
    title?: string | undefined,
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
    item: IBurgerItem,
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

interface IAuthInitialState {
    form: {
        login: string,
        password: string
    },

    loggedIn: boolean,
    loggedOut: boolean,
    userRequest: boolean,
    loginRequest: boolean,
    logoutRequest: boolean,
    userError: boolean,
    loginError: boolean,
    logoutError: boolean,
    user: TUser | null
}

interface IRegisterInitialState {
    form: {
        name: string,
        email: string,
        password: string
    },
    registrationRequest: boolean,
    registrationError: boolean,
}

interface IUserProfileInitialState{
    form?: {
        name: string,
        email: string
    },
    editProfileRequest: boolean,
    editProfileError: boolean,
    profileRequest: boolean,
    profileError: boolean,
    error: string
}