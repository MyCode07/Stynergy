<?php
    $contacts = get_field('contacts', 'option');
    $socilals = $contacts['socials'];
?>
<div class="phone-popup">
    <ul>
        <li>
            <a href="<?php echo $socilals['telegram'] ?>" target="_blank">
                <img src="<?php bloginfo( 'template_url' ) ?>/assets/img/icons/telegram.svg" alt="">
            </a>
        </li>
        <li>
            <a href="<?php echo $socilals['whatsapp'] ?>" target="_blank">
                <img src="<?php bloginfo( 'template_url' ) ?>/assets/img/icons/whatsapp.svg" alt="">
            </a>
        </li>
    </ul>
    <button class="phone-popup__open">
        <img src="<?php bloginfo( 'template_url' ) ?>/assets/img/icons/phone.svg" alt="">
    </button>
</div>