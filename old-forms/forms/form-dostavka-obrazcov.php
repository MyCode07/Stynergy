<?php
    $title = $args['title'];
?>
<section class="section _bordered <?php echo $args['class'] ?>" id="free-estimate">
    <div class="section__container _container">
        <div class="section__body">
            <div class="section__top">
                <h3><?php echo $title ?></h3>
            </div>
            <div class="form">
                <form action="#">
                    <div class="form__row">
                        <div class="form__item" data-required>
                            <input type="text" name="name" placeholder="Ваше имя">
                        </div>
                        <div class="form__item" data-required>
                            <input type="text" name="phone" class="_mask-phone" placeholder="Телефон">
                        </div>
                        <div class="form__item" data-required>
                            <input type="text" name="address" placeholder="Адрес доставки">
                        </div>
                    </div>

                    <div class="form__item textarea" data-required>
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
    </div>
</section>