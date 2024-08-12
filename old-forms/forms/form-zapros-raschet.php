<?php
    $class = $args['class'];
?>
<div class="form <?php echo $class ?>">
    <form action="#">
        <h4>Запрос на расчет</h4>
        <div class="form__row">
            <div  class="form__item" data-required>
                <input type="text" name="name" placeholder="Ваше имя">
            </div>
            <div  class="form__item" data-required>
                <input type="text" name="phone" class="_mask-phone" placeholder="Телефон">
            </div>
            <div  class="form__item">
                <input type="email" name="email" placeholder="Email">
            </div>
        </div>
        <div class="form__item textarea" data-required>
            <textarea placeholder="Введите сообщение"></textarea>
        </div>
        <div class="file">
            <label for="zapros-file">
                <div class="value filename">
                    <svg viewBox="0 0 13 19">
                        <use xlink:href="<?php bloginfo('template_url') ?>/assets/img/svg/icons.svg#file"></use>
                    </svg>
                    <span>Прикрепить файл</span>
                </div>
                <input id="zapros-file" name="file" type="file">
            </label>
            <div class="_delete-file">Удалить</div>
        </div>
        <div class="form__bottom">
            <p>Нажимая на кнопку «Отправить заявку» вы соглашаетесь с
                <a href="/politika-konfidentsialnosti/" target="_blank">Политикой конфиденциальности</a>  и даёте согласие на обработку персональных данных.
            </p>
            <button class="_btn _btn-red">Отправить заявку</button>
        </div>
    </form>
</div>