<?php
    $title = $args['title'];
?>
<section class="section _bordered" id="free-estimate">
    <div class="section__container _container">
        <div class="section__body">
            <div class="section__top">
                <h3><?php echo $title ?></h3>
            </div>
            <div class="section__flex">
                <div class="section__flex-left">
                    <div class="form">
                        <form action="#">
                            <div class="form__row">
                                <div class="form__item" data-required>
                                    <input type="text" name="name" placeholder="Ваше имя">
                                </div>
                                <div class="form__item" data-required>
                                    <input type="text" name="phone" class="_mask-phone" placeholder="Телефон">
                                </div>
                            </div>
                            <div class="form__row">
                                <div class="form__item" data-required>
                                    <input type="text" name="address" placeholder="Адрес">
                                </div>
                                <div class="form__item" data-required>
                                    <input type="text" name="ploshad" placeholder="Площадь и вид кровли">
                                </div>
                            </div>

                            <div class="form__item textarea" data-required>
                                <textarea name="msg" placeholder="Введите сообщение"></textarea>
                            </div>
                            <div class="file">
                                <label for="zamer-3d-file">
                                    <div class="value filename">
                                        <svg viewBox="0 0 13 19">
                                            <use xlink:href="<?php bloginfo('template_url') ?>/assets/img/svg/icons.svg#file"></use>
                                        </svg>
                                        <span>Прикрепить файл</span>
                                    </div>
                                    <input id="zamer-3d-file" name="file" type="file">
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
                </div>
                <div class="section__flex-right">
                    <div class="free-estimate__img">
                        <img src="<?php bloginfo('template_url') ?>/assets/img/free-estimate.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>