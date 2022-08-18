import { useContext } from 'react'
import { todoContext } from '../provider';

//just to help to use context created on provider (that consumes the api)
function UseTodoContext() {
    const { all, getAll } = useContext(todoContext);

    return{ all, getAll };
}

export default UseTodoContext