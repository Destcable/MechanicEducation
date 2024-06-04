const SelectTopicInfo = () => (
    <>
        <span className="mb-3 fw-bold">Страница выбора предмета</span>
        <span>
            На главном экране вы можете выбрать интересующий вас предмет
            для дальнейшего изучения. Эта функция позволяет быстро и
            удобно найти необходимый материал и начать обучение. Чтобы
            выбрать предмет, следуйте этим простым шагам:
        </span>
        <ol>
            <li>
                <span className="fw-bold">Просмотр доступных предметов: </span>
                В правой части экрана отображаются все доступные предметы.
                Каждый предмет представлен названием.
            </li>
            <li>
                <span className="fw-bold">Выбор предмета: </span>
                Нажмите на кнопку интересующего вас предмета.
                После этого откроется страница с темами выбранного предмет.
            </li>
            <li>
                <span className="fw-bold">Начало обучения: </span>
                На странице предмета вы найдете разделы с лекциями, заданиями,
                дополнительными материалами и тестами. Выберите нужный раздел и приступайте к изучению.
            </li>
        </ol>
    </>
);

export default SelectTopicInfo;