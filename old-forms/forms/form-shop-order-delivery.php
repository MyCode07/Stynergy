<?php
    $rekvizity = get_field('rekvizity', 'option');
?>
<section class="section _shop-contacts-form _close-to-footer" id="free-estimate">
    <div class="section__container _container">
        <div class="section__body">
            <div class="section__flex">
                <div class="section__flex-left">
                    <div class="form form-white">
                        <h3>Заказать доставку</h3>
                        <p>Если наши офисы расположены неудобно для вас, воспользуйтесь нашей бесплатной курьерской доставкой образцов на дом</p>
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
                            </div>

                            <div class="form__bottom">
                                <p>Нажимая на кнопку «Отправить заявку» вы соглашаетесь с
                                    <a href="/politika-konfidentsialnosti/" target="_blank">Политикой конфиденциальности</a>  и даёте согласие на обработку персональных данных.
                                </p>
                                <button class="_btn _btn-red">Отправить заявку</button>
                            </div>
                        </form>
                        <div class="_shop-contacts-form-reqs">
                            <h4>Реквизиты ООО "Стинержи"</h4>
                            <p>
                                <span>ИНН <?php echo $rekvizity['inn'] ?></span>
                                <span>ОГРН <?php echo $rekvizity['ogrn'] ?></span>
                            </p>
                        </div>

                    </div>
                </div>
                <div class="section__flex-right">
                    <div class="free-estimate__img">
                        <img src="<?php bloginfo( 'template_url' ) ?>/assets/img/free-estimate.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>