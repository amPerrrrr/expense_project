export default function onChangeInputNormalNoRequire(value , state , nameState , setState ) {
    setState({
        ...state,
        [nameState] : value ? value : null
    })
}
