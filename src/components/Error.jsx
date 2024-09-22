import { Link } from "react-router-dom";
function Error() {
    return (
        <div class="error">
        <div class="container">
            <h3 class="error-title">Произошло ошибка</h3>
            <p class="error-description">проверьте подключение к интернету.возможо сервер отключился или серевер не работатет.</p>
            <Link to="/"  class="white-btn">обновить</Link>
        </div>
    </div>
    )
}


export default Error;