<?php
    $link = '/';
    if(
        is_post_type_archive('product') || is_post_type_archive('aktsii') || is_post_type_archive( 'poleznye-stati' )|| is_post_type_archive( 'service' )
        || is_singular('product') || is_singular('aktsii')  || is_singular( 'poleznye-stati' ) || is_singular( 'service' ) || get_field('is_shop') || is_page( 25662 )
    ){
        $link = '/internet-magazin/'; 
    }
?>
<div class="popup _fixed" id="thanks">
    <div class="popup__container _container">
        <button class="popup__close">
            <svg width="22" height="22" viewBox="0 0 22 22">
                <use xlink:href='<?php bloginfo( 'template_url' ) ?>/assets/img/svg/icons.svg#close' />
            </svg>
        </button>
        <div class="form form-white">
            <h4>Спасибо!</h4>
            <p>Ваша заявка успешно оформлена. <br>
                Мы свяжемся с вами в ближайшее время!</p>
            <a href="<?php echo $link ?>" class="_btn _btn-border">На главную</a>
        </div>
    </div>
</div>