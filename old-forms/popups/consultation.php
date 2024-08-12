<div class="popup _fixed" id="consultation">
    <div class="popup__container _container">
        <button class="popup__close">
            <svg width="22" height="22" viewBox="0 0 22 22">
                <use xlink:href='<?php bloginfo( 'template_url' ) ?>/assets/img/svg/icons.svg#close' />
            </svg>
        </button>
        <div class="form form-white">
            <form action="#">
                <h4>Получить консультацию</h4>

                <div class="form__row">
                    <div class="form__item" data-required>
                        <input type="text" name="name" placeholder="Ваше имя">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__item" data-required>
                        <input type="text" name="city" placeholder="Город">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__item" data-required>
                        <input type="text" name="phone" class="_mask-phone" placeholder="Телефон">
                    </div>
                </div>

                <div class="form__bottom">
                    <button class="_btn _btn-red">Отправить заявку</button>
                    <p>Нажимая на кнопку «Отправить заявку» вы соглашаетесь с
                        <a href="/politika-konfidentsialnosti/" target="_blank">Политикой конфиденциальности</a>  и даёте согласие на обработку персональных данных.
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>