<?php
    $title = $args['title'];
?>
<section class="section becomeadealer-form <?php echo $args['class'] ?>">
    <div class="section__container _container">
        <div class="section__body">
            <div class="section__top-accent">
                <h2><?php echo $title ?></h2>
            </div>
            <div class="section__flex">
                <div class="section__flex-left">
                    <div class="form form-hover">
                        <form action="#">
                            <div class="form__row">
                                <div class="form__item" data-required>
                                    <input type="text" name="company_name" placeholder="Название компании">
                                </div>
                                <div class="form__item" data-required>
                                    <input type="text" name="fio" placeholder="ФИО">
                                </div>
                            </div>
                            <div class="form__row">
                                <div class="form__item" data-required>
                                    <input type="text" name="phone" class="_mask-phone" placeholder="Телефон">
                                </div>
                                <div class="form__item">
                                    <input type="email" name="email" placeholder="Электронная почта">
                                </div>
                            </div>
                            <div class="form__row">
                                <div class="form__item" data-required>
                                    <input type="text" name="city" placeholder="Город, область">
                                </div>
                                <div class="form__item">
                                    <input type="text" name="website" placeholder="Сайт">
                                </div>
                            </div>
                            <div class="form__item textarea">
                                <textarea name="msg" placeholder="Введите сообщение"></textarea>
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
                    <div class="certificate">
                        <img src="<?php bloginfo( 'template_url' ) ?>/assets/img/certificate.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>