export default function onChangeInputRequire(value , state , nameState , setState , nameError , setError) {
    setState({
        ...state,
        [nameState] : value ? value : null
    })
    setError({
        ...nameError,
        [nameState] : value ? false : true
    })
}
